import React, {useState, useEffect} from 'react'
import BlogList from './BlogList'
import useFetch from './useFetch'


const Blog = () => {

    const {data:blogs, isPending, error} = useFetch(' http://localhost:8000/blogs')
    
    //fetch the data, res obj return as json then set blogs to new data
    
    
    
    return (
        <div className = "home">
            {error && <div>{error}</div>}
            {isPending && <div>IsLoading...</div>}
            {blogs && <BlogList blogs={blogs} />}
            
        </div>
        //first wala blogs is the name of the props and bracket wala is the thing we want to pass on
    )
}

export default Blog
