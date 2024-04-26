class CameraMoverComponent extends Component{
  start(ctx){
    Camera.main.transform.x = 0
    Camera.main.transform.y = 0
    Camera.main.transform.scaleX = 1;
    Camera.main.transform.scaleY = 1
  }
  update(ctx){
    //TODO: Move the camera
    // Camera.main.transform.x += Time.deltaTime;
    // Camera.main.transform.y += Time.deltaTime;
    //TODO: Scale the camera
    // Camera.main.transform.scaleX *= (1 + Time.deltaTime/10)
    // Camera.main.transform.scaleY *= (1 + Time.deltaTime/10)
  }
  
}

window.CameraMoverComponent = CameraMoverComponent;