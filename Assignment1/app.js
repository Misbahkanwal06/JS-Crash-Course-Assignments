// QUESTION #1 Write a JavaScript program that accepts two numbers in two prompts and
// displays the larger one in the console.

let num1 = prompt("Enter a number");
console.log(num1);
let num2 = prompt("Enter another number");
console.log(num2); 
if (num1 > num2 ) {
    console.log("num1 =  " + num1 +  "  is larger");
} else {
    console.log("num2 =  " + num2 +  " is larger"); }

// QUESTION #2 
//  Write a JavaScript conditional statement to find the sign of a number. 
// Display an alert box with the specified sign.
// Sample: 3  // Output : The sign is + .
//Sample: -5  //Output : The sign is - .

let num = +prompt("Enter any number");
if (num > 0){
    alert(num + " The sign is +")
} else{
    alert(num + " The sign is -")

}
// .QUESTION # 3 Write a JavaScript program that accepts five numbers in five prompts and
//displays the larger one in the console.

let n1 = +prompt("Enter first number");
let n2 = +prompt("Enter Second number ");
let n3 = +prompt("Enter third number ");
let n4 = +prompt("Enter  fourth number ");
let n5 = +prompt("Enter  fifth number ");

if (n1>n2 && n1>n3 && n1>n4 && n1>n5){
    console.log("n1" + n1 + " is larger")
}
else if (n2 >n1 && n2>n3 && n2>n4 && n2>n5){
    console.log(" n2 " + n2 + " is larger")
}else if (n3 >n1 && n3>n2 && n3>n4 && n3>n5){
    console.log(" n3 " + n3 + " is larger")
}else if (n4 >n1 && n4>n2 && n4>n3 && n4>n5){
    console.log(" n4 " + n4 + " is larger")
}else if (n5 >n1 && n5>n2 && n5>n3 && n5>n4){
    console.log(" n5 " + n5 + " is larger")
}

//QUESTION # 4
//Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it
//will check if the current number is odd or even, and display a message to the screen.
//Sample Output : "0 is even" "1 is odd"  "2 is even"

for (let i=0; i<=15; i++){
    if(i % 2 ===0 ){
        console.log(i + " is even");

    } else{
        console.log(i + " is odd");
    }
}

//QUESTION # 5
//Write a JavaScript program which computes the average marks of the following students Then, 
// this average is used to determine the corresponding grade.
//The grades are computed as follows :
//Range Grade
// <60 F
// <70 D
// <80 C
// <90 B
// <100 A

let marks = +prompt("Enter your average marks");
if (marks < 100 && marks >= 90){
    console.log("You got A grade");
}else if(marks < 90 && marks >= 80){
    console.log("You got B grade");
}else if(marks < 80 && marks >= 70){
    console.log("You got C grade");
}else if(marks < 70 && marks >= 60){
    console.log("You got D grade");
}else if(marks < 60 ){
    console.log("You got F grade");
} 

//QUESTION # 6 Write a JavaScript program which iterates the integers from 1 to 100. But for
//multiples of three print "Fizz" instead of the number and for the multiples of five
//print "Buzz". For numbers which are multiples of both three and five print
//"FizzBuzz".

for(let i=1; i<=100; i++){
    if (i % 3 !==0 ){
        console.log(i);
    } 
  if(i % 3 ===0){
        console.log("Fizz");
    }
 if ( i % 5 ===0){
        console.log("Buzz")
      }
 if (i % 3 ===0 && i % 5 ===0){
console.log("FizzBuzz");
      }
}

//QUESTION # 7
//Write a JavaScript program to construct the following pattern, using a nested for loop.
let star;
for(let i=0; i<=5 ;i++){
    for(let m=1; m<=i; m++) {
  star += " * ";
}
    console.log(star);
    star =" ";
} 

