
import { Container, Row } from 'react-bootstrap';
import styled from 'styled-components'

export const StyledTitle = styled.h1`
  font-size: 3vmax;
  text-align: center;
  color: #fff;
`;
export const StyledSubTitle = styled.h2`
  font-size: 2vmax;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  text-align: center;
  color: #fff;
`;

export const StyledMiddleBox = styled.div`
  
  position: relative;  
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  margin: 10px;
  padding: 2rem 3vh;
  text-align: center;
  color: #fff;
  border: 3px solid #fff;
  box-shadow: 0px 0px 25px #222;
  backdrop-filter: blur(10px);
`
export const StyledButton = styled.button`
`;

export const StyledPhotoGalery = styled.div`
  min-height: 200px;
  min-width: 70vw;
  background: white;
  border-radius: 10px;

  display: block;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 98%;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }

`
export const StyledCard = styled.div`
  -webkit-box-shadow: 0px 0px 38px 2px rgba(0,0,0,0.49);
  -moz-box-shadow: 0px 0px 38px 2px rgba(0,0,0,0.49);
  box-shadow: 2px 4px 10px 1px rgba(0,0,0,0.49);
  padding:20px 10px;
  cursor:pointer;

`
export const StyledCardImages = styled.div`
  -webkit-box-shadow: 0px 0px 38px 2px rgba(0,0,0,0.49);
  -moz-box-shadow: 0px 0px 38px 2px rgba(0,0,0,0.49);
  box-shadow: 0px 0px 38px 2px rgba(0,0,0,0.49);
  padding:40px;
  height: 80vh;
  min-width: 80vw;
  max-height: 80vh;

`

export const StyledContainer = styled(Container)`
  color:black
`
export const StyledRowSelect = styled(Row)`
  margin: 50px 50px;
`