import './App.css'
import Explorer from './components/Explorer'
import fileData from './mockData/data'

function App() {
  return (
    <>
      <h1>Basic File Explorer Project</h1>
      <Explorer explorer={fileData}/>
    </>
  )
}

export default App
