const video = document.querySelector('.player__video');
const playBtn = document.querySelector('.player__button.toggle');

let isPlaying = false;

function togglePlay() {
  const icon = document.createElement('i');

  if (!isPlaying) {
    icon.classList.add('fas', 'fa-pause');
    playBtn.removeChild(document.querySelector('.fa-play'));
    playBtn.appendChild(icon);
    video.play();
    isPlaying = !isPlaying;
  } else {
    icon.classList.add('fas', 'fa-play');
    playBtn.removeChild(document.querySelector('.fa-pause'));
    playBtn.appendChild(icon);
    video.pause();
    isPlaying = !isPlaying;
  }
}


playBtn.addEventListener('click', togglePlay);