import React, { useMemo, useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Environment, Lightformer } from "@react-three/drei"
import * as THREE from "three"

/* ------------------------------------------------------------------
   A ribbon of printed laminate film, flowing and twisting through the
   dark. Geometry is rebuilt each frame from a parametric curve — only
   ~500 vertices, so it is cheap, and it lets the film twist the way a
   real web does as it comes off the unwind.
------------------------------------------------------------------ */

const SEGMENTS = 190

function Ribbon({
  color,
  halfWidth = 0.34,
  length = 26,
  ampY = 1.25,
  ampZ = 1.9,
  freqY = 0.4,
  freqZ = 0.29,
  twist = 0.34,
  speed = 0.4,
  seed = 0,
  offset = [0, 0, 0],
  roughness = 0.2,
  metalness = 0.96,
  iridescence = 0.45,
  opacity = 1,
}) {
  const meshRef = useRef()

  const geometry = useMemo(() => {
    const g = new THREE.BufferGeometry()
    const count = (SEGMENTS + 1) * 2
    g.setAttribute("position", new THREE.BufferAttribute(new Float32Array(count * 3), 3))
    g.setAttribute("uv", new THREE.BufferAttribute(new Float32Array(count * 2), 2))

    const uv = g.attributes.uv.array
    const idx = []
    for (let i = 0; i <= SEGMENTS; i++) {
      const u = i / SEGMENTS
      uv[i * 4 + 0] = u; uv[i * 4 + 1] = 0
      uv[i * 4 + 2] = u; uv[i * 4 + 3] = 1
      if (i < SEGMENTS) {
        const a = i * 2
        idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2)
      }
    }
    g.setIndex(idx)
    return g
  }, [])

  // scratch vectors, allocated once
  const v = useMemo(
    () => ({
      p: new THREE.Vector3(), pa: new THREE.Vector3(), pb: new THREE.Vector3(),
      tan: new THREE.Vector3(), bin: new THREE.Vector3(), nor: new THREE.Vector3(),
      dir: new THREE.Vector3(), up: new THREE.Vector3(0, 1, 0),
    }),
    []
  )

  const curveAt = (t, time, out) => {
    out.set(
      t + offset[0],
      ampY * Math.sin(t * freqY + time * speed + seed) + offset[1],
      ampZ * Math.cos(t * freqZ + time * speed * 0.78 + seed * 1.7) + offset[2]
    )
    return out
  }

  useFrame(({ clock }) => {
    const time = clock.elapsedTime
    const pos = geometry.attributes.position.array
    const dt = length / SEGMENTS / 2

    for (let i = 0; i <= SEGMENTS; i++) {
      const u = i / SEGMENTS
      const t = (u - 0.5) * length

      curveAt(t, time, v.p)
      curveAt(t - dt, time, v.pa)
      curveAt(t + dt, time, v.pb)

      v.tan.subVectors(v.pb, v.pa).normalize()
      v.bin.crossVectors(v.tan, v.up).normalize()
      v.nor.crossVectors(v.bin, v.tan).normalize()

      const ang = twist * t + time * 0.26 + seed
      v.dir
        .copy(v.bin).multiplyScalar(Math.cos(ang))
        .addScaledVector(v.nor, Math.sin(ang))
        .multiplyScalar(halfWidth)

      // taper the ends so the ribbon fades out of frame rather than being cut
      const taper = Math.sin(Math.PI * u) ** 0.32
      v.dir.multiplyScalar(taper)

      const a = i * 6
      pos[a + 0] = v.p.x + v.dir.x
      pos[a + 1] = v.p.y + v.dir.y
      pos[a + 2] = v.p.z + v.dir.z
      pos[a + 3] = v.p.x - v.dir.x
      pos[a + 4] = v.p.y - v.dir.y
      pos[a + 5] = v.p.z - v.dir.z
    }

    geometry.attributes.position.needsUpdate = true
    geometry.computeVertexNormals()
    geometry.computeBoundingSphere()
  })

  return (
    <mesh ref={meshRef} geometry={geometry} frustumCulled={false}>
      <meshPhysicalMaterial
        color={color}
        side={THREE.DoubleSide}
        metalness={metalness}
        roughness={roughness}
        iridescence={iridescence}
        iridescenceIOR={1.45}
        iridescenceThicknessRange={[120, 520]}
        clearcoat={0.55}
        clearcoatRoughness={0.28}
        envMapIntensity={1.35}
        transparent={opacity < 1}
        opacity={opacity}
      />
    </mesh>
  )
}

