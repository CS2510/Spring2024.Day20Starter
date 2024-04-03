class ControllerComponent extends Component {
  update(ctx) {
    //Get both game objects,
    //grab their geometry and check 
    //if there is a collision
    let playerCircle = GameObject.find("PlayerGameObject").getComponent("Circle").asGeometry();
    let deathCircle = GameObject.find("DeathGameObject").getComponent("Circle").asGeometry();
    let inCollision =  CollisionsGeometric.isCircle2Circle2Collision(playerCircle, deathCircle);

    if(Globals.communicationMethod == "sameScene")
      //If we are communicating between objects in the same scene
      //find the game object in question and update its inCollision 
      //property
      GameObject.find("PlayerGameObject").getComponent("PlayerComponent").inCollision = inCollision;
    
    if(Globals.communicationMethod == "events")
      //If we are communicating using events,
      //fire an event
      EventSystem.fireEvent({inCollision:inCollision})
    
    if(Globals.communicationMethod == "globals")
      //If we are communicating using globals, 
      //update the global variable
      Globals.inCollision = inCollision
    
  }
}

window.ControllerComponent = ControllerComponent