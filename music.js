const btnHome = document.querySelector(".go-home");
const btnPlayList = document.querySelector(".play-list");
const btnPlay = document.querySelector(".play-song");
const btnBack = document.querySelector(".back");
const btnForward = document.querySelector(".forward");
//
const audio = document.querySelector("#audio");
const progress = document.querySelector(".progress");
const playListBox = document.querySelector(".playlist-box");
const songs = document.querySelector(".list-song");
const thumbnailSong = document.querySelector(".thumbnail-song img");
const songTb = document.getElementById("song-thumbnail");
const nameSong = document.querySelector(".info-song .song-name");
const author = document.querySelector(".info-song .author");
const timeSong = document.querySelector(".bar-song .duration-time");
const musicContent = document.querySelector(".music-content");
const progressBar = document.querySelector(".progress-bar");
const currentTimeDisplay = document.querySelector(".current-time");
console.log("nameSong", nameSong);
const listMusic = [
  {
    song: "Can't Take My Eyes Off You",
    author: "Jaehyun",
    src: "./assets/1.mp3",
    thumbnail: "./assets/IMG_1476.JPG",
  },
  {
    song: "I Like Me Better",
    author: "Jaehyun",
    src: "./assets/2.mp3",
    thumbnail: "./assets/IMG_1479.JPG",
  },
  {
    song: "SOMEONE'S SOMEONE",
    author: "Monsta X",
    src: "./assets/3.mp3",
    thumbnail: "./assets/IMG_1477.JPG",
  },
  {
    song: "LOVE SCENARIO",
    author: "iKon",
    src: "./assets/4.mp3",
    thumbnail: "./assets/IMG_1480.JPG",
  },
  {
    song: "Try Again",
    author: "Jaehyun",
    src: "./assets/5.mp3",
    thumbnail: "./assets/IMG_1480.JPG",
  },
];

class UI {
  constructor() {
    this.songIndex = 0;
  }

  // show playlist
  showPlayListBox() {
    playListBox.classList.add("active");
  }
  // hide playlist
  hidePlayListBox() {
    playListBox.classList.remove("active");
  }
  // get duration
  getDuration(music) {
    return new Promise(function (resolve) {
      music.addEventListener("loadedmetadata", function () {
        const time = formatTime(music.duration);

        resolve(time);
      });
    });
  }
  // set list song
  async setSongs() {
    songs.innerHTML = "";

    for (let i = 0; i < listMusic.length; i++) {
      const music = new Audio(`${listMusic[i].src}`);
      const time = await this.getDuration(music);
      console.log(time);
      // const time = { time: await this.getDuration(music) };
      // listMusic[i] = { ...listMusic[i], ...time };
      songs.insertAdjacentHTML(
        "beforeend",
        `<div class="info-song">
                    <div class="left">
                        <span class="name-song">${listMusic[i].song}</span>
                        <span class="author">${listMusic[i].author}</span>
                    </div>
                    <div class="right">
                        <span class="minutes">${time}</span>
                    </div>
                </div>`
      );
    }
  }
  // load detail song when page loaded
  loadSong(music) {
    audio.src = music.src;
    this.getDuration(audio).then((time) => {
      nameSong.textContent = music.song;
      author.textContent = music.author;
      timeSong.textContent = time;
      songTb.src = music.thumbnail;
      // thumbnailSong.classList.add("rotate-ani");
      audio.play();
    });
  }
  // play song
  playSong() {
    console.log("play song");
    musicContent.classList.add("playing");
    thumbnailSong.style.animationPlayState = "running";
    btnPlay.querySelector(".pause").classList.remove("hide");
    btnPlay.querySelector(".play").classList.add("hide");

    audio.play();
  }
  // pause song
  pauseSong() {
    musicContent.classList.remove("playing");
    // thumbnailSong.style.animationPlayState = "paused";
    btnPlay.querySelector(".play").classList.remove("hide");
    btnPlay.querySelector(".pause").classList.add("hide");

    audio.pause();
  }
  // prev song
  prevSong() {
    this.songIndex--;

    if (this.songIndex < 0) {
      this.songIndex = listMusic.length - 1;
    }

    this.loadSong(listMusic[this.songIndex]);
  }
  // prev song
  nextSong() {
    this.songIndex++;

    if (this.songIndex > listMusic.length - 1) {
      this.songIndex = 0;
    }

    this.loadSong(listMusic[this.songIndex]);
  }
  // update progress
  updateProgress(e) {
    const { currentTime, duration } = e.srcElement;
    const percentWidth = (currentTime / duration) * 100;
    progressBar.style.width = `${percentWidth}%`;
    const time = formatTime(currentTime);

    currentTimeDisplay.textContent = time;
  }
  // set progress
  setProgress(e) {
    const width = e.offsetX;
    const progress = e.currentTarget;
    const progressBarWidth = (width / progress.clientWidth) * 100;
    progressBar.style.width = `${progressBarWidth}%`;

    let { duration } = audio;
    audio.currentTime = (width * duration) / progress.clientWidth;
  }
  // select song in playlist
  selectSong(e) {
    const target = e.target;

    const nameSong = target.querySelector(".name-song").textContent;
    const song = listMusic.find((audio) => audio.song === nameSong);

    this.loadSong(song);
    this.playSong();

    this.hidePlayListBox();
  }
}

document.addEventListener("DOMContentLoaded", eventListeners);

function eventListeners() {
  const ui = new UI();
  // load song
  ui.loadSong(listMusic[ui.songIndex]);
  // handle set list song
  ui.setSongs();
  // handle show playlist
  // btnPlayList.addEventListener("click", function () {
  //   ui.showPlayListBox();
  // });
  // handle hide playlist
  btnHome.addEventListener("click", function () {
    ui.hidePlayListBox();
  });
  // play/pause song
  btnPlay.addEventListener("click", function () {
    console.log("click ");
    if (musicContent.classList.contains("playing")) {
      ui.pauseSong();
    } else {
      ui.playSong();
    }
  });
  // update progress
  audio.addEventListener("timeupdate", function (e) {
    ui.updateProgress(e);
  });
  // set progress
  progress.addEventListener("click", function (e) {
    ui.setProgress(e);
  });
  // previous song
  btnBack.addEventListener("click", function () {
    ui.prevSong();
    ui.playSong();
  });
  // forward song
  btnForward.addEventListener("click", function () {
    ui.nextSong();
    ui.playSong();
  });
  // end song
  audio.addEventListener("ended", function () {
    ui.nextSong();
    ui.playSong();
  });
  // select song
  songs.addEventListener("click", function (e) {
    ui.selectSong(e);
  });
}

function formatTime(sec_num) {
  let hours = Math.floor(sec_num / 3600);
  let minutes = Math.floor((sec_num - hours * 3600) / 60);
  let seconds = Math.floor(sec_num - hours * 3600 - minutes * 60);

  hours = hours < 10 ? (hours > 0 ? "0" + hours : 0) : hours;

  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  return (hours !== 0 ? hours + ":" : "") + minutes + ":" + seconds;
}
