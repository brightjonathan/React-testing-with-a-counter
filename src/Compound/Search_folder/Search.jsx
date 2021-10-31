import {useState} from 'react'

const Search = () => {
    const [inputvalue, setInputvalue] = useState("");

    const handleChange = (event) =>{
        setInputvalue(event.target.value);
    }

    return (
        <div>
            <input type="text" onChange={handleChange} title="searchinput"/>
        </div>
    )
}

export default Search
