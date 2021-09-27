import {StyledItemDiv, StyledImg, StyledPlaylistWrapper, StyledListTitle } from "./StyledPlaylistItem";
import { useHistory } from "react-router-dom";
import { Button } from "@mui/material";



// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const PlaylistItem = ({ data }: any) => {

  const history = useHistory();
  
  return (
    <>
      <StyledPlaylistWrapper>
      <Button onClick={() => data[1](data[0]._id)}>Delete</Button>
      <StyledItemDiv onClick={() => history.push("/playlist/" + data._id)}>
        <div>
          <StyledImg src="https://i.postimg.cc/nVmnQDCz/analyze-sound-wave-music-512-362.png" alt="" />
        </div>
        <StyledListTitle>{data[0].name}</StyledListTitle>
        </StyledItemDiv>
        
        </StyledPlaylistWrapper>
    </>
  );
}

export default PlaylistItem;