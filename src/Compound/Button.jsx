import {useState} from 'react'

const Button = () => {
    const [value, setValue] = useState("press Here")

    const dummy = ()=>{
        setValue("you clicked")
    }
    return (
        <div>
            <button onClick={ dummy} title="clickbtn">
                {value}
            </button>
        </div>
    )
}

export default Button
