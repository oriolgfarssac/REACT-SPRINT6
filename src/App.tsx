import { Container, DivStyle, ButtonStyle, DivGeneral } from './style';
import { TextTest } from './Escena/Escena';
import arrayFrases from './Frases';
import { useState } from 'react';

function App() {
  const [index, setIndex] = useState(0);

  const previousItem = () => {
    setIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const nextItem = () => {
    setIndex((prevIndex) => Math.min(prevIndex + 1, arrayFrases.length - 1));
  };

  return (
    <Container>
      <DivGeneral>
        <div id='divGeneral'>
          <ButtonStyle onClick={previousItem}> ← Anterior </ButtonStyle>
          <ButtonStyle onClick={nextItem}> Seguent → </ButtonStyle>
          {arrayFrases.map((frase, i) => (
            <DivStyle key={i}style={{backgroundColor: index === i ? 'rgba(219, 86, 86, 0.663)' : 'white' }}>
              <TextTest content={frase} />
            </DivStyle>
          ))}
        </div>
      </DivGeneral>
    </Container>
    );
}
export default App;
