import styled from "styled-components";
import ShareIcon from '@material-ui/icons/Share';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

export const StyledShareIcon = styled(ShareIcon)`
  color: white;
  margin-right: 3px;
  float: right;
  cursor: pointer;
       &:hover{
     color: green;
   }
`

export const StyledBackIcon = styled(ArrowBackIcon)`
  color: white;
  margin-right: 10px;
  float: right;
  cursor: pointer;
     &:hover{
     color: #f50057
   }
`

export const StyledWrapper = styled.div`
width: 100%;
`;

export const StyledAllContent = styled.div`

 @media (min-width: 769px) {
  width: 80%;
  margin: 10px auto;
 }
`;

export const StyledTitle = styled.p`
  font-size: 20px;
  letter-spacing: 2px;
  margin: 10px 3px 0 10px;
`;


export const StyledNameDiv = styled.div`
  font-size: 40px;
  letter-spacing: 2px;
  margin-top: 10%;
  padding: 0;
  width: 100%;
  align-content: center;
`;

export const StyledName = styled.p`
  margin: 0 0 0 10px;
  width: fit-content;
`;

export const StyledMusicDiv = styled.div`
`;

export const StyledTest = styled.div`
  &:last-child {
          margin-bottom: 10rem;
      }
`;

// MUSIC LIST STYLE

export const StyledSongWrapper = styled.div`
  display: grid;
  grid-template-columns: 5rem 1fr 2rem 2rem;
  @media (min-width: 400px) {
      grid-template-columns: 6rem 1fr 2rem 2rem;
  }
  @media (min-width: 769px) {
  grid-template-columns: 7rem 1fr 2rem 2rem;

   &:hover{
     opacity: 80%;
     cursor: pointer;
   }
  }
`

export const StyledSongs = styled.p`
  margin: 0;
  padding: 5%;
  margin-left: 1rem;
  @media (min-width: 769px) {
    padding: 3%;
  }
`

export const StyledSongImg = styled.img`
  padding: 3%;
  height: 7vh;
  align-self: center;
`

export const StyledCategory = styled.p`
  font-size: 20px;
  letter-spacing: 2px;
  margin: 10px;
`;

export const StyledImg = styled.img`
  border-radius: 50%;
  margin: 10px;
`;