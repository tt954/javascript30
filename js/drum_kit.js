function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('playing');
}

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return;

  key.classList.add('playing');
  audio.currentTime = 0;
  audio.play();
}

function playOnClick(e) {
  const keyCode = e.currentTarget.dataset.key;
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${keyCode}"]`);
  if (!audio) return;

  key.classList.add('playing');
  audio.currentTime = 0;
  audio.play();
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
keys.forEach(key => key.addEventListener('click', playOnClick));
window.addEventListener('keydown', playSound)