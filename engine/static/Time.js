class Time {
    static ms = 20;
    static fps = 1000 / Time.ms;
    static deltaTime = Time.ms/1000; //The time between frames as a fraction of a second, i.e. .05
    static time = 0; // How much time has elapsed
    static update(ctx){
        Time.time += Time.deltaTime;
    }
}

window.Time = Time