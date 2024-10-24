
import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/models/class.gltf')
  return (
    <group {...props} dispose={null}>
      <group position={[-0.836, 0, 0.826]} rotation={[0, -Math.PI / 2, 0]} scale={0.269}>
        <group position={[2.255, -0.217, 0.918]} scale={3.72}>
          <mesh geometry={nodes.Cube005.geometry} material={materials.Metal} />
          <mesh geometry={nodes.Cube005_1.geometry} material={materials['Wooden floor']} />
        </group>
      </group>
      <mesh geometry={nodes.Plane.geometry} material={materials['Wood dark']} position={[0, -0.122, 9.575]} scale={[1.304, 2.427, 1.509]} />
      <mesh geometry={nodes.Plane002.geometry} material={materials['Concrete tiles']} position={[0, 4.452, 9.239]} scale={1.396} />
      <mesh geometry={nodes.Plane003.geometry} material={materials.Material} position={[0, 3.163, -2.327]} rotation={[-Math.PI / 2, 0, 0]} scale={[1.396, 1.396, 0.436]} />
      <mesh geometry={nodes.Cube.geometry} material={materials['Material.005']} scale={[0.011, 0.303, 1.297]} />
      <group position={[-7.961, 3.514, 13.796]} rotation={[Math.PI / 2, 0, 2.42]} scale={[0.018, 0.013, 0.013]}>
        <mesh geometry={nodes.Plane005_1.geometry} material={materials['default']} />
        <mesh geometry={nodes.Plane005_2.geometry} material={materials['Material.002']} />
      </group>
      <group position={[-5.529, 3.711, 0.743]} rotation={[0, -1.222, 0.079]} scale={0.001}>
        <mesh geometry={nodes.Mesh.geometry} material={materials.пластик1а} />
        <mesh geometry={nodes.Mesh_1.geometry} material={materials['Material #748']} />
        <mesh geometry={nodes.Mesh_2.geometry} material={materials['metal: Gold']} />
        <mesh geometry={nodes.Mesh_3.geometry} material={materials.пластик1} />
        <mesh geometry={nodes.Mesh_4.geometry} material={materials.пластик1б} />
        <mesh geometry={nodes.Mesh_5.geometry} material={materials['Glass (Objects)']} />
        <mesh geometry={nodes.Mesh_6.geometry} material={materials.белый} />
        <mesh geometry={nodes.Mesh_7.geometry} material={materials['metal: Алюминий (Object)']} />
        <mesh geometry={nodes.Mesh_8.geometry} material={materials.сталь5} />
        <mesh geometry={nodes.Mesh_9.geometry} material={materials['metal: Chrome (Object)']} />
        <mesh geometry={nodes.Mesh_10.geometry} material={materials['Material #108']} />
        <mesh geometry={nodes.Mesh_11.geometry} material={materials['Material #109']} />
        <mesh geometry={nodes.Mesh_12.geometry} material={materials['Material #110']} />
        <mesh geometry={nodes.Mesh_13.geometry} material={materials['Material #111']} />
        <mesh geometry={nodes.Mesh_14.geometry} material={materials['Plastic Black']} />
      </group>
      <group position={[-0.057, 1.406, -2.272]} rotation={[0, -Math.PI / 2, 0]} scale={[0.765, 0.765, 0.685]}>
        <mesh geometry={nodes.Plane003_1.geometry} material={materials.Chalkboard_Green} />
        <mesh geometry={nodes.Plane003_2.geometry} material={materials.Wood_dark} />
      </group>
      <mesh geometry={nodes.desk.geometry} material={materials['材质.006']} position={[-4.483, 1.282, -1.776]} rotation={[0, -Math.PI / 2, 0]} scale={[1.453, 1.453, 3.122]} />
      <mesh geometry={nodes.Plane005.geometry} material={materials['Material.007']} position={[-5.148, 1.219, -1.978]} scale={[0.094, 0.094, 0.14]} />
      <group position={[-8.58, 3.618, 0.286]} rotation={[0, Math.PI / 2, 0]} scale={2.5}>
        <mesh geometry={nodes.Cube007.geometry} material={materials['Material.008']} />
        <mesh geometry={nodes.Cube007_1.geometry} material={materials['Material.009']} />
      </group>
      <group position={[-2.336, 0.544, 1.944]}>
        <mesh geometry={nodes.Plane_1.geometry} material={materials['Varnished wood']} />
        <mesh geometry={nodes.Plane_2.geometry} material={materials['default.001']} />
      </group>
      <group position={[-2.51, 4.105, -1.848]} rotation={[-Math.PI, 0, 0]}>
        <mesh geometry={nodes.Plane011.geometry} material={materials['luminaria.001']} />
        <mesh geometry={nodes.Plane011_1.geometry} material={materials['led.001']} />
        <mesh geometry={nodes.Plane011_2.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Plane011_3.geometry} material={materials.luminaria} />
      </group>
      <group position={[-2.089, 4.405, 3.875]} rotation={[-Math.PI, -Math.PI / 2, 0]}>
        <mesh geometry={nodes.Plane007.geometry} material={materials['luminaria.001']} />
        <mesh geometry={nodes.Plane007_1.geometry} material={materials['led.001']} />
        <mesh geometry={nodes.Plane007_2.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Plane007_3.geometry} material={materials.luminaria} />
      </group>
      <group position={[-2.089, 4.405, 3.875]} rotation={[-Math.PI, -Math.PI / 2, 0]}>
        <mesh geometry={nodes.Plane001_1.geometry} material={materials['luminaria.001']} />
        <mesh geometry={nodes.Plane001_2.geometry} material={materials['led.001']} />
        <mesh geometry={nodes.Plane001_3.geometry} material={materials['Wood dark']} />
        <mesh geometry={nodes.Plane001_4.geometry} material={materials.luminaria} />
      </group>
      <group position={[2.646, 2.178, -2.106]} rotation={[Math.PI / 2, 0, 0]} scale={2.5}>
        <mesh geometry={nodes.Box26004.geometry} material={materials['Material.004']} />
        <mesh geometry={nodes.Box26004_1.geometry} material={materials['Material.006']} />
      </group>
      <mesh geometry={nodes.Tabletop.geometry} material={materials['Material.003']} position={[0, 0.47, -1.493]} />
      <mesh geometry={nodes.Tabletop001.geometry} material={materials['Material.003']} position={[0, 4.231, -1.931]} scale={[1.505, 1, 1]} />
    </group>
  )
}

useGLTF.preload('/models/class.gltf')
