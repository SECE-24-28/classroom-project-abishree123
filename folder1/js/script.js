/*let a = 10;
let b = 20;
console.log(a + b);

console.log(a1);
var a1=20;
console.log(a1);*/

//functions
//1.Named Functions
//2.function declarations

/*function namedFunc(){
    console.log("Function called");
    console.log("Function called");
    console.log("Function called");
}
//function called or invoked
namedFunc();
 //funcExp();
//2.Function Expression
let funcExp=function(){
    console.log("Function Expression Called");
}
funcExp();

//3.Arrow Functions(ES6)
let arrow =() =>{
    console.log("Arrow Function called");
};
arrow();

//4.callback function and 5.IIFE(immediately invoked function expression)

(()=>{
    console.log("callback and iife called");
})();

const addTwonumbers =() =>{
    let num1=10;
    let num2=4;
    let num3=9;
    let sum=num1+num2+num3;
    console.log("the sum is ",sum);
}
addTwonumbers();
//parameters are indide bracket like (parameter1,parameter2,parameter3)
//argments are like let num1 = parameter1;

const addNumbers=(parameter1,parameter2) =>{
    console.log(parameter1,parameter2);
    let num1 = parameter1 || 100 ;//to avoid that undefined we are giving values here itself
    let num2 = parameter2 || 200;
    let sum1=num1+num2
    console.log("the sum is",sum1);
}
addNumbers(20,60);
addNumbers(1,2);
addNumbers();

//other operations
const subNumbers=(para1,para2) =>{
    console.log(para1,para2);
    let num1=para1 || 4;
    let num2=para2 || 3;
    let sub=num1-num2
    console.log("the sub is",sub);
}
subNumbers(3,2);
subNumbers();*/

//console.log("the sum is:${sum}",sum);//the sum of parameter1 value and parameter2 value

//in addition only 
let a =10;
let b="2";
console.log(a+b);  //output is 102  but -,*,/ is used operation will done
    
let a1=[1,2,3,"ass"];
let b1=[1,2,3,"ass"];
console.log(a1==b1);


let arr=[1,2,3,4,5,6];
console.log(arr);

//for loop
for(i=0;i<arr.length;i++){
    arr[i]=arr[i]+i;
}
//for each
let arr1=[1,2,3,4,5,6];
arr1.forEach((element,index) => {
    console.log(element,index);
});
let arr2=[1,2,3,4,5,6];
//let aa=arr.map((el,ind) =>{
    //         return el+ind;
//               });
let aa=arr.map((el,ind) => el+ind);
console.log(arr2);
console.log(aa);

let m=[1,2,3,4,5,6,7,8,9];
//filter:truthy values
let z=m.filter((el,index) =>{
    console.log(z);
})

//reduce:return single value
let k=a.reduce((acc,el,ind) =>{
    console.log(acc,el,ind);
  return acc+el;
},200);
console.log(c);