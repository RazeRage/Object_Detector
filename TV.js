status = "";
TV_image = "";
objects = [];

function preload() {
  TV_image = loadImage(TV.jpg);
}
function setup() {
    canvas = createCanvas(640, 350);
    canvas.position(315, 200);
    object_detector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status"), innerHTML = "Status : Detecting Objects"
}
function modelLoaded() {
    console.log("modelLoaded!");
    Status = true;
    object_detector.detect(TV_image, gotResults);
}
function gotResults(error, results) {
    if (error) {
        console.log(error)
    } else {
        console.log(results)
        objects = results;
    }
}
function draw() {
    image(TV_image, 0, 0, 640, 420);
  
       if(status != "")
        {
          for (i = 0; i < objects.length; i++) {
            document.getElementById("status").innerHTML = "Status : Object Detected";
      
            fill("#FF0000");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
            noFill();
            stroke("#FF0000");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
          }
        }
  }