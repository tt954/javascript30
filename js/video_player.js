const video = document.querySelector('.player__video');
const playBtn = document.querySelector('.player__button.toggle');
const skipBtns = document.querySelectorAll('[data-skip]');
const ranges = document.querySelectorAll('.player__slider');

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

function skip() {
  video.currentTime += parseInt(this.dataset.skip);
}

function updateRange() {
  console.log(this.value)
  video[this.name] = this.value;
}

video.addEventListener('click', togglePlay);
playBtn.addEventListener('click', togglePlay);
skipBtns.forEach(btn => btn.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', updateRange));
// ranges.forEach(range => range.addEventListener('mouseover', updateRange));