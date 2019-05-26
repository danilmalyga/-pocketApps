window.onload = function() {
  var words = document.getElementById('words');
};

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'en-US';
recognition.interimResults = true;

recognition.addEventListener('result', event => {
  words.innerHTML = event.results[0][0].transcript;
});
recognition.addEventListener('end', recognition.start);
recognition.start();
