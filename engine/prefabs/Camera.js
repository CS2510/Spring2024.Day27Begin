class Camera extends GameObject{
  static {
    Camera._main = new Camera();
  }
  static get main(){
    return Camera._main;
  }
}

window.Camera = Camera;