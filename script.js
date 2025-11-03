const character = document.getElementById("character");
const obstacle = document.getElementById("obstacle");

function jump() {
    if (character.classList != "animate") {
        character.classList.add("animate");
    }
    setTimeout(function () {
        character.classList.remove("animate");
    }, 500);
}

document.addEventListener("click", jump);

const checkDead = setInterval(function() {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));
    if (obstacleLeft < 20 && obstacleLeft > -20 && characterTop >= 130) {
        obstacle.style.animation = "none";
        alert("Game Over. score: " + Math.floor(counter / 100));
    }
}, 10);