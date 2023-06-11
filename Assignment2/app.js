//QUESTION #1: Write a function that creates a closure and returns a function that can add
// a specific number to any number passed to it. For example, if the closure is
// created with 5, the returned function should add 5 to any number passed
// to it.

function closure(a) {
    console.log("a =  ", a);
    return function (b) {
        console.log("b = ", b);

        console.log(" Sum =  ", a + b);
    }
}
let returned = closure(5);
returned(6);

// QUESTION #2:. Write a recursive function that searches an array for a specific value. The
// function should return true if the value is found, and false if it is not. You
// can assume that the array is not nested.

let arr = [1,3,4,2,5,6,7,9,8,10];
function find(aaray,num){
    if (num === arr[0]){
        return true;
    }else if (arr.length === 0){
        return false;
    }else {
        
        return find(arr.splice(1),num);
        
    }
}
console.log(find(arr, 5));


// QUESTION #3: Write a function that adds a new paragraph element to the bottom of an
// HTML document. The function should take a string argument that will be
// used as the text content of the new paragraph element.

function dom(str){
  let m = str;
let body = document.querySelector("body");
 body.innerHTML = "<p> </p>";
let p = document.querySelector("p") ;
p .innerText = " " + m;

}
 dom("Hello world");
 
 
    
// QUESTION #4: Write a function that adds a new list item to an unordered list in an HTML
// document. The function should take a string argument that will be used as
// the text content of the new list item.

function dom2(a,b,c) {
    let s = a;
    let list = document.getElementById("ide");
    list.innerHTML = " <li></li>";
    let items = document.querySelector("li");
    items.innerText = " " + s;
    
} 
dom2("apple","mango","banana");


//QUESTION #5 : Write a function that changes the background color of an HTML element.
// The function should take two arguments: the first argument is a reference
// to the HTML element, and the second argument is a string representing
// the new background color

function change ( h,i) {
let heading = document.querySelector("#"+h);
heading.style.backgroundColor = i;
}
change("h","#868");


//QUESTION #6: Write a function that saves an object to localStorage. The function should
// take two arguments: the first argument is a string representing the key to
// use for storing the object, and the second argument is the object to store.

let object = {
    name:"misbah",
    course:"Javascript",
    assignment: 2
}
 function data(key, value){
   localStorage.setItem(key,value);
 }
 let stringify = JSON.stringify(object);

data("object",stringify);


//QUESTION#7:Write a function that retrieves an object from localStorage. The function
// should take one argument, which is a string representing the key used to
// store the object. The function should return the object.

let object2 = {
    name:"misbah kanwal",
        course:"Javascript",
        assignment: 2
        
}
 function data(key){
  return  localStorage.getItem(key);
 }
 let stringify2 = JSON.stringify(object2);
 localStorage.setItem("object2", stringify2);
let returned2 = data("object2");
console.log(returned2);




// 8. Write a function that takes an object and saves each property to
// localStorage using the property name as the key and the property value as
// the value. The function should also retrieve the object from localStorage
// and return it as a new object.

let object3 ={
    name:"kanwal",
    course:"Javascript",
    assignment: 2,
    sir: "Ishaq Bhojani"
}
function func(key,value){
 return localStorage.setItem(key,value);
}
func("name", "misbah kanwal");
func("course", "Javascript");
func("assignment", "2");












