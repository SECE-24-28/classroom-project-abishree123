import ButtonContainer from "./ButtonContainer";

const Counter = ({val,handleDecrement,handleIncrement}) =>{
    let v=null;
    if(val< 0){
        v=<p>Negative Value</p>;
    }else if(val > 5){
        v=<p>Positive Value</p>;
    }
    return(
        <div className="Counter">
        <h1>{val}</h1>
        {/*val < 0 ? <p>Negative Value</p>:null*/}
        {v}
        <ButtonContainer
        handleDecrement={handleDecrement}
        handleIncrement={handleIncrement}
        ></ButtonContainer>
      </div>
    );
};
export default Counter;