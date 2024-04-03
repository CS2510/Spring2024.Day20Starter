/**
 * A scene class. 
 * Everything in your game needs to be encapsulated in a scene and only
 * one scene can be running at a time.
 * 
 * Note: Recent versions of Unity allow for multiple scenes to be running 
 * simultaneously, for example one for the background and one for the foreground.
 * However, this advanced topic is out of scope for this course, so we 
 * won't be covering that in this class.
 */
class Scene {
    /** The list of game objects in the scene */
    gameObjects = []

    /** Flag to track if we have started the scene (by called start on the 
     * game objects) */
    hasStarted = false;

    /**
     * Create a scene with the given background color.
     * 
     * Note: We will eventually move the color parameter to be on the Camera
     * game object, which is where it really belogs.
     * 
     * @param {Color} backgroundColor The background color for the scene. We can 
     * use any format that CSS understands, e.g. "red", "#FF0000", "rgb(255, 0, 0)"
     */
    constructor(backgroundColor) {
        this.backgroundColor = backgroundColor
        this.hasStarted = false;
    }

    /**
     * Call start on all the game objects and change our start flag
     * 
     * @param {CanvasRenderingContext2D} ctx The current rendering context
     */
    _start(ctx) {
        if (!this.hasStarted) {
            this.hasStarted = true;
            if (this.start)
                this.start(ctx);
            for (const gameObject of this.gameObjects) {
                if (gameObject.start) {
                    gameObject.start(ctx);
                }
            }
        }
    }

    /**
     * Call update on all the game objects 
     * 
     * @param {CanvasRenderingContext2D} ctx The current rendering context
     */
    update(ctx) {
        for (const gameObject of this.gameObjects) {
            if (gameObject.update) {
                gameObject.update(ctx);
            }
        }
    }

    /**
     * Clear the current frame and call draw on all the game objects 
     * 
     * @param {CanvasRenderingContext2D} ctx The current rendering context
     */
    draw(ctx) {
        // Clear the scene
        ctx.fillStyle = this.backgroundColor;
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)

        //Call draw on all the game objects
        for (const gameObject of this.gameObjects) {
            if (gameObject.draw) {
                gameObject.draw(ctx)
            }

        }
    }
}

window.Scene = Scene