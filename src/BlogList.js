//Acts like a template for listing blog names
import {Link} from "react-router-dom"
const BlogList = ({blogs})=>{
   // const blogs = props.blogs; //props is the entire object and we need blogs property of that object
    //const persons = props.persons;
    console.log( blogs)
    //props is the object sent to this component from parent component
    //blogs is the array thing
    return(
       <div className = 'bloglist'>
           {blogs.map((blog)=>(
               <div className = "blog-preview" key = {blog.id}>
                   <Link to={`/blogs/${blog.id}`}>
                   <h2>{blog.title}</h2>
                   <h3>{blog.author}</h3>
                   </Link>
                   
                   
               </div>
           ))}
            
           
       </div>
    );
}

export default BlogList