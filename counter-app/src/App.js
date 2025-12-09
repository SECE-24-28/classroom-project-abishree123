/*
import './App.css';
import { useState } from 'react';
function App() {
  //let val=0;
  // we use states becoz normal funtion we cannot get proper increment and decrement value so we use states
  let[val,setVal]=useState(10);
  //let val=10
  //function setVal(newVal){
  //val=newVal
  //}
  const handleIncrement=()=>{
    //val=val+1;
    setVal(val+1);
    console.log("Increment button clicked",val);
  };
  const handleDecrement=()=>{
    //val=val-1;
    setVal(val-1);
    console.log("Increment button clicked",val);
  };
  return (
    <div className="App">
      <h1>Learning React</h1>
      <div className="counter">
        <h1>{val}</h1>
        <div className="buttons">
          <button onClick={handleIncrement} className="inc">Increment</button>
          <button onClick={handleDecrement} className="dec">Decrement</button>
        </div>
      </div>
    </div>
  );
}

export default App; */
/*
import './App.css';
import { useState } from 'react';
import Counter from './Counter';
function App(){
  let[val,setVal]=useState(10);
  const handleIncrement=()=>{
    setVal(val+1);
    console.log("Increment button clicked", val);
  };
  const handleDecrement=()=>{
    setVal(val-1);
    console.log("Decrement button clicked", val);
  };
  return(
    <div className="App">
      <h1>Learning React</h1>
      <Counter
        val={val}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      ></Counter>
    </div>
  );
}
export default App; */

import "./App.css";
import { useState } from "react";
function App() {
  let [randomNumber, setRandomNuber] = useState(
    Math.trunc(Math.random() * 20) + 1
  );
  let [msg, setMsg] = useState("Start guessing...");
  let [score, setScore] = useState(20);
  let [highScore, setHighScore] = useState(0);
  let [bg, setBg] = useState("black");
  let [guess, setGuess] = useState("");

  let checkBtn = () => {
    let inputVal = Number(guess);
    if (!inputVal) {
      setMsg("No Number");
      return;
    }
    if (inputVal === randomNumber) {
      setBg("green");
      setMsg("Correct Value");
      if (score > highScore) {
        setHighScore(score);
      }
    } else if (inputVal > randomNumber) {
      setScore(score - 1);
      setMsg("Too High");
    } else if (inputVal < randomNumber) {
      setScore(score - 1);
      setMsg("Too Low");
    }
  };

  let init = () => {
    setBg("black");
    setScore(20);
    setRandomNuber(Math.trunc(Math.random() * 20) + 1);
    setMsg("Start guessing...");
  };

  return (
    <div className="App" style={{ backgroundColor: bg }}>
      <header>
        <h1>Guess My Number!</h1>
        <p class="between">(Between 1 and 20)</p>
        <button onClick={init} class="btn again">
          Again!
        </button>
        <div class="number">{msg === "Correct Value" ? randomNumber : "?"}</div>
      </header>
      <main>
        <section class="left">
          <input
            type="number"
            class="guess"
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
          />
          <button onClick={checkBtn} class="btn check">
            Check!
          </button>
        </section>
        <section class="right">
          <p class="message">{msg}</p>
          <p class="label-score">
            💯 Score: <span class="score">{score}</span>
          </p>
          <p class="label-highscore">
            🥇 Highscore: <span class="highscore">{highScore}</span>
          </p>
        </section>
      </main>
    </div>
  );
}

export default App;