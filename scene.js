let be camera
setupCamera() {
        const aspect = this.container.clientWidth / this.container.clientHeight;
        this.camera = new THREE.PerspectiveCamera(
            this.config.SCENE.FOV,
            aspect,
            this.config.SCENE.NEAR,
            this.config.SCENE.FAR
        );
        
        const pos = this.config.SCENE.CAMERA_POSITION;
        this.camera.position.set(pos.x, pos.y, pos.z);
        this.camera.lookAt(0, 0, 0);
    }

    /**
     * Set up the renderer
     */
    setupRenderer
<a href= https://www.metacritic.com/browse/game/pc/all/2015/metascore/?platform=pc&page=1>games 101</a>
