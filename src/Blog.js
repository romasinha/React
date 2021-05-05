import React, {useState} from 'react'
import BlogList from './BlogList'

const Blog = () => {

    const [blogs, setBlogs] = useState([
        {title: 'What a world', body: 'fiuhr', author: 'uvnklv', id:1},
        {title: 'I am mad', body: 'fiuhr', author: 'uvnklv', id:2},
        {title: 'Love is everything', body: 'fiuhr', author: 'uvnklv', id:3}
    ])

    const [persons, setPersons] =useState([
        {name:'Roma', age: 22},
        {name:'Gaurangi', age:20},
        {name:"Ishieta", age:20}
    ])
    return (
        <div className = "home">

            <BlogList blogs={blogs} persons={persons}/> 
        </div>
        //first wala blogs is the name of the props and bracket wala is the thing we want to pass on
    )
}

export default Blog
