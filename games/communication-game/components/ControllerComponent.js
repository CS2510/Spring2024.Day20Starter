class ControllerComponent extends Component {
  update(ctx) {
    //Get both game objects,
    //grab their geometry and check 
    //if there is a collision


    if (Globals.communicationMethod == "sameScene") {
      //If we are communicating between objects in the same scene
      //find the game object in question and update its inCollision 
      //property
    }

    if (Globals.communicationMethod == "events") {
      //If we are communicating using events,
      //fire an event
    }

    if (Globals.communicationMethod == "globals") {
      //If we are communicating using globals, 
      //update the global variable
      Globals.inCollision = inCollision
    }

  }
}

window.ControllerComponent = ControllerComponent