

const music = document.querySelector('#audio');

const seekBar = document.querySelector('#seek');

const songName = document.querySelector('#title');

const photo = document.querySelector('#poster_master_play');

const currentTime = document.querySelector('#currentstart');

const musicDuration = document.querySelector('#currentEnd');

const playBtn = document.querySelector('#masterPlay');

const forwardBtn = document.querySelector('.for-btn');

const backwardBtn = document.querySelector('.back-btn');

const playList = document.getElementsByClassName("playListplay");

const songs = [
    {

        id: 1,
        songName: `We Rollin <br>
        <div class="subtitle">Shubh</div>`,
        poster: "image/img 1.jpeg" ,
        path : "audio/mp3.1.mp3 "

    },
    {

        id: 2,
        songName: `Sangdi <br>
        <div class="subtitle">jimmy kaler</div>`,
        poster: "image/img 2.jpeg" ,
        path : "audio/mp3.2.mp3 "

    },
    {

        id: 3,
        songName: `Barbie Doll <br>
        <div class="subtitle">Shivjot</div>`,
        poster: "image/img 3.jpeg" ,
        path : "audio/mp3.3.mp3 "

    },
    {

        id: 4,
        songName: `Besharam Rang <br>
        <div class="subtitle">Shilpa Rao</div>`,
        poster: "image/img 4.jpeg" ,
        path : "audio/mp3.4.mp3 "

    },
    {

        id: 5,
        songName: `Har Har Shambhu <br>
        <div class="subtitle">Jeetu Sharma</div>`,
        poster: "image/img 5.jpeg" ,
        path : "audio/mp3.5.mp3 "

    },
    {

        id: 6,
        songName: `Ishq Da Dariya <br>
        <div class="subtitle">Sarah Anjuli</div>`,
        poster: "image/img 6.jpeg" ,
        path : "audio/mp3.6.mp3 "

    },
    {

        id: 7,
        songName: `Kesariya <br>
        <div class="subtitle">Arjit sing</div>`,
        poster: "image/img 7.jpeg" ,
        path : "audio/mp3.7.mp3 "

    },
    {

        id: 8,
        songName: `Maan Meri Jaan <br>
        <div class="subtitle">King</div>`,
        poster: "image/img 8.jpeg" ,
        path : "audio/mp3.8.mp3 "

    },
    {

        id: 9,
        songName: `Main Chand sitara ki karna <br>
        <div class="subtitle">Ammy Virk</div>`,
        poster: "image/img 9.jpeg" ,
        path : "audio/mp3.9.mp3 "

    },
    {

        id: 10,
        songName: `Mehbooba Main tere... <br>
        <div class="subtitle">Ananya bhat</div>`,
        poster: "image/img 10.jpeg" ,
        path : "audio/mp3.10.mp3 "

    },
    {

        id: 11,
        songName: `Aabaad Barbaad <br>
        <div class="subtitle">Arjit Singh</div>`,
        poster: "image/img 11.jpeg" ,
        path : "audio/mp3.11.mp3 "

    },
    {

        id: 12,
        songName: `Raatan Lambiyan<br>
        <div class="subtitle">Jubin Nautiyal</div>`,
        poster: "image/img 12.jpeg" ,
        path : "audio/mp3.12.mp3 "

    },
    {

        id: 13,
        songName: `Tere pyar main <br>
        <div class="subtitle">Arjit singh</div>`,
        poster: "image/img 13.jpeg" ,
        path : "audio/mp3.13.mp3 "

    },
    {

        id: 14,
        songName: `Kalash chori <br>
        <div class="subtitle">Raga</div>`,
        poster: "image/img 14.jpeg" ,
        path : "audio/mp3.1.mp3 "

    },
    {

        id: 15,
        songName: `Daku<br>
        <div class="subtitle">Chain Natran</div>`,
        poster: "image/img 15.jpeg" ,
        path : "audio/mp3.15.mp3 "

    },
    {

        id: 16,
        songName: `Tere chehra <br>
        <div class="subtitle">Radhika Rao</div>`,
        poster: "image/img 16.jpeg" ,
        path : "audio/mp3.16.mp3 "

    },
    {

        id: 17,
        songName: `Ek bar hi kiya .... <br>
        <div class="subtitle">Arijit singh</div>`,
        poster: "image/img 17.jpeg" ,
        path : "audio/mp3.17.mp3 "

    },
    {

        id: 18,
        songName: `Show my tumbka <br>
        <div class="subtitle">Sunidhi chauhan</div>`,
        poster: "image/img 1.jpeg" ,
        path : "audio/mp3.18.mp3 "

    },
    {

        id: 19,
        songName: `Meri Ashique <br>
        <div class="subtitle">Jubin Nautiyal</div>`,
        poster: "image/img 1.jpeg" ,
        path : "audio/mp3.19.mp3 "

    },
    {

        id: 20,
        songName: `Pyaar hona na tha <br>
        <div class="subtitle">Jubin Nautiyal</div>`,
        poster: "image/img 1.jpeg" ,
        path : "audio/mp3.20.mp3 "

    },
    
];


