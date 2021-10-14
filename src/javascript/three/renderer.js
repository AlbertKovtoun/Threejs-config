import * as THREE from "three"
import { canvas, sizes } from "./scene"

export let renderer

export const setRenderer = () => {
  renderer = new THREE.WebGLRenderer({
    canvas: canvas,
  })
  renderer.setSize(sizes.width, sizes.height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
}
