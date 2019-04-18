// Broadcast Bar and cookies on home page
var broadcast = document.querySelector('.broadcast');
var closeBroadcast = document.querySelector('.hide-broadcast-target');
var cookie = readCookie('hide_broadcast_bar');

if (cookie == "true") {
  broadcast.style.display = "none";
}

closeBroadcast.addEventListener('click', function(e) {
  if(cookie != "true") {
    broadcast.style.display = "none";
    createCookie('hide_broadcast_bar', "true", 7);
  }
  e.preventDefault();
});

function createCookie(name, value, days) {
  if(days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    var expires = "; expires=" + date.toGMTString();
  } else var expires = "";
  document.cookie = name + "=" + value + expires + "; path=/"
}

function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);

  }
  return null;
}

function eraseCookie(name) {
  createCookie(name, "", -1);
}

// Hamburger Menu
function hamburger() {
  var x = document.getElementById("navbar");
  if (x.className === "mynav") {
    x.className += " responsive";
  }
  else {
    x.className = "mynav";
  }
}

// Modal

function show_modal() {
  document.getElementById('myModal').style.display = "block";
}

// When the user clicks on <span> (x), close the modal
function hide_modal() {
  document.getElementById('myModal').style.display = "none";
}

var i = 0;
var txt = "My name is Stephen Nisbet and I am a UX researher, designer, and life enthusiast. These are the projects I've worked on and this is their story.";
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("home-txt").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
