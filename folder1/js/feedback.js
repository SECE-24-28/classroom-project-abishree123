/*//Tag selector
let heading1= document.getElementsByTagName("h1")[0];
//html collection array
console.log(heading1);


//class selector
let heading2=document.getElementsByClassName("a");
//html collection array
console.log(heading2);
//console.log(cl[0]);


//3.ID Selector
let idd=document.getElementById("b");
//it will return Single element and the first element
console.log(idd);



//4.QuerySelector (it works on all the three selectors)
let sel=document.querySelector("#b");
//it will return single elemnt and the first element
console.log(sel);



//5.QuerySelector All
let selall=document.querySelectorAll("#b");
//nodeList array
console.log(selall);*/


/*//read and write operations
let head=document.querySelector("p");
//Read Operation
console.log(head.textContent);



//write operation
head.textContent="This is the new paragraph content.";

let div=document.querySelector("div");
div.innerHTML="<p>Hello From Para</p>";
//div.textContent="<p class="a">Hello From Para</p>"
console.log(div.textContent);
console.log(div.innerHTML);*/




/*//addd remove toggle class
let head=document.querySelector("h1");
head.classList.add("color");
head.classList.remove("border");
head.classList.toggle("background");


//styling
let p=document.querySelector("p");
p.style.color="blue";
p.style.backgroundColor="green";


//createElement
let ul=document.createElement("h2");
let li=document.createElement("li");
li.textContent="Item:1";
let li1=document.createElement("li");
li1.textContent="Item:2";
ul.appendChild(li);
ul.appendChild(li1);

document.body.appendChild(ul);
let arr=["Apple","Banana","Mango"];
arr.forEach((element)=>{
    let lo=document.createElement("li");
    lo.textContent=element;
    ul.appendChild(lo);
});*/


/*let form=document.querySelector("form");
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let name=document.querySelectorAll("input")[0];
    let feedback=document.querySelectorAll("input")[1];
    if(name.value == ""){
        alert("Name  field is required");
        return;
    }
    if(feedback.value.length<5){
        alert("Feedback must be atleast 5 characters long");
        return;
    }
    let result=document.querySelector(".result");
    result.innerHTML = <h3>Thank you,${name.value} for your feedback!</h3>
    <p>Your feedback: ${feedback.value}</p>
    form.reset();
});*/

let form=document.querySelector("form");
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let name=document.querySelectorAll("input")[0];
    let feedback=document.querySelectorAll("input")[1];

    if(name.value === ""){
        alert("Name  field is required");
        return;
    }
    if(feedback.value.length < 5){
        alert("Feedback must be atleast 5 characters long");
        return;
    }

    let result=document.querySelector("#result");
    result.innerHTML = `<h3>Thank you, ${name.value} for your feedback!</h3>
        <p class="bb">Your feedback: ${feedback.value}</p><div>`;
    
    form.reset();
});