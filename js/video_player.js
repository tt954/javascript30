const video = document.querySelector('.player__video');
const playBtn = document.querySelector('.player__button.toggle');
const skipBtns = document.querySelectorAll('[data-skip]');
const ranges = document.querySelectorAll('.player__slider');
const progress = document.querySelector('.progress');
const progressBar = document.querySelector('.progress__filled');

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
  video[this.name] = this.value;
}

function updateProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  console.log(e.offsetX / progress.offsetWidth);
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

video.addEventListener('click', togglePlay);
video.addEventListener('timeupdate', updateProgress);
playBtn.addEventListener('click', togglePlay);
skipBtns.forEach(btn => btn.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', updateRange));
progress.addEventListener('click', scrub)
// ranges.forEach(range => range.addEventListener('mouseover', updateRange));
