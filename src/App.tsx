import { Container, DivStyle, ButtonStyle, DivGeneral, DivInital, FirstButton, FirstTitle, FirstText} from './style';
import { TextTest } from './Escena/Escena';
import arrayFrases from './Frases';
import { useState } from 'react';

function App() {
  const [condition, setCondition] = useState(false);

  const [condition2, setCondition2] = useState(true);

  const [index, setIndex] = useState(0);

  const changeCondition = () =>{
    setCondition(true);
    setCondition2(false);
  };

  const previousItem = () => {
    setIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const nextItem = () => {
    setIndex((prevIndex) => Math.min(prevIndex + 1, arrayFrases.length - 1));
  };

  return (
    <>
    {condition2 &&
      <DivInital>
      <FirstTitle>SPRINT 6</FirstTitle>
      <FirstText> En aquest Srint, podrem observar una historia que es podra anar passant amb uns botons fent us de useState.</FirstText>
      <FirstButton onClick={changeCondition}>Veure Historia</FirstButton>
      </DivInital>
    }
    {condition && ( // Renderizado condicional basado en la condición
      <Container>
        <DivGeneral>
          <div id='divGeneral'>
            <ButtonStyle onClick={previousItem}> ← Anterior </ButtonStyle>
            <ButtonStyle onClick={nextItem}> Seguent → </ButtonStyle>
            {arrayFrases.map((frase, i) => (
              <DivStyle
                key={i}
                style={{
                  backgroundColor: index === i ? 'rgba(219, 86, 86, 0.663)' : 'white',
                }}
              >
                <TextTest content={frase} />
              </DivStyle>
            ))}
          </div>
        </DivGeneral>
      </Container>
    )}
    </>
    );
}
export default App;
