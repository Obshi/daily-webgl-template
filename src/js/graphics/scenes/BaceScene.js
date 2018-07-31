import * as THREE from 'three'
import GLTF2Loader from 'three-gltf2-loader'

GLTF2Loader(THREE);

export default class BaceScene {

    constructor(canvas) {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(50, innerWidth / innerHeight, 0.1, 1000);
    }

    Update(){
    }

    Resize(width,height){
        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();
    }

    onTouchStart(cursor){
    }

    onTouchMove(cursor){
    }

    onTouchEnd(cursor){
    }
}