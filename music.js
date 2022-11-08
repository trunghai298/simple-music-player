const btnHome = document.querySelector(".go-home");
const btnCloseLyrics = document.querySelector(".close-lyrics");

const btnPlayList = document.querySelector(".play-list");
const btnLyrics = document.querySelector(".lyrics");

const btnPlay = document.querySelector(".play-song");
const btnBack = document.querySelector(".back");
const btnForward = document.querySelector(".forward");
//
const audio = document.querySelector("#audio");
const progress = document.querySelector(".progress");
const playListBox = document.querySelector(".playlist-box");
const lyricsBox = document.querySelector(".lyrics-box");
const songs = document.querySelector(".list-song");
const lyrics = document.querySelector(".song-lyrics");

const thumbnailSong = document.querySelector(".thumbnail-song img");
const songTb = document.getElementById("song-thumbnail");
const nameSong = document.querySelector(".info-song .song-name");
const author = document.querySelector(".info-song .author");
const timeSong = document.querySelector(".bar-song .duration-time");
const musicContent = document.querySelector(".music-content");
const progressBar = document.querySelector(".progress-bar");
const currentTimeDisplay = document.querySelector(".current-time");

const listMusic = [
  {
    song: "Can't Take My Eyes Off You",
    author: "Jaehyun",
    src: "./assets/1.mp3",
    thumbnail: "./assets/IMG_1476.JPG",
    lyrics: `
You're just too good to be true
I can't take my eyes off you
You'd be like heaven to touch
I wanna hold you so much
At long last love has arrived
And I thank God I'm alive
You're just too good to be true
Can't take my eyes off you
Pardon the way that I stare
There's nothing else to compare
The sight of you leaves me weak
There are no words left to speak
But if you feel like I feel
Please let me know that it's real
You're just too good to be true
I can't take my eyes off you
I love you, baby
And if it's quite all right
I need you, baby
To warm the lonely nights
I love you, baby
Trust in me when I say
Oh, pretty baby
Don't bring me down I pray
Oh, pretty baby
Now that I've found you, stay
And let me love you, baby
Let me love you
You're just too good to be true
I can't take my eyes off you
You'd be like heaven to touch
I wanna hold you so much
At long last love has arrived
And I thank God I'm alive
You're just too good to be true
Can't take my eyes off you
I love you, baby
And if it's quite all right
I need you, baby
To warm the lonely nights
I love you, baby
Trust in me when I say
Oh, pretty baby
Don't bring me down I pray
Oh, pretty baby
Now that I've found you, stay
And let me love you, baby
Let me love you
You're just too good to be true
I can't take my eyes off you
You'd be like heaven to touch
I wanna hold you so much
At long last love has arrived
And I thank God I'm alive
You're just too good to be true
Can't take my eyes off you`,
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
    thumbnail: "./assets/jh.jpg",
    lyrics: `Romanization
    uriga nanun
    gin shiganmankeum neureonan gidaeneun
    eojjeomyeon dangyeonhaljido molla
    sumaneun wechimdo
    seoroye mamen dachi motan chae
    geureoke heulleogagido haetjiman
    So whenever you ask me again
    How I feel
    Please remember
    My answer is you
    
    meon gireul dashi doraganda haedo
    nan yeojeonhi gateun mamil tenikka
    We’ll be alright
    I want to try again
    
    jajeun datume
    myeot beonigo dashi muneojeodo
    jungyohan geon urirago malhaetteut
    muuimihaji ana
    han georeum deo naaganeun georago
    jinannari malhaejugo inneun geol
    
    So whenever you ask me again
    How I feel
    Please remember
    My answer is you
    
    meon gireul dashi doraganda haedo
    nan yeojeonhi gateun mamil tenikka
    We’ll be alright
    I want to try again
    
    gateun banbogieodo
    You should know that
    I’m always on your side
    Please remember
    My answer is you
    
    meon gireul dashi doraganda haedo
    nan yeojeonhi gateun mamil tenikka
    We’ll be alright
    I want to try again
    
    We’ll be alright
    Please try again`,
  },
  {
    song: "BROKEN",
    author: "GC BEAT",
    src: "./assets/Broken.mp3",
    thumbnail:
      "https://cdn5.beatstars.com/eyJidWNrZXQiOiJidHMtY29udGVudCIsImtleSI6InVzZXJzL3Byb2QvMzYxMjI3L2ltYWdlL3c5M0JnUUdiRVlCWC9icm9rZW4ucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6ImZpbGwiLCJ3aWR0aCI6MTYwLCJoZWlnaHQiOjE2MH19fQ==?t=1647018800235",
  },
  {
    song: "ROSE",
    author: "GC BEAT",
    src: "./assets/rose.mp3",
    thumbnail:
      "https://cdn5.beatstars.com/eyJidWNrZXQiOiJidHMtY29udGVudCIsImtleSI6InVzZXJzL3Byb2QvMzYxMjI3L2ltYWdlL2J3dXd5aFhNdTlidC9yb3NlLnBuZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJmaXQiOiJmaWxsIiwid2lkdGgiOjE2MCwiaGVpZ2h0IjoxNjB9fX0=?t=1646683186824",
  },
  {
    song: "SAY WHAT I WANT",
    author: "GC BEAT",
    src: "./assets/swiw.mp3",
    thumbnail:
      "https://cdn5.beatstars.com/eyJidWNrZXQiOiJidHMtY29udGVudCIsImtleSI6InVzZXJzL3Byb2QvMzYxMjI3L2ltYWdlL09nUFJjenRwRk1HdC9zYXl3aGF0aXdhbnQucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6ImZpbGwiLCJ3aWR0aCI6MTYwLCJoZWlnaHQiOjE2MH19fQ==?t=1642956514111",
  },
  {
    song: "CUPID",
    author: "GC BEAT",
    src: "./assets/cupid.mp3",
    thumbnail:
      "https://cdn5.beatstars.com/eyJidWNrZXQiOiJidHMtY29udGVudCIsImtleSI6InVzZXJzL3Byb2QvMzYxMjI3L2ltYWdlLzRhdzlxNk9QQndaUC9jdXBpZC5wbmciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiZmlsbCIsIndpZHRoIjoxNjAsImhlaWdodCI6MTYwfX19?t=1641917567373",
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
  // show lyrics
  showLyricsBox() {
    lyricsBox.classList.add("active");
  }
  // show lyrics
  hideLyricsBox() {
    lyricsBox.classList.remove("active");
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
      // const time = { time: await this.getDuration(music) };
      // listMusic[i] = { ...listMusic[i], ...time };
      songs.insertAdjacentHTML(
        "beforeend",
        `<div class="info-song">
          <img class="song-small-thumbnail" src=${listMusic[i].thumbnail} alt=""/>
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
    lyrics.innerHTML = "";
    console.log(music);
    lyrics.insertAdjacentHTML(
      "beforeend",
      ` <div class="lyrics">
          <span>${music.lyrics}</span>
        </div>`
    );
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
    this.hideLyricsBox();
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
  btnPlayList.addEventListener("click", function () {
    ui.showPlayListBox();
  });

  btnLyrics.addEventListener("click", function () {
    ui.showLyricsBox();
  });

  // handle hide playlist
  btnHome.addEventListener("click", function () {
    ui.hidePlayListBox();
  });

  btnCloseLyrics.addEventListener("click", function () {
    ui.hideLyricsBox();
  });
  // play/pause song
  btnPlay.addEventListener("click", function () {
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
