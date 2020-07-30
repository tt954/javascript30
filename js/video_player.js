const video = document.querySelector('.player__video');
const playBtn = document.querySelector('.player__button.toggle');

let isPlaying = false;

function togglePlay() {
  if (!isPlaying) {
    video.play();
    isPlaying = true;
  } else {
    video.pause();
    isPlaying = false;
  }
}



playBtn.addEventListener('click', togglePlay);