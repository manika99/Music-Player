console.log("Welcome to Spotify");

// Initialize the variables
let songIndex = 0;
let audioElement = new Audio('./songs/Raatan Lambiyan(PagalWorld.com.se).mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Night Changes", filePath: "songs/Night-Changes(PagalWorld).mp3", coverPath: "covers/Night Changes.jpeg"},
    {songName: "Heat Waves", filePath: "songs/Heat-Waves(PagalWorld).mp3", coverPath: "covers/heat-waves.webp"},
    {songName: "Dandelions", filePath: "songs/Dandelions(PagalWorld).mp3", coverPath: "covers/Dandelions.jpeg"},
    {songName: "Peaches", filePath: "songs/_Peaches(PagalWorld.com.se).mp3", coverPath: "covers/Peaches.jpg"},
    {songName: "We Rollin", filePath: "songs/We Rollin - Shubh.mp3", coverPath: "covers/We-rollin.jpg"},
    {songName: "Perfect", filePath: "songs/Perfect.mp3", coverPath: "covers/Perfect-Lyrics-150x150.webp"},
    {songName: "Raatan Lambiyan", filePath: "songs/Raatan Lambiyan(PagalWorld.com.se).mp3", coverPath: "covers/Raataan Lambiyan.jpeg"},
    {songName: "Victory(Instrumental) Lakshya", filePath: "songs/128-Victory (Instrumental) - Lakshya 128 Kbps.mp3", coverPath: "covers/Victory (Instrumental) - Lakshya.jpg"},
    {songName: "There's nothing holding me back", filePath: "songs/Theres_Nothing_Holding_Me_Back.mp3", coverPath: "covers/There's nothing holdin' me back.jpg"}
]

songItems.forEach((element, i )=>{
    console.log(element, i)
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
})

// audioElement.play();

//Handle play/pause click
masterPlay.addEventListener('click', () =>{
    if(audioElement.paused || audioElement.currentTime <=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;  
    }
})

//listen to events
audioElement.addEventListener('timeupdate', ()=>{
    //Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value*audioElement.duration/100;
})

