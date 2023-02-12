
camera = document.getElementById("camera");

  Webcam.set({
    width:200,
    height:300,
    image_format : 'png',
    png_quality:90
  });

Webcam.attach("#camera");

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("preview").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

console.log('ml5 version:', ml5.version);
  
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/mkz1m2qWy/model.json',modelLoaded);

  function modelLoaded()
   {
    console.log('Model Loaded!');
  }

  function check()
    {
      img = document.getElementById('captured_image');
      classifier.classify(img, gotResult);
    }
  
  
  function gotResult(error, results) 
  {
    if(error)
     {
      console.log(error);
    }
     else
      {
      console.log(results);

      document.getElementById("result_name").innerHTML = results[0].label;
      document.getElementById("result_accuracy").innerHTML = ((results[0].confidence)*100).toFixed(2) + "%";
       
     
      if(results[0].label == "super")
      {
        document.getElementById("update_emoji").innerHTML = "&#128076;";
      }
      if(results[0].label == "thumbsup")
      {
        document.getElementById("update_emoji").innerHTML = "&#128077;";
      }
      if(results[0].label == "thumbsdown")
      {
        document.getElementById("update_emoji").innerHTML = "&#128078;";
      }

    }
  }
     
