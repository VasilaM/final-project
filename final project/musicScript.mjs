var pianoPlay = document.getElementById('pianoPlay')
var lofiPlay = document.getElementById('lofiPlay')
var naturePlay = document.getElementById('naturePlay')

function togglePiano(){
    if(pianoPlay.style.display == 'block'){
      pianoPlay.style.display = 'none'; 
    } else {
      pianoPlay.style.display = 'block'; 
    }
  }

  function toggleLofi(){
    if(lofiPlay.style.display == 'block'){
      lofiPlay.style.display = 'none'; 
    } else {
      lofiPlay.style.display = 'block'; 
    }
  }

  function toggleNature(){
    if(naturePlay.style.display == 'block'){
      naturePlay.style.display = 'none'; 
    } else {
      naturePlay.style.display = 'block'; 
    }
  }

  function toggleStrings(){
    if(stringPlay.style.display == 'block'){
      stringPlay.style.display = 'none'; 
    } else {
      stringPlay.style.display = 'block'; 
    }
  }