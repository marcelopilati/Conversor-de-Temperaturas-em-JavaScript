import input from 'readline-sync';

let conversor;
let contador = 1;
while(contador < 8){
let celsius;
let fahrenheit;
let kelvin;
let resultado;

console.log("Conversor de Temperaturas!! \n");
console.log("Escolha qual conversor deseja utilizar \n");
console.log("1 - Celsius para Fahrenheit\n");
console.log("2 - Fahrenheit para Celsius\n");
console.log("3 - Celsius para Kelvin\n");
console.log("4 - Kelvin para Celsius\n");
console.log("5 - Fahrenheit para Kelvin\n");
console.log("6 - Kelvin para Fahrenheit\n")
console.log("7 - Sair\n");

conversor = input.question("Conversor Escolhido: ");

if(conversor == 1){
    celsius = input.question("Insira a temperatura em Celsius: ");
    fahrenheit = (celsius * 1.8) + 32;
    console.log("A temperatura em Fahrenheit e: " +fahrenheit.toFixed(2) + "graus \n\n");
}
else if(conversor == 2){
    fahrenheit = input.question("Insira a temperatura em Fahrenheit: ");
    celsius = (fahrenheit - 32) / 1.8;
    console.log("A temperatura em Celsius e: "+ celsius.toFixed(2) + "graus \n\n");
}
else if(conversor == 3){
    celsius = input.question("Insira a temperatura em celsius: ");
    kelvin = Number(celsius) + Number(273);
    console.log("A temperatura em Kelvin e: " + kelvin + " graus \n\n");
}
else if(conversor == 4){
    kelvin = input.question("Insira a temperatura em Kelvin: ");
    celsius = kelvin - 273;
    console.log("A temperatura em Celsius e: "+ celsius.toFixed(2) + "graus \n\n");
}
else if(conversor == 5){
    fahrenheit = input.question("Insira a temperatura em Fahrenheit: ");
    kelvin = (((fahrenheit - 32) / 9) * 5) + 273;
    console.log("A temperatura em Kelvin e: " + kelvin.toFixed(2) + "graus \n\n");
}
else if(conversor == 6){
    kelvin = input.question("Insira a temperatura em Kelvin: ");
    fahrenheit = (((kelvin - 273) / 5) * 9) + 32;
    console.log("A temperatura em Fahrenheit e: " +fahrenheit.toFixed(2) + "graus \n\n");
}
else if(conversor == 7){
    break;
}
else{
    console.log("Opcao Invalida!! \n\n");
}
conversor++;
}