import React from 'react'
import { Canvas } from '@react-three/fiber'
import { useGLTF , OrbitControls} from '@react-three/drei'

const Content3D = () => {
    //javascript
    const phone = useGLTF('./phone/scene.gltf');
    


  return (
    <div className="content">
        <Canvas>
            <OrbitControls enableRotate />
            <ambientLight intensity={4}/>
            <directionalLight intensity={4} 
            position={[-5, 0, 0]}
            />
            <directionalLight intensity={4} 
            position={[5, 0, 0]}
            />
            <directionalLight intensity={4} 
            position={[0, 5, 0]}
            />
            <directionalLight intensity={4} 
            position={[0, -5, 0]}
            />
            <directionalLight intensity={4} 
            position={[0, 0, 5]}
            />
            <directionalLight intensity={4} 
            position={[0, 0, -5]}
            />
            <mesh>
                <primitive
                    scale={0.006}
                    object={phone.scene}
                    position={[0, 0, 0]}
                    rotation={[0 ,3.2, 0]}
                />
            </mesh>
        </Canvas>
    </div>
  )
}

export default Content3D