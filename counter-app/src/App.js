import './App.css';
import { useEffect, useState } from 'react';
import Counter from './Counter';

function App() {
  let [val, setVal] = useState(0);
  let [data, setData]=useState([]);
  let handleIncrement = () =>{
     setVal(val + 1);
  };
  let handleDecrement = () =>{
    setVal(val - 1);
  };
  /*let [val, setVal] = useState(0);
  let handleIncrement = () =>{
     setVal(val + 1);
  };
  let handleDecrement = () =>{
    setVal(val - 1);
  };*/

  //Debouncing
  useEffect(()=>{
    if(val<0){
      let timer=setTimeout(()=>{
        setVal(0);
      },2000);

      //cleanup Function
      return()=>{
        clearTimeout(timer);
      };
    }
  },[val]);

  useEffect(()=>{
    const FetchApi = async()=>{
      try{
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const fetchData=await response.json();
        setData(fetchData);
      }catch(err){
        console.log("err:",err);
      }
    };
    FetchApi();
  }, []);
  console.log(data);

  /*useEffect(()=>{
    if(val<0){
      setTimeout(()=>{
        setVal(0);
      },2000)
    }
  },[val]);*/

 /* 1.*/
  /*useEffect(() => {                                                       
    console.log("UseEffect - Run Once after initial render");
  }, []);

  useEffect(() => {
    console.log("UseEffect - With Array of dependencies");
  }, [val]);

  useEffect(() => {
    console.log("UseEffect - Without Array");
  });*/

  return (
    <div className="App">
      <h1>Learning React</h1>
      <Counter
        val={val}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
          </tr>
          </thead>
          <tbody>
            {data.map((item)=>{
              return(
                <tr>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                </tr>
              );
            })}
          </tbody>
      </table>
    </div>
  );
}
export default App;