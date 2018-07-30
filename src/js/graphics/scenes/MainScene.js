import BaceScene from './BaceScene.js';
import * as THREE from 'three'

export default class MainScene extends BaceScene {

    constructor() {
        super();
        this.tick = 0;
        this.tickSpeed = 2;
        this.init();
    }

    init() {

        this.camera.position.set(0, 2.5, 5)
        this.camera.rotation.set(-Math.PI / 14,0,0);

        var light = new THREE.AmbientLight(0xffffff, 0.8);
        light.position.set(2, 2, 2);
        light.castShadow = false;
        this.scene.add(light);

        light = new THREE.DirectionalLight(0xffffff,1);
        light.position.set(5,10,5);
        light.castShadow = true;
        this.scene.add(light);

        var material = new THREE.MeshStandardMaterial({
            color: 0xffffff,
            roughness: 0
        })

        var geo = new THREE.CubeGeometry(1,1);
        material = new THREE.MeshStandardMaterial();
        this.cube = new THREE.Mesh(geo,material);
        this.cube.position.y = 1.25;
        this.cube.castShadow = true;
        this.scene.add(this.cube);
        
    }

    Update() {
        this.cube.rotateY(-0.05);
    }

    onTouchStart(cursor){
    }

    onTouchMove(cursor){
    }

    onTouchEnd(cursor){
    }


}