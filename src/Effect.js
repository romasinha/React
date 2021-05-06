import React, {useState, useEffect} from 'react'

const Effect = () => {

    

    const [name, setName] = useState('Roma');

    useEffect(()=>{
        console.log('Effect ran!')
        console.log(name)
    }, []) //UseEffect runs only at the time of rendering of pages
    //but whatever is defined in the square brackets, if changed, then useEffect runs again

    
    return (
        <div className="effect-preview">
            <p>{name}</p>
            <button onClick = {()=>setName('Ayushi')}>Change Name</button>
            
        </div>
    )
}

export default Effect
