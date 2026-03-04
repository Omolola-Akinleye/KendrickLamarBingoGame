import { useRef, useState, useCallback, useEffect, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Html, OrbitControls, RoundedBox, Environment, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';
import BingoBoard from './BingoBoard';
import '../styles/RubiksCube.css';

const PARTICLE_COUNT = 120;

// Fire particle system inside the cube
function InnerFire() {
  const pointsRef = useRef();
  const velocities = useRef([]);

  const [positions, colors, sizes] = useMemo(() => {
    const pos = new Float32Array(PARTICLE_COUNT * 3);
    const col = new Float32Array(PARTICLE_COUNT * 3);
    const siz = new Float32Array(PARTICLE_COUNT);
    const vels = [];

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const i3 = i * 3;
      // Start particles spread across the bottom half of the cube
      pos[i3] = (Math.random() - 0.5) * 3;
      pos[i3 + 1] = (Math.random() - 0.5) * 4 - 0.5;
      pos[i3 + 2] = (Math.random() - 0.5) * 3;

      // Warm fire colors: mix of orange, red, yellow
      const t = Math.random();
      if (t < 0.3) {
        // Deep red/orange core
        col[i3] = 1.0;
        col[i3 + 1] = 0.15 + Math.random() * 0.15;
        col[i3 + 2] = 0.0;
      } else if (t < 0.7) {
        // Orange/amber
        col[i3] = 1.0;
        col[i3 + 1] = 0.4 + Math.random() * 0.25;
        col[i3 + 2] = 0.0;
      } else {
        // Hot yellow tips
        col[i3] = 1.0;
        col[i3 + 1] = 0.7 + Math.random() * 0.3;
        col[i3 + 2] = 0.1 + Math.random() * 0.2;
      }

      siz[i] = 0.08 + Math.random() * 0.15;

      vels.push({
        x: (Math.random() - 0.5) * 0.01,
        y: 0.01 + Math.random() * 0.025,
        z: (Math.random() - 0.5) * 0.01,
      });
    }

    velocities.current = vels;
    return [pos, col, siz];
  }, []);

  useFrame((_, delta) => {
    if (!pointsRef.current) return;
    const pos = pointsRef.current.geometry.attributes.position.array;
    const siz = pointsRef.current.geometry.attributes.size.array;
    const vels = velocities.current;
    const clampedDelta = Math.min(delta, 0.05);

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const i3 = i * 3;

      // Flicker: add turbulence
      pos[i3] += (vels[i].x + (Math.random() - 0.5) * 0.02) * clampedDelta * 60;
      pos[i3 + 1] += vels[i].y * clampedDelta * 60;
      pos[i3 + 2] += (vels[i].z + (Math.random() - 0.5) * 0.02) * clampedDelta * 60;

      // Shrink as they rise
      siz[i] *= (1 - 0.003 * clampedDelta * 60);

      // Reset particle when it rises above cube or gets too small
      if (pos[i3 + 1] > 2.2 || siz[i] < 0.02) {
        pos[i3] = (Math.random() - 0.5) * 2.5;
        pos[i3 + 1] = -2 + Math.random() * 1.5;
        pos[i3 + 2] = (Math.random() - 0.5) * 2.5;
        siz[i] = 0.08 + Math.random() * 0.15;
        vels[i].y = 0.01 + Math.random() * 0.025;
      }
    }

    pointsRef.current.geometry.attributes.position.needsUpdate = true;
    pointsRef.current.geometry.attributes.size.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
        <bufferAttribute attach="attributes-size" args={[sizes, 1]} />
      </bufferGeometry>
      <pointsMaterial
        vertexColors
        transparent
        opacity={0.7}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
        sizeAttenuation
        size={0.25}
      />
    </points>
  );
}

const EMBER_COUNT = 60;

