import styled from "styled-components";

export const StyledWrapper = styled.div`
  margin-top: 10vh;

`;


export const StyledName = styled.span`

`;

export const StyledNameDiv = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin: 2rem;
`;

export const StyledTitleDiv = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin: 2rem;
`;

export const StyledNameSpan = styled.div`
  font-size: 1.6rem;
  font-family: Arial, Helvetica, sans-serif;
  letter-spacing: 0.1rem;
`;


export const StyledNameInput = styled.input`
  text-decoration: none;
  outline: none;
  border: none;
  border-bottom: 1px solid grey;
`;

export const StyledEditDiv = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin: 2rem;
`;

export const StyledBtn = styled.button`
  text-decoration: none;
  border: none;
  outline: none;
  font-size: 18px;
  letter-spacing: 2px;
  border-radius: 3px;
  background: #fff;
  margin-left: 30px;
  cursor: pointer;
  &:hover{
    background: #f50057;
  }
`;