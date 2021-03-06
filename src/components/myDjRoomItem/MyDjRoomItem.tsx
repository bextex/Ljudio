import { useHistory } from "react-router";
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import {
  StyledWrapper,
  StyledDeleteBtn,
  StyledItemDiv,
  StyledImg,
  StyledListTitle
} from "./StyledMyDjRoomItem"

import playlistLogo from "../../pages/landingPage/videos/logo-playlist.png"

const MyDjRoomItem = ({ data }: any) => {

  const history = useHistory();

  return (
    <StyledWrapper>
      <StyledDeleteBtn onClick={() => data[1](data[0]._id)}><HighlightOffIcon/></StyledDeleteBtn>
          
      <StyledItemDiv onClick={() => history.push("/djroom/" + data[0]._id)}>
        <div>
          {/* Logik för om rummet ej har bild visa default logo, annars visa bild */}
          <StyledImg src={playlistLogo} alt="" />
        </div>
        <StyledListTitle>{data[0].name}</StyledListTitle>
        </StyledItemDiv>
    </StyledWrapper>
  );
  
}

export default MyDjRoomItem;