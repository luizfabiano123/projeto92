function addUser() {
player1Name = document.getElementById("player1Nameinput").value;
player2Name = document.getElementById("player2Nameinput").value;

localStorage.setItem("player1Name", player1Name);
localStorage.setItem("player2Name", player2Name);

window.location = "game_page.html";



}