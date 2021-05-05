import React, {useState} from 'react'

const State = () => {

    const [name, setName] = useState("Mario");
    const [age, setAge] = useState(25);

    const handleClick = () =>{
        setName('Roma')
        setAge(30);
    }
    return (
        <div>
            <h2>{name} and {age}</h2>
            <button onClick = {handleClick}>Click</button>
        </div>
    )
}

export default State
