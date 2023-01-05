import React,{useState,useEffect} from 'react'
import axios from 'axios'
import '../App.css';

function Api() {

    const [resourse,setresourse] = useState([]);


    useEffect(()=>{
        axios.get("https://reactnd-books-api.udacity.com/books",{ headers: { 'Authorization': 'whatever-you-want' }})
        .then(res=>setresourse(res.data.books))
    },[])

   
    console.log(resourse)


  return (
    <div>
        <h1>BOOKS</h1>
        <hr/>
        {
            resourse.map((abc)=>{
                return(
                    <>
                    <div className='container'>
                        <div>
                            <h2>{abc.title}</h2>
                        </div>
                        <div className='cont'>
                            <div className='image'>
                                <img src={abc.imageLinks.smallThumbnail} alt='ghfgh'  />
                            </div>
                            <div className='desc'>
                                <p>{abc.description}</p>
                            </div>
                        </div>
                        <div>
                            <h3>{abc.authors}</h3>
                        </div>
                    </div>
                    <hr/>
                    </>
                    
                    
                )
            })
            
        }
    </div>
  )
}

export default Api