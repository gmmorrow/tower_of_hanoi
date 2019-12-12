const disk4 = document.getElementById("d4")
const disk3 = document.getElementById("d3")
const disk2 = document.getElementById("d2")
const disk1 = document.getElementById("d1")
const tower1 = document.getElementById("tA")
const tower2 = document.getElementById("tB")
const tower3 = document.getElementById("tC")
let currentL = "string"
let hasWon = false





let compare = function (a, b) {
    //console.log(a.lastElementChild)
    let styleA = window.getComputedStyle(a)
    let styleB = window.getComputedStyle(b)
    let widthA = styleA.getPropertyValue("width")
    let widthB = styleB.getPropertyValue("width")

    widthA = parseInt(widthA)
    widthB = parseInt(widthB)
    if (widthA > widthB) {
        return true
    }
    else {
        return false
    }
}

let move = function () {
   let count = tower3.childElementCount
        //console.log("function start", currentL)
        if (currentL == "string") {
            let currentTower = event.currentTarget
            let lastDisk = currentTower.lastElementChild
            currentL = lastDisk
            currentL.classList.add("selected")
            //console.log(currentL, "3rd log")
        }
        else {
            if (event.currentTarget.lastElementChild) {
                //console.log(currentL, event.currentTarget.lastElementChild, "nth log")
                if (compare(currentL, event.currentTarget.lastElementChild)) {
                    alert("invalid move")
                    currentL.classList.remove("selected")
                    currentL = "string"
                    //console.log(currentL, event.currentTarget.lastElementChild, "4th log")
                }
                else {
                    event.currentTarget.appendChild(currentL)
                    currentL.classList.remove("selected")
                    currentL = "string"
                    //console.log(logcurrentL, event.currentTarget.lastElementChild, "5th log")
                }
            }
            else {
                event.currentTarget.appendChild(currentL)
                currentL.classList.remove("selected")
                currentL = "string"
                //console.log(currentL, event.currentTarget.lastElementChild, "5th log")
            }
        }
        
    }
    let winner = function (){
        move()
        let count = tower3.childElementCount 
        if(count == 4 && !hasWon){
            let div = document.getElementById("float")
            let content = document.createTextNode("Winner!")
            div.appendChild(content)
            hasWon=true
         }
    }
                       
tower1.onclick = move

tower2.onclick = move

tower3.onclick = winner
