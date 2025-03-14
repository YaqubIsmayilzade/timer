let sec = document.getElementById("timer");
let millisec = document.getElementById("millisec");
let prev = document.getElementById("prev");

let k = 0;
let time;
let counter;
let previous;
let prevText;
let first = true;

window.addEventListener("mousedown", mousedown);
window.addEventListener("mouseup", mouseup);
window.addEventListener("touchstart", mousedown);
window.addEventListener("touchend", mouseup);

function mousedown() {
  sec.style.color = "red";
  millisec.style.color = "red";

  time = setTimeout(() => {
    sec.style.color = "oklch(0.627 0.194 149.214)";
    millisec.style.color = "oklch(0.627 0.194 149.214)";
    k = 1;
    previous = `${sec.textContent}${millisec.textContent}`;
    sec.textContent = 0;
    millisec.textContent = ".00";
  }, 1000);

  if (k == 1) {
    clearInterval(counter);
    clearInterval(millicounter);
    k = 0;

    prevText = (previous - `${sec.textContent}${millisec.textContent}`).toFixed(
      2
    );
    if (!first) {
      if (prevText < 0) {
        prev.style.color = "red";
        prev.textContent = `(${prevText})`;
      } else {
        prev.style.color = "green";
        prev.textContent = `(+${prevText})`;
      }
    } else {
      first = false;
    }
  }
}
function mouseup() {
  clearTimeout(time);

  sec.style.color = "black";
  millisec.style.color = "black";

  if (k == 1) {
    count();
  }
}
function count() {
  let count = 0;
  let millicount = 0;
  counter = setInterval(() => {
    count++;
    sec.innerHTML = count;
  }, 1000);
  millicounter = setInterval(() => {
    if (millicount == 9) {
      millicount = 0;
    }
    millicount++;
    millisec.innerHTML = `.${millicount}`;
  }, 100);
}
