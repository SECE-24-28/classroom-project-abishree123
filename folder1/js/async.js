setTimeout(()=>{
    console.log("setTimeOut function");
},2000);
//callback fun and timer
console.log("hloo");   //asyn-->blocking code

//callback hell
//nested call backs
setTimeout(()=>{
    console.log("setTimeout function 1");
    setTimeout(()=>{
    console.log("setTimeout function 2");
    setTimeout(()=>{
    console.log("setTimeout function 3");
    setTimeout(()=>{
    console.log("setTimeout function 4");
},2000);

},2000);

},2000);

},2000);


////Promises
//3 States
//pending
//fulfilled
//rejected

//promise pass a callback function with two parameter
let myPromise=new Promise((res,rej)=>{
    let marks=40;
    if(marks>60){
        res("Student is passed");
    }else{
        rej("Student is failed");
    }
});

//ways to call a promise
//.then() and .catch()
mypromise
.then((a)=>{
    console.log(a);
})
.catch((err)=>{
    console.log(err);
});

//Async and await
//no error handling

let handlePromise=async ()=>{
    try{
        console.log("Test");

        let response =await myPromise;
        console.log(response);
        console.log("Anything");
    }catch(err){
        console.log(err);
    }finally{
        console.log("This will execute ")
    }
};

handlePromise();



let fetchData = async () => {
    try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    console.log(response);
   // convert the output into json format we use the below line
    const data = await response.json();
    localStorage.setItem("responseData",JSON.stringify(data)) // convert a object into a string format
    console.log("value is",data);
    } catch (err) {
   console.log(err);
    }
};

let localData = JSON.parse(localStorage.getItem("responseData")) || [];
if (localData.length <= 0) {
    fetchData();
}
