import {
  StyledRowWrapper,
  StyledSongImage,
  StyledRow,
  StyledSongTitle,
  StyledDuration
} from "./StyledPlaylistRowItem";

interface SongProps {
  title: string,
  videoId: string,
  duration: number,
  image: string
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const PlaylistRowItem = ({ song }: any) => {
  
  const printDuration = (millis: number) => {
    const minutes = Math.floor(millis / 60000);
    const seconds = ((millis % 60000) / 1000).toFixed(0);
  return minutes + ":" + (+seconds < 10 ? '0' : '') + seconds;
  }

  return (
    <StyledRowWrapper>


      <StyledRow>
        <StyledSongImage src="https://i.scdn.co/image/ab67616d0000b273dbb3dd82da45b7d7f31b1b42" />
        <StyledSongTitle>{song.title}</StyledSongTitle>
        <StyledDuration>{printDuration(song.duration)}</StyledDuration>
      </StyledRow>
    </StyledRowWrapper>
  );
}

export default PlaylistRowItem;