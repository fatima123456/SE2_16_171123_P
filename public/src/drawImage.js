//funzione che dovrebbe inserire l'immagine all'interno del canvas, però c'è un errore perhè non lo fa
window.onload = function() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var img = document.getElementById("ItaliaImage");
    ctx.drawImage(img, 0, 0,400,500);
};