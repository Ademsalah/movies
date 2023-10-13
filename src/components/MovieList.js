import React from 'react'
import MovieCard from './MovieCard'
export default function MovieList({ movielist,search }) {
  return (
    <div>
      <div className='movieListContainer'>{
        movielist.map((el,key)=>  <MovieCard  key={el.id} movie={el}/>)
      }
      </div>
      
    </div>
  )
}