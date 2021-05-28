// Gioco dei dadi Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. 
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

var numero1 = Math.floor((Math.random() * 6) + 1);
var numero2 = Math.floor((Math.random() * 6) + 1);

document.getElementById('numero1').innerHTML = numero1;
document.getElementById('numero2').innerHTML = numero2;



if(numero1 > numero2){
    document.getElementById('vincitore').innerHTML = 'Giocatore 1 vince';
} else if(numero1 == numero2){
    document.getElementById('vincitore').innerHTML = 'Pareggio!';
} else{
    document.getElementById('vincitore').innerHTML = 'Giocatore 2 vince';
}