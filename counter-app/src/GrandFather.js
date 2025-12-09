import Father from './Father';
const GrandFather=({myWill})=>{
    return(
        <div className="Container">
            <h2>GrandFather Component</h2>
            {myWill}
            <Father as={myWill}></Father>
        </div>
    );
};
export default GrandFather;
