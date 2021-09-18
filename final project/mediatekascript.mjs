

// variables for all functions
let player, music_img;
let songName;
let songNumber;


let tracks=["piano1", "piano2", "pianodaisies", "piano4", "piano5"];
let trackNamesList=["Piano Concerto 1", "Piano Concerto 2", "Piano Concerto- Daisies", "Piano Concerto 4", "Piano Concerto 5"]
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

//lofi
let player1, music_img1;
let songName1;
let songNumber1;


let tracks1=["beat1", "beat2", "beat3",];
let trackNamesList1=["Beat 1", "Beat 2", "Beat 3"]
let trackList1;


trackList1= document.getElementById("trackList1")

for(let i=0;i<tracks1.length;i++){

trackList1.innerHTML+='<li class="list-group-item" style="background: #eee;"><a href="#" style="text-decoration: none; color: #20639b;" onclick="getTrack(\''+tracks1[i]+'\','+i+')">'+trackNamesList1[i]+'</a></li>';
}
function getTrack(track1, idTrack1) {
    let trackName1=""+track1+".mp3"
    let trackImage1 = ""+track1+".jpeg";

    songNumber1 = document.getElementById('songNumber1')
    songName1 = document.getElementById('songName1')
    player1 = document.getElementById('player1')
    music_img1 = document.getElementById('music_img1')


    //set to DOM
    player1.src= trackName1
    music_img1.innerHTML='<img src="'+trackImage1+'" class="music_img1" onError="onImgError()">'
    songName1.innerHTML = trackNamesList1[idTrack1];
    songNumber1.innerHTML = idTrack1;
}

function prev() {
    let songN1 = songNumber1.innerText
    let player1 = document1.getElementById('player1');
        if (songN1>0) {
            player1.src = ""+tracks1[+songN1+1]+".mp3";
            music_img1.innerHTML='<img src="'+tracks1[+songN1-1]+'.jpeg" class="music_img1">';
            songName1.innerHTML ="Song Name - "+ trackNamesList1[+songN1-1];
            songNumber1.innerText =+songN1-1;
    } 
}

function next() {
    let songN1 = songNumber1.innerText
    let player1 = document.getElementById('player1');
        if (songN1<tracks1.length-1) {
            player1.src = ""+tracks1[+songN1+1]+".mp3";
            music_img1.innerHTML='<img src="'+tracks1[+songN1+1]+'.jpeg" class="music_img1">';
            songName1.innerHTML ="Song Name - "+ trackNamesList1[+songN1+1];
            songNumber1.innerText =+songN1+1;
    }  
}

function onImgError() {
    let music_img1;
    music_img1 = document.getElementById('music_img1')
    music_img1.innerHTML='<h1 class="text-white" style="text-align: center; padding-top: 5%"> Image Not Found</h1>'

}



// nature
let player2, music_img2;
let songName2;
let songNumber2;


let tracks2=["nature1", "nature2", "nature3"];
let trackNamesList2=["Soothing Nature", "Relaxing Nature", "Calming Nature"]
let trackList2;


trackList2= document.getElementById("trackList2")

for(let i=0;i<tracks2.length;i++){

trackList2.innerHTML+='<li class="list-group-item" style="background: #eee;"><a href="#" style="text-decoration: none; color: #20639b;" onclick="getTrack(\''+tracks2[i]+'\','+i+')">'+trackNamesList2[i]+'</a></li>';
}
function getTrack(track2, idTrack2) {
    let trackName2 =""+track2+".mp3"
    let trackImage2 = ""+track2+".jpeg";

    songNumber2 = document.getElementById('songNumber2')
    songName2 = document.getElementById('songName2')
    player2 = document.getElementById('player2')
    music_img2 = document.getElementById('music_img2')


    //set to DOM
    player2.src= trackName2
    music_img2.innerHTML='<img src="'+trackImage2+'" class="music_img2" onError="onImgError()">'
    songName2.innerHTML = trackNamesList2[idTrack2];
    songNumber2.innerHTML = idTrack2;
}

function prev() {
    let songN2 = songNumber2.innerText
    let player2 = document2.getElementById('player2');
        if (songN2>0) {
            player2.src = ""+tracks2[+songN2+1]+".mp3";
            music_img2.innerHTML='<img src="'+tracks2[+songN2-1]+'.jpeg" class="music_img2">';
            songName2.innerHTML ="Song Name - "+ trackNamesList2[+songN2-1];
            songNumber2.innerText =+songN2-1;
    } 
}

function next() {
    let songN2 = songNumber2.innerText
    let player2 = document.getElementById('player2');
        if (songN2<tracks2.length-1) {
            player2.src = ""+tracks2[+songN2+1]+".mp3";
            music_img2.innerHTML='<img src="'+tracks2[+songN2+1]+'.jpeg" class="music_img2">';
            songName2.innerHTML ="Song Name - "+ trackNamesList2[+songN2+1];
            songNumber2.innerText =+songN2+1;
    }  
}

function onImgError() {
    let music_img2;
    music_img2 = document.getElementById('music_img2')
    music_img2.innerHTML='<h1 class="text-white" style="text-align: center; padding-top: 5%"> Image Not Found</h1>'

}


// string instruments
let player3, music_img3;
let songName3;
let songNumber3;


let tracks3=["string1", "string2", "string2"];
let trackNamesList3=["String Concerto #1", "String Concerto #2", "String Concerto #3",]
let trackList3;


trackList3= document.getElementById("trackList3")

for(let i=0;i<tracks3.length;i++){

trackList3.innerHTML+='<li class="list-group-item" style="background: #eee;"><a href="#" style="text-decoration: none; color: #20639b;" onclick="getTrack(\''+tracks3[i]+'\','+i+')">'+trackNamesList3[i]+'</a></li>';
}
function getTrack(track3, idTrack3) {
    let trackName3 =""+track3+".mp3"
    let trackImage3 = ""+track3+".jpeg";

    songNumber3 = document.getElementById('songNumber3')
    songName3 = document.getElementById('songName3')
    player3 = document.getElementById('player3')
    music_img3 = document.getElementById('music_img3')


    //set to DOM
    player3.src= trackName3
    music_img3.innerHTML='<img src="'+trackImage3+'" class="music_img3" onError="onImgError()">'
    songName3.innerHTML = trackNamesList3[idTrack3];
    songNumber3.innerHTML = idTrack3;
}

function prev() {
    let songN3 = songNumber3.innerText
    let player3 = document.getElementById('player3');
        if (songN3>0) {
            player3.src = ""+tracks3[+songN3+1]+".mp3";
            music_img3.innerHTML='<img src="'+tracks3[+songN3-1]+'.jpeg" class="music_img3">';
            songName3.innerHTML ="Song Name - "+ trackNamesList3[+songN3-1];
            songNumber3.innerText =+songN3-1;
    } 
}

function next() {
    let songN3 = songNumber3.innerText
    let player3 = document.getElementById('player3');
        if (songN3<tracks3.length-1) {
            player3.src = ""+tracks3[+songN3+1]+".mp3";
            music_img3.innerHTML='<img src="'+tracks3[+songN3+1]+'.jpeg" class="music_img3">';
            songName3.innerHTML ="Song Name - "+ trackNamesList3[+songN3+1];
            songNumber3.innerText =+songN3+1;
    }  
}

function onImgError() {
    let music_img3;
    music_img3 = document.getElementById('music_img3')
    music_img3.innerHTML='<h1 class="text-white" style="text-align: center; padding-top: 5%"> Image Not Found</h1>'

}


