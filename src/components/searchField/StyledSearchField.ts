import styled from 'styled-components'

export const StyledForm = styled.form`
  padding: 1rem 0.5rem 1rem 0.5rem;
  display: grid;
  grid-template-columns: 1fr 30%;
  grid-gap: 0.5rem;
  @media (min-width: 769px) {
    width: 80%;
    margin: 0 auto;
  }
`

export const StyledSearchField = styled.input`
  padding: 0.5rem;
  outline: none;
  border: 1px solid #9C27B0;
`
