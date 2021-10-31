import React, {useState} from 'react'


const Counter = () => {

    const [countervalue, setCountervalue] = useState(0)
    const [inputvalue, setInputvalue] = useState(1)


    const addToCounter = ()=>{
        setCountervalue(countervalue + inputvalue)
    }

    const subtractToCounter = ()=>{
        setCountervalue(countervalue - inputvalue)
    }

    return (
        <div>
            <h2 data-testid="header">counter</h2>
            <h2 data-testid="counter_b" className={`${countervalue >= 100 ? "green" : ""} ${countervalue <= -100 ? "red":""}`}
            >{countervalue}
            </h2>
            <button data-testid="add_btn" onClick={addToCounter}>+</button>
            <input type="number" data-testid="input_a" value={inputvalue} onChange={(e)=>{setInputvalue(parseInt(e.target.value))}}/>
            <button data-testid="minus_btn" onClick={subtractToCounter}>-</button>
        </div>
    )
}


export default Counter
