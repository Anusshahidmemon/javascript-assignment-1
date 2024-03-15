// question 1
 let city = "karachi" //prompt("Enter the city name")

 if(city === "karachi"){
    document.write("Welcome to the city of Light","<br>")

 }
 else{
    document.write("Welcome to ",city,"<br>")
 }
 //question 2
 let gender = "male" //prompt("Enter your Gender");
 if(gender==="male"){
document.write("Good Morning Sir","<br>")
 }
 else if(gender ==="female"){
    document.write("Good Morning Mam","<br>")
}
else{
    document.write("you enter the wrong gender","<br>")
}
//question 3
let color = "red" // prompt("Enter the color of road traffic signal");
if(color ==="red"){
    document.write("Must Stop","<br>") 
}
else if(color === "green"){
    document.write("Ready to move","<br>") 
}
else{
    document.write("This Light is not available for traffic signal","<br>") 
}
//question 4
let fuel = 0.24 //+prompt("How much fuel remaining in your Car");
if (fuel < 0.25){
    document.write("plz refill the fuel in your car","<br>")
}  
else{
    document.write("Make Sure the fuel is not less then 0.25 liter","<br>")
}  
// question 5

let a =4;
if(++a ===5){
   // alert("give condition for variable a is true")//true
}
let b = 82;
if(b++ ===83){
  //  alert("give condition for variable b is true")//false beacuse first print then update
   
}

let c =12;
if(c++ ===13){
    alert("condition 1 for variable c is true")//false
}
if(c===13){
  //  alert("condition 2 for variable c is true")//true
}
if(++c < 14){
    alert("condition 3 for variable c is true")//false
}
if(c===14){
   // alert("condition 4 for variable c is true")//true
}
// question 6
let Subject1 = 100 //+prompt("Enter Your Subject 1 Mark");
let Subject2 = 100 //+prompt("Enter Your Subject 2 Mark");
let Subject3 = 100 //+prompt("Enter Your Subject 3 Mark");
let subject = Subject1+Subject2+Subject3
let totalMark = 300
let percen = (subject*100)/totalMark
document.write(totalMark,"<br>");
document.write(subject,"<br>")
document.write(percen,"%","<br>")
if(percen >= 80){
    document.write("Grade A","<br>");
    document.write("Remarks:Weldone","<br>");
}
else if(percen>= 70){
    document.write("Grade B","<br>");
    document.write("Remarks:You need to Improve","<br>");
}
else if(percen>100){
    document.write("YOu enter the wrong marks","<br>")
}
else{
    document.write(`Fail <br>`);
    document.write("work hard then you will pass","<br>")
}

// question 7
 let secretNum = 8
 let guessNum = 9//+prompt("Guees the seceret Num from 1 to 10")
 if(secretNum===guessNum){
    document.write("Bingo!Correct the answer","<br>")
}
else if(secretNum+1===guessNum){
    document.write("close ennough to the correct answer","<br>")

}
else{
    document.write("you enter the wrong number","<br>")
}
// question 8
let num = 18//+prompt("enter the number")
if(num%3 ===0){
    document.write("this number is divided by 3","<br>")
}
else{
    document.write("this number is not divided by 3","<br>")
}
//question 9
let numCheck =3 //+prompt("enter the number")
if (numCheck%2===0){
    document.write("even","<br>")
}
else(
    document.write("odd","<br>")
)
let T = 45//+prompt("Plz Enter the Today temperature")
if(T>40){
    document.write("it is too hot outside","<br>")
}
else if(T>30){
    document.write("The Weather Today is normal","<br>")
}
else if(T>20){
    document.write("Today Weather is cold","<br>")
}
else if(T>10){
    document.write("OMG!Today Weather is so cool","<br>")
}
else{
    document.write("weather is not good for Health","<br>")
}
//question 11 
let firstNum = +prompt("Enter any first Number")
let secondNum = +prompt("Enter any second Number")
let operators = prompt("Enter the Operation","+,-,*,/,%")
if(operators =="+") {
    document.write(firstNum+secondNum,"<br>")
}else if(operators =="-") {
    document.write(firstNum-secondNum,"<br>")
}
else if(operators =="*") {
    document.write(firstNum*secondNum,"<br>")
}
else if(operators =="/") {
    document.write(firstNum/secondNum,"<br>")
}
else if(operators =="%") {
    document.write(firstNum%secondNum,"<br>")
}
else{
    document.write("you enter the wrong operators")
}