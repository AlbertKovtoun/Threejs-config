import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"
import { canvas, scene, sizes } from "./scene"

export let camera
export let controls

export const setCamera = () => {
  camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 100)
  camera.position.z = 3
  camera.position.x = 1
  scene.add(camera)
}

export const setCameraControls = () => {
  controls = new OrbitControls(camera, canvas)
  controls.enableDamping = true
}
