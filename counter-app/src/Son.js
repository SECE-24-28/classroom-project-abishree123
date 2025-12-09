import GrandSon from './GrandSon';
const Son=({msg})=>{
    return(
        <div className="Container">
            <h2>Son Component</h2>
            {msg}
            <GrandSon get={msg}></GrandSon>
        </div>
    );
};
export default Son;