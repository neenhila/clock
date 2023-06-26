import { getRandomHex, getRandomNum } from "./funcs.js";
let yelkovan = document.getElementById("yelkovan");
let akrep = document.getElementById("akrep");
let seconds = document.getElementById("secs");

let time = new Date(Date.now());
let hours = time.getHours();
let mins = time.getMinutes();
let secs = time.getSeconds();

if (hours > 12) {
  hours = hours - 12;
}

let to = 0;
setInterval(() => {
  hours == 0 ? (akrep.style.rotate = `1deg`) : (akrep.style.rotate = `${hours * 31}deg`);
  mins == 0 ? (yelkovan.style.rotate = `1deg`) : (yelkovan.style.rotate = `${mins * 5.5}deg`);
  secs == 0 ? (seconds.style.rotate = `1deg`) : (seconds.style.rotate = `${secs * 6.2}deg`);
  if (secs == 59) {
    secs = 0;
    if (mins == 59) {
      mins = 0;
      if (hours == 11) {
        hours = 0;
      } else {
        hours++;
      }
    } else {
      mins++;
    }
  } else {
    secs++;
  }
to > 10 ? window.location.href = "https://www.instagram.com/alihanakg" : to++;
}, 1000);
