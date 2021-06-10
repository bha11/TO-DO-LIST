function Model(props) {
function cancelhandler(){
    props.onCliick();
    
}
function confirmhandler(){
    props.onClock();
}
    return(
        <div className="modal">
         <p>Are you Sure?</p>
         <button className="btn btn--alt" onClick={cancelhandler}>Cancel</button>
         <button className="btn " onClick={confirmhandler}>Confirm</button>   
        </div>
    );
}
export default Model;