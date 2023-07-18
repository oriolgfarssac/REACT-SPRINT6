import './App.css'
import TextTest from './Escena/Escena'
import arrayFrases from './Frases'

function App() {
  
  return (
    <>
    <TextTest content={arrayFrases[0]}/>
    <TextTest content={arrayFrases[1]}/>
    <TextTest content={arrayFrases[2]}/>
    <TextTest content={arrayFrases[3]}/>
    </>

  )
}

export default App
