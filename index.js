function addPoints(team, score) {
let currentPoint=   parseInt(document.getElementById(team).innerText) + score        
document.getElementById(team).innerText = currentPoint
}

function reset(){    
document.getElementById("home").innerText = 0
document.getElementById("guest").innerText = 0
}