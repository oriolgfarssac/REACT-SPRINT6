import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const DivStyle = styled.div`
  margin-top: 25px;
  width: 750px;
  height: 50px;
  background-color: rgb(255, 255, 255);
  border-radius: 30px;
  border: solid 3px black;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center; 
`;

const ButtonStyle = styled.button`
  font-size: 20px;
  margin-left: 30px;
  background-color: white;
  border: solid 2px black;
  border-radius: 30px;

  &:hover {
    background-color: rgba(219, 86, 86, 0.663);
  }

  &:active {
    background-color: rgba(219, 86, 86, 0.785);
  }
`;

const DivGeneral = styled.div`
  margin-top: 10%;
`;


const DivInital = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-items: center;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 300px;
  background-color: #2b8eff;
  border-radius: 20px;
`;

const FirstButton = styled.button`
font-size: 15px;
text-align: center;
background-color: white;
border: solid 2px black;
border-radius: 30px;
width: 175px;
height: 30px;

&:hover{
  background-color: rgba(249, 109, 109, 0.785);
}

&:active{
  background-color:rgba(219, 86, 86, 0.785);
;
}
`;

const FirstTitle = styled.h2`
font-size: 25px;
justify-content: center;
align-items: center;
color: black;
height: 30px;
`;

const FirstText = styled.h5`
margin-top: -10px;
margin-bottom: 40px;
text-align: center;
font-size: 15px;
justify-content: center;
align-items: center;
color: black;
height: 30px;
width: 300px;
word-wrap: normal;
`;

export { Container, DivStyle, ButtonStyle, DivGeneral, DivInital, FirstButton, FirstTitle, FirstText};