// Floating embers/sparks drifting inside the cube
function FloatingEmbers() {
  const pointsRef = useRef();
  const velocities = useRef([]);

  const [positions, colors, sizes] = useMemo(() => {
    const pos = new Float32Array(EMBER_COUNT * 3);
    const col = new Float32Array(EMBER_COUNT * 3);
    const siz = new Float32Array(EMBER_COUNT);
    const vels = [];

    for (let i = 0; i < EMBER_COUNT; i++) {
      const i3 = i * 3;
      pos[i3] = (Math.random() - 0.5) * 4;
      pos[i3 + 1] = (Math.random() - 0.5) * 4;
      pos[i3 + 2] = (Math.random() - 0.5) * 4;

      // Bright ember colors: white-hot, gold, pale orange
      const t = Math.random();
      if (t < 0.4) {
        col[i3] = 1.0; col[i3 + 1] = 0.9; col[i3 + 2] = 0.6;
      } else if (t < 0.7) {
        col[i3] = 1.0; col[i3 + 1] = 0.7; col[i3 + 2] = 0.2;
      } else {
        col[i3] = 1.0; col[i3 + 1] = 1.0; col[i3 + 2] = 0.85;
      }

      siz[i] = 0.03 + Math.random() * 0.06;

      vels.push({
        x: (Math.random() - 0.5) * 0.008,
        y: (Math.random() - 0.5) * 0.008,
        z: (Math.random() - 0.5) * 0.008,
      });
    }

    velocities.current = vels;
    return [pos, col, siz];
  }, []);

  useFrame((state, delta) => {
    if (!pointsRef.current) return;
    const pos = pointsRef.current.geometry.attributes.position.array;
    const siz = pointsRef.current.geometry.attributes.size.array;
    const vels = velocities.current;
    const clampedDelta = Math.min(delta, 0.05);
    const time = state.clock.elapsedTime;

    for (let i = 0; i < EMBER_COUNT; i++) {
      const i3 = i * 3;

      // Gentle drift with sine-wave wobble
      pos[i3] += (vels[i].x + Math.sin(time * 0.7 + i) * 0.003) * clampedDelta * 60;
      pos[i3 + 1] += (vels[i].y + Math.cos(time * 0.5 + i * 0.3) * 0.002) * clampedDelta * 60;
      pos[i3 + 2] += (vels[i].z + Math.sin(time * 0.6 + i * 0.7) * 0.003) * clampedDelta * 60;

      // Twinkle: pulse size
      siz[i] = (0.03 + Math.random() * 0.04) * (0.6 + 0.4 * Math.sin(time * 3 + i * 2));

      // Bounce off cube walls
      if (Math.abs(pos[i3]) > 2.2) vels[i].x *= -1;
      if (Math.abs(pos[i3 + 1]) > 2.2) vels[i].y *= -1;
      if (Math.abs(pos[i3 + 2]) > 2.2) vels[i].z *= -1;
    }

    pointsRef.current.geometry.attributes.position.needsUpdate = true;
    pointsRef.current.geometry.attributes.size.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
        <bufferAttribute attach="attributes-size" args={[sizes, 1]} />
      </bufferGeometry>
      <pointsMaterial
        vertexColors
        transparent
        opacity={0.9}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
        sizeAttenuation
        size={0.12}
      />
    </points>
  );
}

const FACE_NAMES = ['front', 'back', 'right', 'left', 'top', 'bottom'];

// Target rotations for snapping to each face
const FACE_TARGETS = [
  [0, 0, 0],                               // front
  [0, Math.PI, 0],                          // back
  [0, -Math.PI / 2, 0],                     // right
  [0, Math.PI / 2, 0],                      // left
  [-Math.PI / 2, 0, 0],                     // top
  [Math.PI / 2, 0, 0],                      // bottom
];

// Face positions & rotations for Html overlays on cube
const FACE_CONFIGS = [
  { position: [0, 0, 2.51], rotation: [0, 0, 0] },                        // front
  { position: [0, 0, -2.51], rotation: [0, Math.PI, 0] },                  // back
  { position: [2.51, 0, 0], rotation: [0, Math.PI / 2, 0] },              // right
  { position: [-2.51, 0, 0], rotation: [0, -Math.PI / 2, 0] },            // left
  { position: [0, 2.51, 0], rotation: [-Math.PI / 2, 0, 0] },             // top
  { position: [0, -2.51, 0], rotation: [Math.PI / 2, 0, 0] },             // bottom
];

// Cube edge glow lines
function CubeEdges() {
  return (
    <lineSegments>
      <edgesGeometry args={[new THREE.BoxGeometry(5.02, 5.02, 5.02)]} />
      <lineBasicMaterial color="#ffd700" transparent opacity={0.15} />
    </lineSegments>
  );
}

// The 3D cube mesh with bingo boards on each face
function Cube({ boards, faceThemes, questionSong, onCellSelect, activeFace, targetRotation, onSnapped }) {
  const groupRef = useRef();
  const isAnimating = useRef(false);

  useFrame(() => {
    if (!groupRef.current || !targetRotation) return;

    const [tx, ty, tz] = targetRotation;
    const rot = groupRef.current.rotation;
    const speed = 0.08;

    const dx = tx - rot.x;
    const dy = ty - rot.y;
    const dz = tz - rot.z;

    if (Math.abs(dx) > 0.005 || Math.abs(dy) > 0.005 || Math.abs(dz) > 0.005) {
      rot.x += dx * speed;
      rot.y += dy * speed;
      rot.z += dz * speed;
      isAnimating.current = true;
    } else if (isAnimating.current) {
      rot.x = tx;
      rot.y = ty;
      rot.z = tz;
      isAnimating.current = false;
      if (onSnapped) onSnapped();
    }
  });

  return (
    <group ref={groupRef}>
      {/* Glass-like cube body */}
      <RoundedBox args={[5, 5, 5]} radius={0.15} smoothness={4}>
        <meshPhysicalMaterial
          color="#1a1a2e"
          metalness={0.3}
          roughness={0.2}
          clearcoat={1}
          clearcoatRoughness={0.1}
          transparent
          opacity={0.45}
          envMapIntensity={0.5}
        />
      </RoundedBox>

      {/* Fire particles inside the cube */}
      <InnerFire />
      <FloatingEmbers />

      <CubeEdges />

      {/* Bingo boards on each face */}
      {FACE_CONFIGS.map((config, i) => (
        <group key={i} position={config.position} rotation={config.rotation}>
          <Html
            transform
            occlude="blending"
            style={{
              width: '500px',
              height: '500px',
              pointerEvents: 'auto',
            }}
            distanceFactor={5.8}
          >
            <div className="three-face-wrapper">
              <BingoBoard
                board={boards[i]}
                faceTheme={faceThemes[i]}
                questionSong={questionSong}
                onCellSelect={onCellSelect}
                isActiveFace={activeFace === i}
              />
            </div>
          </Html>
        </group>
      ))}
    </group>
  );
}

// Camera controller that works with OrbitControls
function CameraController({ targetRotation }) {
  const { camera } = useThree();

  useEffect(() => {
    camera.position.set(0, 2, 10);
    camera.lookAt(0, 0, 0);
  }, [camera]);

  return null;
}

export default function RubiksCube({ boards, faceThemes, questionSong, onCellSelect, activeFace, onFaceChange }) {
  const [targetRotation, setTargetRotation] = useState(null);
  const controlsRef = useRef();

  const snapToFace = useCallback((faceIndex) => {
    setTargetRotation(FACE_TARGETS[faceIndex]);
    onFaceChange(faceIndex);
  }, [onFaceChange]);

  return (
    <div className="cube-container">
      <div className="face-nav">
        {FACE_NAMES.map((face, i) => (
          <button
            key={face}
            className={`face-btn ${activeFace === i ? 'active' : ''}`}
            onClick={() => snapToFace(i)}
            style={{ '--btn-accent': faceThemes[i].accent }}
          >
            <span className="face-btn-icon">{faceThemes[i].icon}</span>
            <span className="face-btn-label">{faceThemes[i].name}</span>
          </button>
        ))}
      </div>

      <div className="canvas-wrapper">
        <Canvas
          camera={{ position: [0, 2, 10], fov: 45 }}
          gl={{ antialias: true, alpha: true }}
          dpr={[1, 2]}
        >
          <color attach="background" args={['#0a0a0f']} />

          <CameraController targetRotation={targetRotation} />

          {/* Lighting */}
          <ambientLight intensity={0.4} />
          <directionalLight position={[5, 8, 5]} intensity={1.2} castShadow />
          <directionalLight position={[-5, 3, -5]} intensity={0.4} color="#ffd700" />
          <pointLight position={[0, 5, 0]} intensity={0.6} color="#fff" />
          <pointLight position={[0, -5, 0]} intensity={0.3} color="#ffd700" />

          {/* Environment for reflections */}
          <Environment preset="city" />

          {/* The cube */}
          <Cube
            boards={boards}
            faceThemes={faceThemes}
            questionSong={questionSong}
            onCellSelect={onCellSelect}
            activeFace={activeFace}
            targetRotation={targetRotation}
            onSnapped={() => {}}
          />

          {/* Shadow beneath cube */}
          <ContactShadows
            position={[0, -3.5, 0]}
            opacity={0.4}
            scale={12}
            blur={2.5}
            far={4}
            color="#ffd700"
          />

          {/* Orbit controls for drag rotation */}
          <OrbitControls
            ref={controlsRef}
            enablePan={false}
            enableZoom={true}
            minDistance={7}
            maxDistance={18}
            dampingFactor={0.08}
            enableDamping
            rotateSpeed={0.5}
          />
        </Canvas>
      </div>

      <p className="drag-hint">Drag to orbit the cube &middot; Scroll to zoom &middot; Click an album to snap to it</p>
    </div>
  );
}
