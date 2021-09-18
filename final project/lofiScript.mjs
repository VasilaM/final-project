


let player, music_img;
let songName;
let songNumber;


let tracks=["ladyGPapa", "ladyGApp", "ladyGBad", "alone", "faded", "brunowheniwas"];
let trackNamesList=["Lady Gaga- Paparazzi", "Lady Gaga- Applause", "Lady Gaga- Bad Romance", "Alan Walker- Alone", "Alan Walker- Faded", "Bruno Mars- When I Was Your Man"]
let trackList;
trackList= document.getElementById("trackList")

for(let i=0;i<tracks.length;i++){

trackList.innerHTML+='<li class="list-group-item" style="background: #eee;"><a href="#" style="text-decoration: none; color: #20639b;" onclick="getTrack(\''+tracks[i]+'\','+i+')">'+trackNamesList[i]+'</a></li>';
}
function getTrack(track, idTrack) {
    let trackName=""+track+".mp3"
    let trackImage = ""+track+".jpeg";

    songNumber = document.getElementById('songNumber')
    songName = document.getElementById('songName')
    player = document.getElementById('player')
    music_img = document.getElementById('music_img')


    //set to DOM
    player.src= trackName
    music_img.innerHTML='<img src="'+trackImage+'" class="music_img" onError="onImgError()">'
    songName.innerHTML = trackNamesList[idTrack];
    songNumber.innerHTML = idTrack;
}

function prev() {
    let songN = songNumber.innerText
    let player = document.getElementById('player');
        if (songN>0) {
            player.src = ""+tracks[+songN+1]+".mp3";
            music_img.innerHTML='<img src="'+tracks[+songN-1]+'.jpeg" class="music_img">';
            songName.innerHTML ="Song Name - "+ trackNamesList[+songN-1];
            songNumber.innerText =+songN-1;
    } 
}

function next() {
    let songN = songNumber.innerText
    let player = document.getElementById('player');
        if (songN<tracks.length-1) {
            player.src = ""+tracks[+songN+1]+".mp3";
            music_img.innerHTML='<img src="'+tracks[+songN+1]+'.jpeg" class="music_img">';
            songName.innerHTML ="Song Name - "+ trackNamesList[+songN+1];
            songNumber.innerText =+songN+1;
    }  
}

function onImgError() {
    let music_img;
    music_img = document.getElementById('music_img')
    music_img.innerHTML='<h1 class="text-white" style="text-align: center; padding-top: 5%"> Image Not Found</h1>'

}