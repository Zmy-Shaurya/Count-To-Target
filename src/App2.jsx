import { useState } from "react";
import "./App.css";

function App2() {
    const [count, setCount] = useState(0);
    const [moves, setMoves] = useState(0);
    const [randomValue, changerandomvalue] = useState(Math.floor(Math.random() * 10000));

    const increment = () => {setCount(count + 1); setMoves(moves+1)}
    const decrement = () => {setCount(count - 1); setMoves(moves+1)}
    const zero = () => {setCount(0); setMoves(moves+1)}
    const doublle = () => {setCount(count * 2); setMoves(moves+1)}
    const square = () => {setCount(count ** 2); setMoves(moves+1)}
    const sqroot = () => {setCount(count ** 0.5); setMoves(moves+1)}
    const half = () => {setCount(count / 2); setMoves(moves+1)}

    return (
        <div className="mainrender">
            <header>Move to Target Game</header>

            <h1>Try Creating {randomValue} in least amount of moves possible.</h1>
            <h1>your moves: {moves}</h1>
            <h2>{count}</h2>

            <div id='buttonBox'>
                <button disabled={count===randomValue} onClick={increment}>➕ Increment</button>
                <button disabled={count===randomValue} onClick={decrement}>➖ Decrement</button>
                <button disabled={count===randomValue} onClick={zero}>0️⃣ zero</button>
                <button disabled={count===randomValue} onClick={doublle}>2x Double</button>
                <button disabled={count===randomValue} onClick={half}>½ Half</button>
                <button disabled={count===randomValue} onClick={square}>⏹️square</button>
                <button disabled={count===randomValue} onClick={sqroot}>√ root</button>
            </div>
            {count===randomValue?<h2 id="winMessage">You Won in {moves} moves! Refresh to restart</h2>:null}
        </div>
    );
}

export default App2;
