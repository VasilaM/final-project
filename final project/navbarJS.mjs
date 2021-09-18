function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }

function gotoResources() {
    window.location.href = 'otherResources.html';
}

function gotoStudyTips() {
  window.location.href = 'studyTips.html';
}


function gotoMyAcc() {
    window.location.href = 'myAcc.html';
}

function gotoCalendar() {
  window.location.href = 'calendarOctob.html'
}

function gotoToDo() {
  window.location.href = 'to-do-list.html'
}

function gotoMusic(params) {
  window.location.href = 'studyMusic.html'
}

var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {

  var dropdownContent = this.nextElementSibling;
  if (dropdownContent.style.display === "none") {
  dropdownContent.style.display = "block";
  } else {
  dropdownContent.style.display = "none";
  }
  });
}