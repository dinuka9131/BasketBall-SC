let homeScore = document.getElementById("home-score")

let guestScore = document.getElementById("guest-score")

let newHomeScore = 0
let newGuestScore = 0

function plusOneHome(){
    newHomeScore = newHomeScore + 1
    homeScore.textContent = newHomeScore
}
function plusTwoHome(){
    newHomeScore = newHomeScore + 2
    homeScore.textContent = newHomeScore
}
function plusThreeHome(){
    newHomeScore = newHomeScore + 3
    homeScore.textContent = newHomeScore
}

function plusOneGuest(){
    newGuestScore = newGuestScore + 1
    guestScore.textContent = newGuestScore
}
function plusTwoGuest(){
    newGuestScore = newGuestScore + 2
    guestScore.textContent = newGuestScore
}
function plusThreeGuest(){
    newGuestScore = newGuestScore + 3
    guestScore.textContent = newGuestScore
}
function reset(){
    guestScore.textContent = 0
    homeScore.textContent = 0
    newGuestScore = 0
    newHomeScore = 0
}