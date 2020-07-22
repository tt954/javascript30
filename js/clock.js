const secHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
  const now = new Date();

  const sec = now.getSeconds();
  const min = now.getMinutes();
  const hr = now.getHours();

  const secDegrees = ((sec / 60) * 360) + 90;
  const minDegrees = ((min / 60) * 360) + ((sec / 60) * 6) + 90;
  const hrDegrees = ((hr / 12) * 360) + ((min / 60) * 30) + 90;

  secHand.style.transform = `rotate(${secDegrees}deg)`;
  minHand.style.transform = `rotate(${minDegrees}deg)`;
  hourHand.style.transform = `rotate(${hrDegrees}deg)`;
}

setInterval(setDate, 1000);
setDate();