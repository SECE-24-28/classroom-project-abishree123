// 1.tag selector
/*let heading1 = document.getElementsByTagName("hi");
//htmlCollection Array
console.log(heading1[1]);

//2.class selector
let cl=document.getElementsByClassName("a");
//htmlCollection Array
console.log(cl[0]);

//3.id selector
let id=document.getElementById("b");
//it will return single element and the first element
console.log(id);

//4.query selector (it works on all the three selectors)
let sel=document.querySelector("#b"); //class(.a)
//it will return single element and the first element
console.log(sel);

//5.QuerySelector All
let d=document.querySelectorAll("#b");
//NodeListArray
console.log(d);*/

//read and write operation
let head=document.querySelector("p");
//read
console.log(head.textContent);  //hello from para
//write
head.textContent = "hii everyone";
let div =document.querySelector("div");
div.textContent="<p>Hello from para</p>";  //what is given it will print including tags
div.innerHtml="<p>Hello from para</p>"; //tag it will remove and give para only

console.log(div.textContent);
console.log(div.innerHtml);


//add/remove/toggle    toggle means if class present there it will remove but if class is not there it will add
let head1=document.querySelector("h1");
console.log(head1);

head1.classList.add("color");
head1.classList.remove("border");
head1.classList.toggle("background");

//styling
let p=document.querySelector("p");
p.style.color="red";
p.style.backgroundColor="green";

//createElement
let ul=document.createElement("ul");
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
});