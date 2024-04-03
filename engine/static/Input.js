class Input {
    /** Store input states for our game */
    static keysDown = []
    static keysUpThisFrame = []
    static mousePosition = { x: 0, y: 0 }
    static mouseUpThisFrame = false;

    /** Respond to mouse move events */
    static mousemove(e) {
        Input.mousePosition.x = e.clientX;
        Input.mousePosition.y = e.clientY;
    }

    static mouseup(e){
        Input.mouseUpThisFrame = true;
    }

    /** Respond to key up events */
    static keyup(e) {
        let index = Input.keysDown.indexOf(e.code)
        Input.keysDown.splice(index, 1)
        Input.keysUpThisFrame.push(e.code);
    }

    /** Respond to key down events */
    static keydown(e) {
        if (!Input.keysDown.includes(e.code))
            Input.keysDown.push(e.code)
    }

    static update(){
        Input.mouseUpThisFrame = false
        Input.keysUpThisFrame = []
    }
}

window.Input = Input