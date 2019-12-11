const disk4 = document.getElementById("d4");
const disk3 = document.getElementById("d3");
const disk2 = document.getElementById("d2");
const disk1 = document.getElementById("d1");
const tower1 = document.getElementById("tA");
const tower2 = document.getElementById("tB");
const tower3 = document.getElementById("tC");
let currentL = "string";

let compare = function(a, b) {
  console.log(a.lastElementChild);
  let styleA = window.getComputedStyle(a);
  let styleB = window.getComputedStyle(b);
  let widthA = styleA.getPropertyValue("width");
  let widthB = styleB.getPropertyValue("width");

  widthA = parseInt(widthA);
  widthB = parseInt(widthB);
  if (widthA > widthB) {
    return true;
  } else {
    return false;
  }
};

let move = function() {
  //let target = event.currentTarget.lastElementChild
  console.log("function start", currentL);
  if (currentL == "string") {
    let currentTower = event.currentTarget;
    let lastDisk = currentTower.lastElementChild;
    currentL = lastDisk;
    currentL.classList.add("selected");
    console.log(currentL, "3rd log");
  } else {
    if (event.currentTarget.lastElementChild) {
      console.log(currentL, event.currentTarget.lastElementChild, "nth log");
      if (compare(currentL, event.currentTarget.lastElementChild)) {
        alert("invalid move");
        currentL.classList.remove("selected");
        currentL = "string";
        console.log(currentL, event.currentTarget.lastElementChild, "4th log");
      } else {
        event.currentTarget.appendChild(currentL);
        currentL.classList.remove("selected");
        currentL = "string";
        console.log(
          logcurrentL,
          event.currentTarget.lastElementChild,
          "5th log"
        );
      }
    } else {
      event.currentTarget.appendChild(currentL);
      currentL.classList.remove("selected");
      currentL = "string";
      console.log(currentL, event.currentTarget.lastElementChild, "5th log");
    }
  }
};

tower1.onclick = move;

tower2.onclick = move;

tower3.onclick = move;

/*
1. Display Towers
    a. Each tower is a flex container, column reverse 
    b. 
2. Provide a way to move disks
    a. first click pick source tower 
    b. second click picks destination tower and tries to move top disk of 
        source tower to destination tower.
    c. For move to be allowed, top disc on destination tower must be smaller
        than disc on source tower.
3. Win Condition
    a. Towers A and B are empty 


    let tb = document.querySelector(#tB)
    tb.childElement 
*/