let currentMusic = 0;

Array.from(document.getElementsByClassName('songItem')).forEach((e, i) =>{
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;

});


playBtn.addEventListener('click' , function(){

    if(music.paused  || music.currentTime <= 0){
        music.play();
        document.getElementById("wave").classList.add("active1");
        playBtn.classList.remove("bi-play-fill");
        playBtn.classList.add("bi-pause-fill");

    }else{
        music.pause();
        document.getElementById("wave").classList.remove("active1");
        playBtn.classList.remove("bi-pause-fill");
        playBtn.classList.add("bi-play-fill");

    }
});



const setMusic = (i) => {
    seekBar.value = 0;  // set range slide value to 0 ;
    let song = songs[i];
    currentMusic = i;

    music.src = song.path;
    songName.innerHTML = song.songName;
    photo.src = song.poster;
    currentTime.innerHTML = '00:00';

    setTimeout(() => {
        seekBar.max = music.duration;
        musicDuration.innerHTML = formatTime(music.duration);
    }, 300);
}

setMusic(0);

const formatTime = (time) => {
    let min = Math.floor(time / 60);
    if (min < 10) {
        min = `0${min}`;
    }
    let sec = Math.floor(time % 60);
    if (sec < 10) {
        sec = `0${sec}`;
    }
    return `${min}  :  ${sec}`;
}


setInterval(() => {
    seekBar.value = music.currentTime;
    currentTime.innerHTML = formatTime(music.currentTime);
    if (Math.floor(music.currentTime) == Math.floor(seekBar.max)) {
        forwardBtn.click();
    }
}, 500); 

seekBar.addEventListener('change', () => {
    music.currentTime = seekBar.value;
    playMusic();
})

const playMusic = () => {
        music.play();
        playBtn.classList.remove("bi-play-fill");
        playBtn.classList.add("bi-pause-fill");   
     };

     //forward and backward

forwardBtn.addEventListener('click', () => {
    if (currentMusic >= songs.length - 1) {
        currentMusic = 0;
    } else {
        currentMusic++;
    }
    setMusic(currentMusic);
    playMusic();
});
backwardBtn.addEventListener('click', () => {
    if (currentMusic <= 0) {
        currentMusic = songs.length - 1;
    } else {
        currentMusic--;
    }
    setMusic(currentMusic);
    playMusic();
});

for(var i = 0; i < playList.length ; i++ ){
  playList[i].addEventListener('click' , function(){
       setMusic(this.id+1);
    });
  }


document.getElementById('pop_song_left').addEventListener('click' ,function(){
    document.getElementsByClassName('popular_song')[0].scrollBy(-100 , 0 );
});
document.getElementById('pop_song_right').addEventListener('click' ,function(){
document.getElementsByClassName('popular_song')[0].scrollBy(100 , 0 );
});

document.getElementById('pop_song_left_2').addEventListener('click' ,function(){
document.getElementsByClassName('popular_artists')[0].scrollBy(-100 , 0 );
});
document.getElementById('pop_song_right_2').addEventListener('click' ,function(){
document.getElementsByClassName('popular_artists')[0].scrollBy(100 , 0 );
});
