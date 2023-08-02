import React from 'react'
import "./cardseries.css"

export const Cardseriies = () => {
   
const Data = [

  { id:1 , img:'https://m.media-amazon.com/images/M/MV5BNmMxYTIxZDUtOTk2ZC00MTZjLTkxODQtOWVhNjMwNjM2NWI4XkEyXkFqcGdeQXVyMTI5ODUyODg4._V1_FMjpg_UX1000_.jpg' , alt:'dirilis' , url:'/dirilis'},
  { id:2 , img:'https://m.media-amazon.com/images/M/MV5BN2FhMmUxMmUtNTRkZS00Y2E0LWI5NzAtYzFhNjg1ODFiMWE2XkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg' , alt:'payith' , url:'/payith' },
  { id:3 , img:'./donence.jpg' , alt:'donence' , url:'/donence' },
  { id:4 , img:'./diriliscard.jpg' , alt:'kurulus' , url:'/kurulus'},
  { id:5 , img:'/series/Thesimpsons/thesipm.jpg' ,alt:'thesimps', url:'/thesimps'},
]
  

  return (

  <div>
    {Data.map((item)=>{
      return(
    
    <div className='card-serie-container'  >
        <div className='image-serie-container'>
        <a href={item.url}> <img src={item.img} alt={item.alt} /> </a>
        </div>
    </div>

      );
  } )}
    </div>
  )
}