//Acts like a template for listing blog names

const BlogList = ({blogs, persons, handleDelete})=>{
   // const blogs = props.blogs; //props is the entire object and we need blogs property of that object
    //const persons = props.persons;
    console.log( blogs, persons)
    //props is the object sent to this component from parent component
    //blogs is the array thing
    return(
       <div className = 'bloglist'>
           {blogs.map((blog)=>(
               <div className = "blog-preview" key = {blog.id}>
                   <h2>{blog.title}</h2>
                   <h3>{blog.author}</h3>
                   <button onClick={()=>handleDelete(blog.id)}>Delete It</button>
               </div>
           ))}
            {persons.map((person)=>(
                <div className = "person=preview">
                <h2>{person.name}</h2>
                <h1>{person.age}</h1>
                </div>
            ))}
           
       </div>
    );
}

export default BlogList