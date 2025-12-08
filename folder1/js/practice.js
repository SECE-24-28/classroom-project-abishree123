/*1Create Array From Arguments
Q1:
Create a function createArray that takes 3 arguments and returns an array containing those three values.
Run the function and print the result.
Dynamic Number of Arguments

Push Only Strings
Q2:
Create a function stringOnly that accepts any number of arguments, but returns an array containing only the arguments that are strings.
Create Array of Squares
Q3:
Create a function squareNumbers that accepts numbers as arguments and returns an array of each number squared.
Example:
squareNumbers(2, 3, 4) → [4, 9, 16]
Filter Even Numbers
Q4:
Create a function getEvenNumbers that accepts numbers as arguments and returns an array containing only even numbers.
Create Array of Names
Q5:
Create a function collectNames that accepts name arguments and returns an array of names in uppercase.
Example:
collectNames("sid", "raj") → ["SID", "RAJ"]
Convert Arguments Into Objects
Q6:
Create a function makeUser that takes 3 arguments: name, age, city.
Return an array containing 1 object like:
[
  { name: "Sid", age: 22, city: "Delhi" }
]
Mix values, return only numbers

Q7:
Create a function addTen that takes any number of arguments and returns an array where each number is increased by 10.
Function with default values
Q8:
Create a function createFruitArray where if no arguments are passed, it returns ["apple", "banana"].
If arguments are passed, return those arguments as an array.*/

//1 ques
let createArray = (a,b,c) =>{
    return [a,b,c];
}
let res=createArray(1,2,3);
console.log("the numbers are:",res);

//2 ques
const stringOnly=()=>{
let s="abc";
let t="xyz";
let u="3";
let v=5;
 let arr=[s,t,u,v];

let onlyStrings=arr.filter(el => typeof el ==="string");
console.log(onlyStrings);
}
stringOnly();

//3 ques
const squareNumbers = () => {
    let a = 2;
    let b = 3;
    let c = 4;
    let arr = [a, b, c];
    let squared = arr.map(el => el * el);
    console.log(squared);
}
squareNumbers();

//4 ques
const getEvenNum=() =>{
    let m =2;
    let n=4;
    let o=5;
    let arr2=[m,n,o];
    let evenNum= arr2.filter(el => el%2==0)
    console.log(evenNum);
}
getEvenNum();

//5 ques
const collectNames=() =>{
    let x="Abi";
    let y="abc";
    let z="xyz";
    let arr3=[x,y,z];
    let uppercase= arr3.map(el => el.toUpperCase());
    console.log(uppercase);
}
collectNames();

//6ques
 const makeUser=(name,age,city) =>{
    let obj={name,age,city};
    let arr1=[obj];
    console.log(arr1);
 }
 makeUser("sreeja","20","coimbatore");

 //7 ques
 const addTen = (...nums) => {
  let finalArr = nums
    .filter(el => typeof el === "number")
    .map(el => el + 10);
  console.log(finalArr);
};
addTen(5, "hi", 20, true, 30);

//8ques
const createFruitArray = (...fruits) => {
  let arr = fruits.length === 0 ? ["apple", "banana"] : fruits;
  console.log(arr);
};
createFruitArray();     // ["apple", "banana"]
createFruitArray("Mango", "Kiwi");  // ["Mango", "Kiwi"]

                              