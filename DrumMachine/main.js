function playSound(event) {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`),
    key = document.querySelector(`div[data-key="${event.keyCode}"]`);

  if (!audio) return false;
  audio.currentTime = 0;
  audio.play();
}

function removeTransition(event) {
  console.log(event);
  event.target.classList.remove('playing');
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);
