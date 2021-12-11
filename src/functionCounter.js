import React, {useState} from 'react';
import './App.css';

const Functioncounter = () => {
    const [count, handleUpdate] = useState({number: 0});
    return (
        <div className="App">
            <h1>Counter: {count.number}</h1>
            <hr />
            <button onClick={() => handleUpdate({number: count.number + 1})}>Increase Count</button>
            <button onClick={() => handleUpdate({number: count.number - 1})}>Decrease Count</button>
        </div>
    );
}

export default Functioncounter;
