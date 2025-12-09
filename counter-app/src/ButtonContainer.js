import Button from "./Button";

const ButtonContainer = ({val,handleDecrement,handleIncrement}) =>{
    return(
        <div className="buttons">
            <Button></Button>
          <button onClick={handleIncrement} className="inc">Increment</button>
          <button onClick={handleDecrement} className="dec">Decrement</button>
        </div>
    );
};
export default ButtonContainer;