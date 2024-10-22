// JAVASCRIPT FOR FLORALIA WEBSITE
// Pascua, Maria Niña Grace L.
// CS - 201 | 6WEBCS
// October 22, 2024

var video = document.getElementById("video");
var videoSource = document.getElementById("vid-src");
var trackSource = document.getElementById("desc");

function florVid() {
    videoSource.src = "floralia/flor_vid.mp4";
    trackSource.src = "floralia/flor_caption.vtt";
    video.style.display = "block";
    video.load(); 
}

function toggleMenu() {
    const links = document.querySelector(".nav__list-mobile");
    if (links.style.display === "flex") {
      links.style.display = "none";
    } else {
      links.style.display = "flex";
    }
  }
  
