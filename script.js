const welcomePopup = document.getElementById("welcome-popup");
const enterButton = document.getElementById("enter-button");

enterButton.addEventListener("click", function() {
    welcomePopup.style.display = "none";
});