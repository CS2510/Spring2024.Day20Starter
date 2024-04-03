import "/engine/classes/Component.js"
import "/engine/classes/GameObject.js"
import "/engine/classes/Scene.js"

import "/engine/geometry/Vector2.js"
import "/engine/geometry/Line2.js"
import "/engine/geometry/Rectangle2.js"
import "/engine/geometry/Circle2.js"

import "/engine/components/Circle.js"
import "/engine/components/Line.js"
import "/engine/components/Point.js"
import "/engine/components/Rectangle.js"
import "/engine/components/Text.js"
import "/engine/components/Transform.js"


import "/engine/static/Collisions.js"
import "/engine/static/CollisionsGeometric.js"
import "/engine/static/Input.js"
import "/engine/static/Globals.js"
import "/engine/static/Time.js"
import "/engine/static/EventSystem.js"


class Engine {

  isSystemPaused = false;

  /**
   * The game loop.
   * The game loop calls update and draw using a timer
   */
  static gameLoop() {
    let canvas = document.querySelector("#canv")
    let ctx = canvas.getContext("2d")

    //Make the canvas the same size as our window
    //so it is "full screen"
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    //System-level pause
    if (Input.keysUpThisFrame.includes("KeyP")) {
      if (Engine.isSystemPaused) {
        Engine.isSystemPaused = false;
      }
      else {
        Engine.isSystemPaused = true;
      }
    }
    let scene = Engine.currentScene;

    Engine.draw(ctx);

    if (!Engine.isSystemPaused) {

      Engine.start(ctx)

      Engine.update(ctx)


      //Remove anything marked for destroy
      Engine.currentScene.gameObjects = Engine.currentScene.gameObjects.filter(go => go.markForDestroy == false);
    }

    //Update the input
    Input.update();



    //Draw in Screen/UI space
    //currentScene.drawUI(ctx)
  }

  static update(ctx) {
    let scene = Engine.currentScene

    for (const gameObject of scene.gameObjects) {
      if (gameObject.update) {
        gameObject.update(ctx);
      }
    }
  }

  static start(ctx) {
    let scene = Engine.currentScene

    //Call start on game objects that haven't been started
    if (!scene.hasStarted) {
      scene.hasStarted = true;
      if (scene.start)
        scene.start(ctx);
      for (const gameObject of scene.gameObjects) {
        if (gameObject.start) {
          gameObject.start(ctx);
        }
      }
    }
  }

  static draw(ctx) {
    let scene = Engine.currentScene
    //Draw in world space
    ctx.fillStyle = scene.backgroundColor;
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)

    //Call draw on all the game objects
    for (const gameObject of scene.gameObjects) {
      if (gameObject.draw) {
        gameObject.draw(ctx)
      }

    }

  }

  /** Setup the game **/
  static setup() {
    document.addEventListener("keydown", Input.keydown)
    document.addEventListener("keyup", Input.keyup)

    document.addEventListener("mousemove", Input.mousemove)
    document.addEventListener("mouseup", Input.mouseup);


    //In the background, create a thread and call
    //gameLoop every 100ms.

    setInterval(Engine.gameLoop, Time.ms)
  }
}

window.Engine = Engine