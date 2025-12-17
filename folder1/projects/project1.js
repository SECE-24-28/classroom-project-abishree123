//1.we need all the instance
let againBtn=document.querySelector(".again");
let number=document.querySelector(".number");
let guess=document.querySelector(".guess");
let checkBtn=document.querySelector(".check");
let score=document.querySelector(".score");
let highscore=document.querySelector(".highscore");
let msg=document.querySelector(".message");

//2.Generate a Random Number btw 1 and 20
let randomNumber=Math.trunc(Math.random() * 20) + 1;
/*let scr=20;
console.log(randomNumber);*/

//2.1 create a variable of score
let scr=20;


//Button Functionalities
 console.log(randomNumber);
//1.event that we want to occur 2. callback function
checkBtn.addEventListener("click",()=>{

    let inputVal=Number(guess.value);
    console.log(randomNumber);

    //3.check Button Func
    //3.1 Input value is equal to random number
    if(inputVal==randomNumber){

        //3.1.1 Change the background to green
        document.body.style.backgroundColor="green";

        //3.1.2 Instead of 7 put the random value
        number.textContent=randomNumber;

        //3.1.3 At highscore we have to put value of score
        if(scr>Number(highscore.textContent)){
             highscore.textContent=scr;
        }

        //3.3.2 Show message "Correct Value";
        msg.textContent="Correct Value";

    }else if(inputVal>randomNumber){

        //3.2 if input is greater than random number
        //3.2.1 Decrease score by 1
        scr-=1;
        score.textContent=scr;

        //3.2.2 show message "Too High"
        msg.textContent="Too High";

    }else if(inputVal<randomNumber){

        console.log("Number is too low");

        //3.3 if input is less than random number
        //3.3.1 Decrease score by 1
        scr-=1;
        score.textContent=scr;

        //3.3.2 show message "Too Low"
        msg.textContent="Too Low";
    }

});  

//4.Again Button Func
let init=()=>{
    //4.1 Resert all values to initial stage
    scr=20;
    score.textContent=scr;
    number.textContent="?";
    guess.value="";
    msg.textContent="Start Guessing";
    randomNumber=Math.trunc(Math.random() * 20) + 1;
    document.body.style.backgroundColor="black";
    console.log(randomNumber);
};
againBtn.addEventListener("click",init);


