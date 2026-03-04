import { useRef, useState, useCallback, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Html, OrbitControls, RoundedBox, Environment, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';
import BingoBoard from './BingoBoard';
import '../styles/RubiksCube.css';

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

// Colored label plane for inactive faces
function FaceLabel({ theme }) {
  return (
    <mesh>
      <planeGeometry args={[4.8, 4.8]} />
      <meshBasicMaterial color={theme.accent} transparent opacity={0.15} />
    </mesh>
  );
}

// The 3D cube mesh with bingo board on the active face
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
          color="#111118"
          metalness={0.3}
          roughness={0.2}
          clearcoat={1}
          clearcoatRoughness={0.1}
          transparent
          opacity={0.92}
          envMapIntensity={0.5}
        />
      </RoundedBox>

      <CubeEdges />

      {/* Each face: active gets interactive Html board, others get colored label */}
      {FACE_CONFIGS.map((config, i) => (
        <group key={i} position={config.position} rotation={config.rotation}>
          {activeFace === i ? (
            <Html
              transform
              style={{
                width: '460px',
                height: '460px',
                pointerEvents: 'auto',
              }}
              distanceFactor={6}
            >
              <div className="three-face-wrapper">
                <BingoBoard
                  board={boards[i]}
                  faceTheme={faceThemes[i]}
                  questionSong={questionSong}
                  onCellSelect={onCellSelect}
                  isActiveFace={true}
                />
              </div>
            </Html>
          ) : (
            <FaceLabel theme={faceThemes[i]} />
          )}
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
