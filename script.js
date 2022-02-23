// document.getElementById("count-el").innerText=6

let count = 0
let bestScore

function increment(){
    console.log("Button was clicked!")
    count += 1
    document.getElementById("count-el").innerText = count
}


function save(){
    bestScore= count
    alert("Your best score " + count + " was saved")
}

function reset(){
    if (count>bestScore){
        save()
    }
    alert("Your score is " + count + " and the best score is " + bestScore)
    count = 0
    document.getElementById("count-el").innerText = count
}

