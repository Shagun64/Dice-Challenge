var player1 = Math.floor((Math.random() * 6) + 1);
var player2 = Math.floor((Math.random() * 6) + 1);

switch (player1) {
    case 1:
        document.querySelector(".img1").setAttribute("src", "./images/dice1.png");
        break;
    case 2:
        document.querySelector(".img1").setAttribute("src", "./images/dice2.png");
        break;
    case 3:
        document.querySelector(".img1").setAttribute("src", "./images/dice3.png");
        break;
    case 4:
        document.querySelector(".img1").setAttribute("src", "./images/dice4.png");
        break;
    case 5:
        document.querySelector(".img1").setAttribute("src", "./images/dice5.png");
        break;
    case 6:
        document.querySelector(".img1").setAttribute("src", "./images/dice6.png");
        break;
    default:
        alert("Number is too big");
}
switch (player2) {
    case 1:
        document.querySelector(".img2").setAttribute("src", "./images/dice1.png");
        break;
    case 2:
        document.querySelector(".img2").setAttribute("src", "./images/dice2.png");
        break;
    case 3:
        document.querySelector(".img2").setAttribute("src", "./images/dice3.png");
        break;
    case 4:
        document.querySelector(".img2").setAttribute("src", "./images/dice4.png");
        break;
    case 5:
        document.querySelector(".img2").setAttribute("src", "./images/dice5.png");
        break;
    case 6:
        document.querySelector(".img2").setAttribute("src", "./images/dice6.png");
        break;
    default:
        alert("Number is too big");
}
if(player1>player2){
    document.querySelector("h1").innerHTML="🚩Player 1 Win";
}else if(player1<player2){
    document.querySelector("h1").innerHTML="Player 2 Win 🚩";
}else{
    document.querySelector("h1").innerHTML="Draw";
}