/* A reel of film sitting in the background, turning slowly. */
function Reel({ position, scale = 1 }) {
  const ref = useRef()
  useFrame((_, d) => {
    if (ref.current) ref.current.rotation.y += d * 0.16
  })
  return (
    <group ref={ref} position={position} scale={scale} rotation={[0, 0, Math.PI / 2]}>
      <mesh>
        <cylinderGeometry args={[1, 1, 1.5, 72, 1, true]} />
        <meshPhysicalMaterial
          color="#2A2621" metalness={1} roughness={0.28}
          side={THREE.DoubleSide} envMapIntensity={1.1}
        />
      </mesh>
      {/* spiral wound edges */}
      <mesh position={[0, 0.76, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.34, 1.001, 72, 1]} />
        <meshPhysicalMaterial color="#37322A" metalness={1} roughness={0.44} side={THREE.DoubleSide} />
      </mesh>
      <mesh position={[0, -0.76, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.34, 1.001, 72, 1]} />
        <meshPhysicalMaterial color="#2C3439" metalness={1} roughness={0.42} side={THREE.DoubleSide} />
      </mesh>
    </group>
  )
}

/* Slow drifting dust, so the space reads as a real room. */
function Dust({ count = 380 }) {
  const ref = useRef()
  const positions = useMemo(() => {
    const a = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      a[i * 3 + 0] = (Math.random() - 0.5) * 26
      a[i * 3 + 1] = (Math.random() - 0.5) * 13
      a[i * 3 + 2] = (Math.random() - 0.5) * 12 - 2
    }
    return a
  }, [count])

  useFrame(({ clock }) => {
    if (!ref.current) return
    const t = clock.elapsedTime
    ref.current.rotation.y = t * 0.014
    ref.current.position.y = Math.sin(t * 0.12) * 0.4
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.028} color="#D2B182" transparent opacity={0.5}
        sizeAttenuation depthWrite={false}
      />
    </points>
  )
}

/* Parallax on pointer + a gentle push as the page scrolls. */
function Rig({ children }) {
  const group = useRef()
  const target = useRef({ x: 0, y: 0 })

  useFrame(({ pointer }, d) => {
    if (!group.current) return
    const scroll =
      typeof window !== "undefined"
        ? Math.min(window.scrollY / (window.innerHeight || 1), 1)
        : 0

    target.current.x = pointer.y * 0.14 + scroll * 0.3
    target.current.y = pointer.x * 0.2 - scroll * 0.16

    const k = 1 - Math.pow(0.0015, d) // frame-rate independent damping
    group.current.rotation.x += (target.current.x - group.current.rotation.x) * k
    group.current.rotation.y += (target.current.y - group.current.rotation.y) * k
    group.current.position.y += (scroll * 1.6 - group.current.position.y) * k
  })

  return <group ref={group}>{children}</group>
}

export default function HeroScene({ paused = false }) {
  return (
    <Canvas
      frameloop={paused ? "never" : "always"}
      dpr={[1, 1.6]}
      camera={{ position: [0, 0, 9], fov: 42, near: 0.1, far: 60 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ pointerEvents: "none" }}
    >
      <color attach="background" args={["#14120F"]} />
      <fog attach="fog" args={["#14120F", 11, 26]} />

      <ambientLight intensity={0.34} />
      <directionalLight position={[6, 5, 6]} intensity={1.05} color="#FFF0DC" />
      <pointLight position={[7, -1, 3]} intensity={20} distance={22} color="#C4293B" />
      <pointLight position={[-7, 3, 2]} intensity={15} distance={22} color="#B08D57" />

      <Rig>
        <Reel position={[-6.6, -1.9, -4.4]} scale={1.45} />
        <Reel position={[7.2, 2.4, -6.2]} scale={1.05} />

        <Ribbon
          color="#DCD5C9" halfWidth={0.42} ampY={1.15} ampZ={2.1}
          twist={0.3} speed={0.36} seed={0} iridescence={0.75} roughness={0.14}
        />
        <Ribbon
          color="#A81E2D" halfWidth={0.3} ampY={1.7} ampZ={1.5}
          freqY={0.33} freqZ={0.37} twist={0.42} speed={0.29} seed={2.1}
          offset={[0, -0.9, -1.6]} iridescence={0.25} roughness={0.24}
        />
        <Ribbon
          color="#B08D57" halfWidth={0.2} ampY={2.1} ampZ={1.2}
          freqY={0.5} freqZ={0.22} twist={0.55} speed={0.45} seed={4.4}
          offset={[0, 1.2, -2.8]} iridescence={0.2} roughness={0.3} opacity={0.92}
        />

        <Dust />
      </Rig>

      {/* Studio reflections, generated in-scene — no HDRI download. */}
      <Environment resolution={256} frames={1}>
        <Lightformer form="rect" intensity={3.2} color="#FFF6E9"
          position={[0, 5, -7]} scale={[14, 7, 1]} />
        <Lightformer form="rect" intensity={6} color="#D8394C"
          position={[7, 0, 3]} scale={[9, 9, 1]} rotation-y={-Math.PI / 2.6} />
        <Lightformer form="rect" intensity={4} color="#E0BC8A"
          position={[-8, 2, 2]} scale={[9, 9, 1]} rotation-y={Math.PI / 2.6} />
        <Lightformer form="ring" intensity={2} color="#A9BEDC"
          position={[0, -6, 2]} scale={9} />
      </Environment>
    </Canvas>
  )
}
