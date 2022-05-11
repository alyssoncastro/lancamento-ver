function ex1() {
alert("Ah não quero fazer não! :(");

//var v0 = 20;
var v0 = document.getElementById('v0').value;
const g = 10; //acelaração gravitacional 10m/s²

tSubida = v0/g;
document.getElementById ('vem').innerHTML ="TEMPO DE SUBIDA = " + tSubida;
console.log ("TEMPO DE SUBIDA = " + tSubida)
}