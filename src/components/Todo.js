/* eslint-disable no-unreachable */
import { useState } from 'react';
import Model from './Model';
import Backdrop from './Backdrop';
function Todo(props) {
  const [ modalIsopen, setModalISOpen ] = useState(false);
  function deletehandler() {
     setModalISOpen(true);
  };
  function resolvehandler() {
    setModalISOpen(false);
  };
    return ( 
        
        <div className="card">
    <h2>{props.text}</h2>
    <div className="actions">
    <button className="btn" onClick={deletehandler}>Delete</button>
    </div>
    {modalIsopen && <Model onCliick={resolvehandler} onClock={resolvehandler} /> }
    {modalIsopen && <Backdrop onClick={resolvehandler} />}
  </div>

);
}
export default Todo;  