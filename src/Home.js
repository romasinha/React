import React from 'react'
import Blog from './Blog'

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
            <Blog/>
        </div>
    )
}

export default Home
