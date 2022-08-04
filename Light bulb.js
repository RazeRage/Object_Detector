Status = "";
Light_Bulb_image = "";

function preload() {
    Light_Bulb_image = loadImage(Light_Bulb.jpg);
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
    object_detector.detect(Light_Bulb_image, gotResults);
}
function gotResults(error, results) {
    if (error) {
        console.log(error)
    } else {
        console.log(results)
    }
}
function draw() {
    image(Light_Bulb_image, 0, 0, 640, 350);
}