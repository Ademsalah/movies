import React from 'react'
import MovieCard from './MovieCard'
export default function MovieList({ movielist,search }) {
  return (
    <div>
      <div className='movieListContainer'>{
        movielist.filter((el)=> (el.Title.toLowerCase().includes(search.toLowerCase().trim()))
		)
		.map((el,key)=>  <MovieCard  key={el.id} movie={el}/>)
      }
      </div>
      
    </div>
  )
}