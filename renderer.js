const playPauseButton = document.querySelector("#play-pause-button");
const previous = document.querySelector("#previous");
const next = document.querySelector("#next");
const music = document.querySelector("#music");

const play = document.getElementById("play");
const pause = document.getElementById("pause");
const volume = document.getElementById("volume");

let isPLaying = false;
let playlist = [];
let index = 0;
let player = document.getElementById("audioPlayer");


function loadMusicFolder(e) {
  playlist = e.target.files;

  console.log(playlist);
  loadSong();
}


const updateVolume = () => {
    player.volume = volume.value / 1000 ; 
}

const loadSong = () => {
    player.pause();
    player.src = playlist[index].path;
    player.load();
    player.play();
};

const buttonSwitch = () => {
  if (isPLaying === false) {
    pause.classList.add("hide");
    play.classList.remove("hide");
  } else {
    play.classList.add("hide");
    pause.classList.remove("hide");
  }
};

const updatePlayer = () => {
  player = document.getElementById("audioPlayer");
};

const setPLaying = () => {
  isPLaying = !isPLaying;
  if (isPLaying) {
    player.play();
  } else {
    player.pause();
  }
  buttonSwitch();
};

const nextSong = () => {
  console.log("next song");
  console.log("length " + playlist.length);

  if (index + 1 === playlist.length) {
    index = 0;
  } else {
    index += 1;
  }
  loadSong();
};

const previousSong = () => {
  console.log("previous song");
  if (index - 1 < 0) {
    index = playlist.length - 1;
  } else {
    index -= 1;
  }
  loadSong();
};

playPauseButton.addEventListener("click", setPLaying);
next.addEventListener("click", nextSong);
previous.addEventListener("click", previousSong);
music.addEventListener("change", loadMusicFolder);
player.addEventListener("ended", nextSong);
volume.addEventListener("click", updateVolume)