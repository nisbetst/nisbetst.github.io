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

function hamburger() {
  var x = document.getElementById("navbar");
  if (x.className === "mynav") {
    x.className += " responsive";
  }
  else {
    x.className = "mynav";
  }
}
