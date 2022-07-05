function start() {
  navigator.mediaDevices.getUserMedia({ audio: true });
  classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/qkOkMQ6bb/model.json', modelReady);
}

function modelReady() {
  classifier.classify(gotresults);
}
var dog = 0;
var cat = 0;
var parrot = 0;
var wolf = 0;

function gotresults(error, results) {
  if (error) {
    console.error(error);


  }
  else {

    console.log(results);
    var R1M = Math.floor(Math.random() * 255) + 1;
    var Fireblade = Math.floor(Math.random() * 255) + 1;
    var H2R = Math.floor(Math.random() * 255) + 1;
    document.getElementById("result_label").innerHTML = 'Detected voice is off- ' + results[0].label;


    document.getElementById("result_confidence").innerHTML = 'Acuuracy-' + (results[0].confidence * 100).toFixed(2) + "%";
    document.getElementById("result_label").style.color = "rgb(" + R1M + "," + Fireblade + "," + H2R + ")";

    document.getElementById("result_confidence").style.color = "rgb(" + R1M + "," + Fireblade + "," + H2R + ")";
    img = document.getElementById('alien1');
    if (results[0].label == "dog") {
      img.src = 'dog.gif';
      dog = dog + 1;
    }


    else if (results[0].label == "cat") {
      img.src = 'cat.gif';
      cat = cat + 1;
    }

    else if (results[0].label == "parrot") {
      img.src = "Parrot.gif";

      parrot = parrot + 1;
    }



    else {
      img.src = "wolf.gif";
     

    }
  }
}
