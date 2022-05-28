(function() {

  var video = null;
  var canvas = null;

  function startup() {
    video = document.getElementById('video');
    canvas = document.getElementById('canvas');

    photobutton = document.getElementById('photobutton');

    navigator.mediaDevices.getUserMedia({video: true, audio: false})
        .then(function (stream) {
          video.srcObject = stream;
          video.height=1000;
          video.width=730;
          video.play();
        })
        .catch(function(err) {
          console.log("An error occurred: " + err);
        });

    photobutton.addEventListener('click', function(ev){
      takepicture();
    });
  }

  function takepicture(){
    var width = 730; //window.screen.width; //document. getElementById('video_player'). style. width;
    var height = 1000; //window.screen.height; //document. getElementById('video_player'). style. height;
    //height = video.videoHeight / (video.videoWidth/width);
    if (isNaN(height)) {
      height = width / (4/3);
    }
    var context = canvas.getContext('2d');
    console.log(width, height);
    canvas.width=width;
    canvas.height=height;
    context.drawImage(video, 0, 0, width, height);
    var data = canvas.toDataURL('image/png');
    video.pause();
    console.log(data)
    document.getElementById('video_player').innerHTML="<img src="+data+">";
  }
  window.addEventListener('load', startup, false);
})();
