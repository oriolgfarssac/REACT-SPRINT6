import { Container, DivStyle, ButtonStyle, DivGeneral } from './style'
import { TextTest, } from './Escena/Escena'
import arrayFrases from './Frases'

function App() {

  return (
    <Container>
    <DivGeneral><div id='divGeneral'>
    <ButtonStyle> ← Anterior </ButtonStyle>
    <ButtonStyle> Seguent → </ButtonStyle>
    <DivStyle><TextTest content={arrayFrases[0]}/></DivStyle>
    <DivStyle><TextTest content={arrayFrases[1]}/></DivStyle>
    <DivStyle><TextTest content={arrayFrases[2]}/></DivStyle>
    <DivStyle><TextTest content={arrayFrases[3]}/></DivStyle>
    </div></DivGeneral>
    </Container>

  )
}

export default App
