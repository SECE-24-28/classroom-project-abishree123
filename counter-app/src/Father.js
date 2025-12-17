import Son from './Son';
const Father=({as})=>{
    return(
        <div className="Container">
            <h2>Father Component</h2>
            {as}
            <Son msg={as}></Son>
        </div>
    );
};
export default Father;