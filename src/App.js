import { useState } from 'react';
import './App.css'
import Add from './components/Add'
import Navigation from './components/Navigation';
import movies from './components/movies'
import MovieList from './components/MovieList';
import Filter from './components/Filter'



function App() {
  const [movielist, setmovielist] = useState(movies)
  const addHandler=(newMovie)=>{
    setmovielist(
      [...movielist, newMovie]
    )
  }
  const [ search,setsearch] = useState("");
  return (
    <div className="App">
     <Navigation/>
     <Filter setsearch={setsearch}/>
     <Add  addHandler={addHandler}/>
     <MovieList movielist={movielist} search={search}/>
    </div>
  );
}

export default App;

