import React from 'react'

const Home = () => {
    //Function with no parameters, simply called on event
    const handleClick = ()=>{
        alert("You clicked me!")
    }

    const handleClickTwo = (name) =>{
        alert("Hello " + name);
    }
    return (
        <div>
            <h2>HomePage</h2>
            <button onClick = {handleClick}>Click me!</button>
            
            <button onClick = {()=>{ 
                handleClickTwo('Roma')
            }}>Click me again!</button> 
        </div>
    )
}

export default Home
