Webcam.set({
    width:350,
     height:350,
     image_format:"png",
     png_quality:90

});
 
cam = document.getElementById("camera");



Webcam.attach(cam);

function take_snapshot() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML ="<img id='my_image' src='"+data_uri+"'/>";
    });
}

console.log("ml5 version",ml5.version);

model_displayer = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Swxrkyiw5/model.json",modelLoaded);
function modelLoaded() {
    console.log("Model is loaded");
}

function text() {
    img = document.getElementById("my_image");
    model_displayer.classify(img, gotResult);

}

function gotResult(error,results) {
    if(error) {
        console.error(error);

    } else{
        console.log(results);
        document.getElementById("inside_p").innerHTML = results[0].label;
        document.getElementById("outside_p").innerHTML= results[0].confidence.toFixed(2);
    }
}

