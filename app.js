const music = new Audio('media/rollin.mp3');
 music.play();


const songs = [
    {

        id: 1,
        songName: `We Rollin <br>
        <div class="subtitle">Shubh</div>`,
        poster: "image/img 1.jpeg"
    },
    {

        id: 2,
        songName: `Sangdi <br>
        <div class="subtitle">jimmy kaler</div>`,
        poster: "image/img 2.jpeg"
    },
    {

        id: 3,
        songName: `Barbie Doll <br>
        <div class="subtitle">Shivjot</div>`,
        poster: "image/img 3.jpeg"
    },
    {

        id: 4,
        songName: `Besharam Rang <br>
        <div class="subtitle">Shilpa Rao</div>`,
        poster: "image/img 4.jpeg"
    },
    {

        id: 5,
        songName: `Har Har Shambhu <br>
        <div class="subtitle">Jeetu Sharma</div>`,
        poster: "image/img 5.jpeg"
    },
    {

        id: 6,
        songName: `Ishq Da Dariya <br>
        <div class="subtitle">Sarah Anjuli</div>`,
        poster: "image/img 6.jpeg"
    },
    {

        id: 7,
        songName: `Kesariya <br>
        <div class="subtitle">Arjit sing</div>`,
        poster: "image/img .7jpeg"
    },
    {

        id: 8,
        songName: `Maan Meri Jaan <br>
        <div class="subtitle">King</div>`,
        poster: "image/img 8.jpeg"
    },
    {

        id: 9,
        songName: `Main Chand sitara ki karna <br>
        <div class="subtitle">Ammy Virk</div>`,
        poster: "image/img 9.jpeg"
    },
    {

        id: 10,
        songName: `Mehbooba Main tere... <br>
        <div class="subtitle">Ananya bhat</div>`,
        poster: "image/img 10.jpeg"
    },
    {

        id: 11,
        songName: `Aabaad Barbaad <br>
        <div class="subtitle">Arjit Singh</div>`,
        poster: "image/img 11.jpeg"
    },
    {

        id: 12,
        songName: `Raatan Lambiyan<br>
        <div class="subtitle">Jubin Nautiyal</div>`,
        poster: "image/img 12.jpeg"
    },
    {

        id: 13,
        songName: `Tere pyar main <br>
        <div class="subtitle">Arjit singh</div>`,
        poster: "image/img 13.jpeg"
    },
    {

        id: 14,
        songName: `Kalash chori <br>
        <div class="subtitle">Raga</div>`,
        poster: "image/img 14.jpeg"
    },
    {

        id: 15,
        songName: `Daku<br>
        <div class="subtitle">Chain Natran</div>`,
        poster: "image/img 15.jpeg"
    },
    {

        id: 16,
        songName: `Tere chehra <br>
        <div class="subtitle">Radhika Rao</div>`,
        poster: "image/img 16.jpeg"
    },
    {

        id: 17,
        songName: `Ek bar hi kiya .... <br>
        <div class="subtitle">Arijit singh</div>`,
        poster: "image/img 17.jpeg"
    },
    {

        id: 18,
        songName: `Show my tumbka <br>
        <div class="subtitle">Sunidhi chauhan</div>`,
        poster: "image/img 1.jpeg"
    },
    {

        id: 19,
        songName: `Meri Ashique <br>
        <div class="subtitle">Jubin Nautiyal</div>`,
        poster: "image/img 1.jpeg"
    },
    {

        id: 20,
        songName: `Pyaar hona na tha <br>
        <div class="subtitle">Jubin Nautiyal</div>`,
        poster: "image/img 1.jpeg"
    },
    
]

Array.from(document.getElementsByClassName('songItem')).forEach((e, i) =>{
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;

});

let masterPlay = document.getElementById("masterPlay");

masterPlay.addEventListener('click' , function(){

    if(music.paused  || music.currentTime <= 0){
        music.play();
        document.getElementById("wave").classList.add("active1");
        masterPlay.classList.remove("bi-play-fill");
        masterPlay.classList.add("bi-pause-fill");

    }else{
        music.pause();
        document.getElementById("wave").classList.remove("active1");
        masterPlay.classList.remove("bi-pause-fill");
        masterPlay.classList.add("bi-play-fill");

    }
});




document.getElementById('pop_song_left').addEventListener('click' ,function(){
    document.getElementsByClassName('popular_song')[0].scrollBy(-120 , 0 );
});
document.getElementById('pop_song_right').addEventListener('click' ,function(){
document.getElementsByClassName('popular_song')[0].scrollBy(120 , 0 );
});

document.getElementById('pop_song_left_2').addEventListener('click' ,function(){
document.getElementsByClassName('popular_artists')[0].scrollBy(-120 , 0 );
});
document.getElementById('pop_song_right_2').addEventListener('click' ,function(){
document.getElementsByClassName('popular_artists')[0].scrollBy(120 , 0 );
});

