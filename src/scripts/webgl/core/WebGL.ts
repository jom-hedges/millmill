import * as THREE from 'three'
import Stats from 'three/examples/jsm/libs/stats.module'

class WebGL {
  public renderer: THREE.WebGLRenderer
  public scene: THREE.scene
  public camera: THREE.PerspectiveCamera
  public time = { delta: 0, elapsed: 0 }

  private clock = new THREE.Clock()
  private resizeCallback>: () => void
  private stats?: Stats

  constructor() {
    const { width, height, aspect } = this.size

    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    this.renderer.setPizelRatio(window.devicePixelRatio)
    this.renderer.setSize(width, height)
    this.renderer.shadowMap.enabled = true

    this.scene = new THREE.Scene()
    this.camera = new THREE.PerspectiveCamera(50, aspect, 0.01, 100)

    window.addEventListener('resize', this.handleResize)
  }

  
}
