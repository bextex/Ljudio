import styled from "styled-components";

interface TextColor {
  status: boolean;
}

export const StyledWrapper = styled.div`
`;

export const StyledTitle = styled.p`
  font-size: 25px;
  font-weight: 500;
`;

export const StyledForm = styled.form`
min-height: 100vh;
text-align: center;
margin-top: 3rem;
 @media (min-width: 769px) {
    margin-top: 6rem;
    min-height: 80vh;
  }
`;

export const StyledTextInput = styled.input`
  text-decoration: none;
  outline: none;
  border: none;
  font-size: 20px;
  width: 300px;
  background: lightgrey;
  border-radius: 3px;
  height: 35px;
  margin-left: 5px;
`;

export const StyledLabel = styled.p`
 color: #EF02EB;
  opacity: 80%;
`;

export const StyledTextBox = styled.textarea`
  margin-left: 5px;
  border-radius: 3px;
  margin: 0;
  padding: 0;
  background: lightgrey;
  text-decoration: none;
  outline: none;
  border: none;
  font-size: 20px;
  max-width: 300px;
  max-height: 100px;
  min-width: 300px;
  min-height: 100px;
`;

export const StyledCreateBtn = styled.button`
  display: block;
  margin: 0 auto;
`;

export const StyledBotSection = styled.div`
`;

export const StyledSpan = styled.span`
  position: relative;
  bottom: 5px;
  font-size: 20px;
`;

export const StyledStatusText = styled.p<TextColor>`
  color: ${props => props.status ? '#00FF00' : 'white'};
  font-size: 17px;
`;