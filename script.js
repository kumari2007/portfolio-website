// Typing effect
const text = "AIML Student | Full Stack Developer";
let i = 0;

function typeEffect() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeEffect, 50);
    }
}

document.getElementById("typing").innerHTML = "";
typeEffect();


// Form alert
const form = document.querySelector("form");

if (form) {
    form.addEventListener("submit", function() {
        alert("Message submitted successfully!");
    });
}