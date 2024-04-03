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
}

window.Scene = Scene