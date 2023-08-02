import React from 'react'
import"./cardhomes.css"

function Cardshomes() {
  
    const Data = [

        { id:1 , img:'./diriliscard.jpg' , alt:'dirilis' , url:'/dirilis'},
        { id:1 , img:'./donence.jpg' , alt:'donence' , url:'/donence'},
        { id:1 , img:'https://m.media-amazon.com/images/M/MV5BNmMxYTIxZDUtOTk2ZC00MTZjLTkxODQtOWVhNjMwNjM2NWI4XkEyXkFqcGdeQXVyMTI5ODUyODg4._V1_FMjpg_UX1000_.jpg' , alt:'dirilis' , url:'/dirilis'},
        { id:1 , img:'https://m.media-amazon.com/images/M/MV5BN2FhMmUxMmUtNTRkZS00Y2E0LWI5NzAtYzFhNjg1ODFiMWE2XkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg' , alt:'dirilis' , url:'/dirilis'},
       



        
      ]
        
      
        return (
      
        <div class='cardshome'>
          {Data.map((item)=>{
            return(
          
          <div className='card-container'  >
              <div className='image-container'>
              <a href={item.url}> <img src={item.img} alt={item.alt} /> </a>
              </div>
          </div>
      
            );
        } )}
          </div>
        )
      }

export default Cardshomes