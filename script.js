var dragon = true;
var emerald4 = true;
var emerald3 = true;
var seed1 = true;
var seed2 = true;

function changeDead() {
  document.getElementById("silverfish").classList.add("none");
  document.getElementById("xp").classList.remove("none");
  document.getElementById("xp").classList.add("clickable");
  document.getElementById("silverfishsound").play();
  document.getElementById("xpsound").play();
}
function changeOpen() {
  window.location.href = "2strongholdo.html";
  document.getElementById("enderportalsound").play();
}
function changeEnd() {
  document.getElementById("teleportsound").play();
  window.location.href = "3portalc.html";
  document.getElementById("teleportsound").play();
}
function beatDragon() {
  if (dragon == false) {
    window.location.href = "4portalo.html";
  }
}
function nuhUh() {
  if ((dragon = true)) {
    document.getElementById("errsound").play();
  }
}
function changeDeath() {
  dragon = false;
  document.getElementById("dragon").classList.add("none");
  document.getElementById("xp").classList.remove("none");
  document.getElementById("enderdragonsound").play();
  document.getElementById("xpsound").play();
  document.getElementById("xp").classList.add("clickable");
}
function changeMad() {
  document.getElementById("endermen").classList.add("none");
  document.getElementById("mad").classList.remove("none");
  document.getElementById("mad").classList.add("clickable");
  document.getElementById("endermansound").play();
}
function teleportGateway() {
  document.getElementById("teleportsound").play();
  window.location.href = "5endgate.html";
  document.getElementById("teleportsound").play();
}
function changeTiny() {
  document.getElementById("chorussound").play();
  document.getElementById("chorusblock").classList.add("none");
  document.getElementById("chorus").classList.remove("none");
  document.getElementById("chorus").classList.add("clickable");
  document.getElementById("chorussound").play();
}
function endBoat() {
  window.location.href = "6endboat.html";
}
function backBeginning() {
  document.getElementById("teleportsound").play();
  window.location.href = "2strongholdo.html";
}
function goBack() {
  window.location.href = "4portalo.html";
}
function eleytraOut() {
  document.getElementById("itemframesound").play();
  document.body.style.backgroundImage = "url('images/eleytraout.jpg')";
}
function openChest() {
  document.getElementById("chestsound").play();
  window.location.href = "7chest.html";
  document.getElementById("chestsound").play();
}

function getEmeralds() {
  if (emerald4 == false && emerald3 == true) {
    document.getElementById("itemframesound").play();
    document.getElementById("emerald4").classList.remove("none");
    document.getElementById("empty7").classList.remove("none");
    document.getElementById("empty7").classList.remove("clickable");
  } else if (emerald3 == false && emerald4 == true) {
    document.getElementById("itemframesound").play();
    document.getElementById("emerald3").classList.remove("none");
    document.getElementById("empty2").classList.remove("none");
    document.getElementById("empty2").classList.remove("clickable");
  } else if (emerald4 == false && emerald3 == false) {
    document.getElementById("itemframesound").play();
    document.getElementById("emerald4").classList.add("none");
    document.getElementById("emerald3").classList.add("none");
    document.getElementById("empty2").classList.remove("none");
    document.getElementById("empty7").classList.remove("none");
    document.getElementById("emerald7").classList.remove("none");
    document.getElementById("empty7").classList.remove("clickable");
    document.getElementById("empty2").classList.remove("clickable");
  }
}

function emeraldFour() {
  emerald4 = false;
}
function emeraldThree() {
  emerald3 = false;
}

function seedOne() {
  seed1 = false;
}
function seedTwo() {
  seed2 = false;
}

function getSeeds() {
  if (seed1 == false && seed2 == true) {
    document.getElementById("itemframesound").play();
    document.getElementById("seed2").classList.remove("none");
    document.getElementById("empty4").classList.remove("none");
    document.getElementById("empty4").classList.remove("clickable");
  } else if (seed2 == false && seed1 == true) {
    document.getElementById("itemframesound").play();
    document.getElementById("seed2").classList.remove("none");
    document.getElementById("empty5").classList.remove("clickable");
  } else if (seed1 == false && seed2 == false) {
    document.getElementById("itemframesound").play();
    document.getElementById("seed2").classList.add("none");
    document.getElementById("empty4").classList.remove("none");
    document.getElementById("empty5").classList.remove("none");
    document.getElementById("seed4").classList.remove("none");
    document.getElementById("empty4").classList.remove("clickable");
    document.getElementById("empty5").classList.remove("clickable");
  }
}

function putInventory() {
  document.getElementById("itemframesound").play();
  document.getElementById("shovel").classList.remove("none");
  document.getElementById("empty1").classList.remove("none");
  document.getElementById("empty1").classList.remove("clickable");
}
function changeInventory() {
  document.getElementById("itemframesound").play();
  document.getElementById("boots").classList.remove("none");
  document.getElementById("empty3").classList.remove("none");
  document.getElementById("empty3").classList.remove("clickable");
}
function switchInventory() {
  document.getElementById("itemframesound").play();
  document.getElementById("plate").classList.remove("none");
  document.getElementById("empty6").classList.remove("none");
  document.getElementById("empty6").classList.remove("clickable");
}
function addInventory() {
  document.getElementById("itemframesound").play();
  document.getElementById("pants").classList.remove("none");
  document.getElementById("empty8").classList.remove("none");
  document.getElementById("empty8").classList.remove("clickable");
}
function popUp() {
  document.getElementById("popup").classList.remove("none");
  document.getElementById("ok").classList.remove("none");
}
function closeOk() {
  document.getElementById("popup").classList.add("none");
  document.getElementById("ok").classList.add("none");
}

const backgroundMusic = new Audio("sounds/wethands.mp3");

backgroundMusic.loop = true;

const playbackState = getCookie("musicPlaybackState");

if (playbackState === "playing") {
  const currentTime = parseFloat(getCookie("musicCurrentTime"));
  backgroundMusic.currentTime = currentTime;
  backgroundMusic.play();
} else {
  backgroundMusic.play();
}

window.addEventListener("beforeunload", () => {
  setCookie(
    "musicPlaybackState",
    backgroundMusic.paused ? "paused" : "playing"
  );
  setCookie("musicCurrentTime", backgroundMusic.currentTime);
});

function setCookie(name, value) {
  document.cookie = `${name}=${value}; path=/`;
}

function getCookie(name) {
  const match = document.cookie.match(new RegExp(`${name}=([^;]+)`));
  return match ? match[1] : null;
}
