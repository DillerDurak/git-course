
let count = 0
let saveEl = document.getElementById('save-el')
let countEl = document.getElementById("count-el")
let dasher

function increment(){
    if (document.getElementById('error')){
        document.getElementById('error').textContent = "Please tre again!"
        return alert('Something went wrong, please try again!')
    }
    count += 1
    countEl.textContent = count
}


function save(){
    if (count>0){
        alert("Your best score " + count + " was saved")
        dasher = count + ' - '
        saveEl.textContent += dasher;
        count = 0
        countEl.textContent = 0
    }
    else{
        return alert('Something went wrong, please try again!')
    }
}
