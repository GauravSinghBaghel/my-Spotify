let audioElement = new Audio('NCS-songs/1.mp3');
let songIndex =0;

$("button").click(function() {
  var index = $(this).index(); // Get the index of the clicked button
  var audioSrc = 'NCS-songs/' + (index + 1) + '.mp3'; // Construct the audio source
  
  audioElement.src = audioSrc; // Set the source of the audio element
  audioElement.play();
  masterPlay.classList.remove('fa-play-circle');
  masterPlay.classList.add('fa-pause-circle');
  gif.style.opacity = 1;
});



let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');

//Handle play/pause click
masterPlay.addEventListener('click', function (){
  if(audioElement.paused || audioElement.currentTime<=0){
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity = 1;
  }
  else{
    audioElement.pause();
    masterPlay.classList.remove('fa-pause-circle');
    masterPlay.classList.add('fa-play-circle');
    gif.style.opacity = 0;
  }

})

// Listen to Events
audioElement.addEventListener('timeupdate', function () {
  progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
  myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', function (){
  audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})


// Previous button
$("#previousButton").click(function() {
  var currentSrc = audioElement.src;
  var currentIndex = parseInt(currentSrc.substring(currentSrc.lastIndexOf("/") + 1, currentSrc.lastIndexOf(".")));
  
  if (currentIndex > 1) {
    var previousIndex = currentIndex - 1;
    var previousSrc = currentSrc.replace(currentIndex + ".mp3", previousIndex + ".mp3");
    
    audioElement.src = previousSrc;
    audioElement.play();
  }
});

// Forward button
$("#forwardButton").click(function() {
  var currentSrc = audioElement.src;
  var currentIndex = parseInt(currentSrc.substring(currentSrc.lastIndexOf("/") + 1, currentSrc.lastIndexOf(".")));
  
  if (currentIndex < 9) {
    var nextIndex = currentIndex + 1;
    var nextSrc = currentSrc.replace(currentIndex + ".mp3", nextIndex + ".mp3");
    
    audioElement.src = nextSrc;
    audioElement.play();
  }
});






