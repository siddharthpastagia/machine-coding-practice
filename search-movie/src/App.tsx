import { useEffect, useState } from 'react'
import './App.css'

function App() {
const [movie, setMovie] = useState('')
const [results, setResults]= useState([])

interface Movie{
  Poster:string
  Title:string
  Type:string
  Year:string
  imdbID:string
}
const handleClick = (): void => {
  searchMovies(movie)
}

useEffect(()=>{
  searchMovies('Spiderman')
},[])

const searchMovies = async (title:string) => {
  const response = await fetch(`https://omdbapi.com?apikey=fe2f6c44&s=${title}`)
  const data = await response.json()
  setResults(data.Search)
  console.log(results)
}

  return (
    <>
      <h1>Movie Search</h1>
      <div className="card">
        <input type='text' onChange={(e) => setMovie(e.target.value)} value={movie}/>
        <button onClick={handleClick}>Get Movie</button>
      </div>
      { 
                results?.length > 0 
                    ? (<div className="container"> 
                       {results.map((item:Movie)=>(
                            <div key={item?.imdbID}>{item?.Title}</div>
                        )
                       )}
                    </div>) : ( 
                        <div className="empty"> 
                            <h2>No Movies found</h2> 
                        </div> 
                    ) 
            } 
    </>
  )
}

export default App
