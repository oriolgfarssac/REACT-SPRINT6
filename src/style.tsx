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

export { Container, DivStyle, ButtonStyle, DivGeneral };
