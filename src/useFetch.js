
//Custom Hook for fetching data from any url
import {useState, useEffect} from 'react'

const useFetch=(url)=>{
    const [data, setBlogs] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null);

    const abortCont = new AbortController; //when you go to another link while the prev one is updating then error
                                           //to prevent that we abort the fetching

    useEffect(()=>{
        setTimeout(()=>{
            fetch(url, {signal: abortCont.signal})
        .then(res=>{
            if(!res.ok){
                throw Error('could not fetch data')
            }
            return res.json();
        })
        .then(data=>{
            setBlogs(data);
            setIsPending(false)
            setError(null);
        })
        .catch(err=>{
            if(err.name=== 'AbortError'){
                console.log('fetch aborted')
            }
            else{
                setIsPending(false);
            setError(err.message)
            }
            
        })
        }, 2000)
        return()=> abortCont.abort()

        
    }, [url]);

    
    return{data, isPending, error}
}

export default useFetch