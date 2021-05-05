//Acts like a template for listing blog names

const BlogList = (props)=>{
    const blogs = props.blogs; //props is the entire object and we need blogs property of that object
    console.log(props, blogs); //props is the object sent to this component from parent component
    //blogs is the array thing
    return(
       <div className = 'bloglist'>
           {blogs.map((blog)=>(
               <div className = "blog-preview" key = {blog.id}>
                   <h2>{blog.title}</h2>
                   <h3>{blog.author}</h3>
               </div>
           ))}
       </div>
    );
}

export default BlogList