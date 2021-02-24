function initializeTimer() {
  var endDate = new Date(2021, 1, 25, 14);

  var currentDate = new Date();
  var seconds = (endDate - currentDate) / 1000;
  if (seconds > 0) {
    var minutes = seconds / 59;
    var hours = minutes / 59;
    var days = hours / 24;
    minutes = (hours - Math.floor(hours)) * 59;
    days = Math.floor(days);
    hours = Math.floor(hours) - days * 24;

    seconds = Math.floor((minutes - Math.floor(minutes)) * 59);
    minutes = Math.floor(minutes);

    setTimePage(days, hours, minutes, seconds);

    function secOut() {
      if (seconds == 0) {
        if (minutes == 0) {
          if (hours == 0) {
            if (days == 0) {
              showMessage(timerId);
            } else {
              days--;
              hours = 24;
              minutes = 59;
              seconds = 59;
            }
          } else {
            hours--;
            minutes = 59;
            seconds = 59;
          }
        } else {
          minutes--;
          seconds = 59;
        }
      } else {
        seconds--;
      }
      setTimePage(days, hours, minutes, seconds);
    }
    timerId = setInterval(secOut, 1000);
  } else {
    alert("Установленая дата уже прошла");
  }
}

window.onload = function () {
  initializeTimer();
  window.scrollTo(0, 0);
  const mediaQuery = window.matchMedia("(max-width: 920px)");
  if (mediaQuery.matches) {
    document.getElementsByClassName("nextEvent__time")[0].remove();
  }
};
function setTimePage(d, h, m, s) {
  var days = document.getElementById("days");
  var hours = document.getElementById("hours");
  var minutes = document.getElementById("minutes");

  days.innerHTML = d;
  hours.innerHTML = h;
  minutes.innerHTML = m;
}

let nav_img = document.getElementById("mobil__menu");
let nav = document.getElementsByClassName("mobil__menu__nav");
let topPage__nav = document.getElementById("topPage");
let eventPage__nav = document.getElementById("eventPage");
let galleryPage__nav = document.getElementById("galleryPage");
let partnersPage__nav = document.getElementById("partnersPage");
let feedack__nav = document.getElementById("feedback__nav");
let topPage = document.getElementsByClassName("main");
let eventPage = document.getElementsByClassName("nextEvent");
let galleryPage = document.getElementsByClassName("gallery");
let partnersPage = document.getElementsByClassName("partners");
let bePartnersPage = document.getElementsByClassName("bePartners");
let feedbackPage = document.getElementsByClassName("feedback");
let timer = document.getElementById("timer");

nav_img.onclick = function () {
  nav[0].classList.toggle("mobil__menu__active");
};

topPage__nav.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

eventPage__nav.onclick = function () {
  let distance = topPage[0].offsetHeight + timer.offsetHeight;
  window.scrollTo({
    top: distance,
    behavior: "smooth",
  });
};

galleryPage__nav.onclick = function () {
  let distance = topPage[0].offsetHeight + eventPage[0].offsetHeight;
  window.scrollTo({
    top: distance,
    behavior: "smooth",
  });
};

partnersPage__nav.onclick = function () {
  let distance =
    topPage[0].offsetHeight +
    eventPage[0].offsetHeight +
    galleryPage[0].offsetHeight;
  window.scrollTo({
    top: distance,
    behavior: "smooth",
  });
};

feedack__nav.onclick = function () {
  let distance =
    topPage[0].offsetHeight +
    eventPage[0].offsetHeight +
    galleryPage[0].offsetHeight +
    bePartnersPage[0].offsetHeight +
    feedbackPage[0].offsetHeight;
  window.scrollTo({
    top: distance,
    behavior: "smooth",
  });
};

document.getElementById("btnUP").onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
document.addEventListener("scroll", () => {
  if (
    document.getElementsByClassName("main")[0].getBoundingClientRect().bottom <
    50
  ) {
    document.getElementsByClassName("btnUP")[0].classList.add("btnUPActive");
    document.getElementsByClassName("btnUP")[0].classList.remove("unActive");
  } else {
    document.getElementsByClassName("btnUP")[0].classList.add("unActive");
    document.getElementsByClassName("btnUP")[0].classList.remove("btnUPActive");
  }
});
