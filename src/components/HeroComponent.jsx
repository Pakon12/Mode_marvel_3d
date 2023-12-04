import React, { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';
import styles from './HeroStyle.module.css';

const Content3D = ({ data, index }) => {
  const [item, setItem] = useState(null);

  useEffect(() => {
    if (data && data.length > 0) {
      const currentItem = data[index];
      setItem(currentItem);
    }
  }, [data, index]);

  if (!item) {
    // ถ้าไม่มีข้อมูลให้ return component นี้
    return <div>Loading...</div>;
  }

  const hero = useGLTF(`./${item.path}/scene.gltf`);

  return (
    <div className={styles.content} style={{ width: '600px', height: '600px' }}>
      <Canvas>
        <OrbitControls enableRotate />
        <ambientLight intensity={4} />
        <directionalLight intensity={12} position={[0, 3, 0]} />
        <directionalLight intensity={4} position={[0, -5, 0]} />
      
        <mesh>
          <primitive
            scale={item.scale}
            object={hero.scene}
            position={[0, -2, 0]}
            rotation={[0, -0.5, 0]}
          />
        </mesh>
      </Canvas>
    </div>
  );
};

export default Content3D;
