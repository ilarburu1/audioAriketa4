let playlist;
let currentAudioIndex = 0;
let audio = document.getElementById("audio");
let play = document.getElementById("play");
let pause = document.getElementById("pause");
let igo = document.getElementById("igo");
let jetsi = document.getElementById("jetsi");
let ff = document.getElementById("ff");

play.onclick = function () {
  audio.play();
};
pause.onclick = function () {
  audio.pause();
};

igo.onclick = function () {
  if (audio.volume < 1) {
    audio.volume += 0.1;
  }
};

jetsi.onclick = function () {
  if (audio.volume > 0) {
    audio.volume -= 0.1;
  }
};

ff.onclick = function () {
  fastForward();
};

function fastForward() {
  audio.currentTime += 10;
}
window.onload = function () {
  playlist = ["audioak/audio1.mp3", "audioak/audio2.mp3", "audioak/audio3.mp3"];
  audio.addEventListener("ended", hurrengoAudioa);
};

function hurrengoAudioa() {
  currentAudioIndex = (currentAudioIndex + 1) % playlist.length;
  audio.src = playlist[currentAudioIndex];
  audio.load();
  audio.play();
}
