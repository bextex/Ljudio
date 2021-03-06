import { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router";
import SearchField from "../../components/searchField/SearchField";
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import { PlaylistContext } from "../../contexts/playlistsContext/PlaylistContextProvider";
import DialogModal from '../../components/dialog/DialogModal';
import SnackBar from '../../components/snackBar/SnackBar';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import {
  StyledWrapper,
  StyledSongs,
  StyledSongWrapper,
  StyledSongImg,
  StyledCategory,
  StyledArtistImg,
  StyledArtistName,
  StyledAvatarDiv,
  StyledExpandIcon,
  StyledExpandLessIcon
} from './StyledSearchPage'

interface SongProps {
  title: string,
  videoId: string,
  duration: number,
  imgUrl: string
}

interface Playlist{
  name: string;
  _id: string;
}

const SearchPage = () => {

  const history = useHistory();
  const [amountOfSearchResult, setAmountOfSearchResult] = useState(2);
  const [showMore, setShowMore] = useState(false);
  const { currentSong, setCurrentSong, addSongToPlaylist, getAllUserPlaylists, allUserPlaylists, handleSearch, content, handleArtistSearch, artistContent } = useContext(PlaylistContext);
  const [open, setOpen] = useState(false);
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const [userId, setUserId] = useState<string | null>('');
  const [songToAdd, setSongToAdd] = useState<SongProps | null>()

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    setUserId(userId);
  }, []);

  useEffect(() => {
    if (userId) {
      myPlaylists();
    }
  }, [!allUserPlaylists, userId]);

  const myPlaylists = async () => {
    await getAllUserPlaylists(userId);
  }

  const handleSearchResult = () => {
    !showMore ? setAmountOfSearchResult(content.length) : setAmountOfSearchResult(2);
    setShowMore(!showMore);
  }

  const handleSong = (song: SongProps) => {
    setCurrentSong([song]);
  }

  const handleQue = (song: SongProps) => {
    setCurrentSong([...currentSong, song])
  }

  const handleAddToPlaylist = (song: SongProps, playlist: Playlist) => {
    setOpenSnackBar(true);
    addSongToPlaylist(playlist._id, song);
  }

  const handleOpenDialog = (song: SongProps, playlist: Playlist) => {
    setOpen(!open)
    setSongToAdd(song);
  }

  const printOutAristContent = () => (
    <StyledWrapper>
      <StyledCategory>Artist</StyledCategory>

      <StyledAvatarDiv onClick={() => history.push('/artist/' + artistContent.name)}>
      <StyledArtistImg src={artistContent.thumbnails[1].url} />
        <StyledArtistName>{artistContent.name}
          <CheckCircleRoundedIcon
          fontSize='small'
          style={{color: 'white', position: 'relative', top: '3px', marginLeft: '3px'}}
          />
        </StyledArtistName>
      </StyledAvatarDiv>
      
    </StyledWrapper>
  );


  const printOutYoutubeContent = () => (
    <StyledWrapper>
      <SnackBar
        snackbarContent="The song has been added to your playlist!"
        open={openSnackBar}
        setOpen={setOpenSnackBar}
      />
      <StyledCategory>Videos</StyledCategory>
      {content.map((song: SongProps, index: number) => (
        <div key={index}>
          {index <= amountOfSearchResult && song.videoId !== undefined && <StyledSongWrapper>
            <StyledSongImg onClick={() => handleSong(song)} src={song.imgUrl} alt="" />
            <StyledSongs onClick={() => handleSong(song)}>{song.title}</StyledSongs>
            <PlaylistAddIcon onClick={() => handleOpenDialog(song, allUserPlaylists)} style={{ alignSelf: 'center' }} />
            <PlaylistPlayIcon onClick={() => handleQue(song)} style={{ alignSelf: 'center' }} />
          </StyledSongWrapper>}
        </div>  
      ))}
      {songToAdd && <DialogModal
        open={open}
        setOpen={setOpen}
        playlists={allUserPlaylists}
        song={songToAdd}
        handleAddToPlaylist={handleAddToPlaylist}
      />}
      {!showMore ? <StyledExpandIcon onClick={handleSearchResult} fontSize="large" style={{ display: 'block', margin: '1rem auto' }} />
        : <StyledExpandLessIcon onClick={handleSearchResult} fontSize="large" style={{ display: 'block', margin: '1rem auto' }} />}
    </StyledWrapper>
  )

  return (
    <>
      <SearchField handleYoutubeSearch={handleSearch} handleArtistSearch={handleArtistSearch} />
      {content && printOutYoutubeContent()}
      {artistContent && printOutAristContent()}
    </>
  )
}

export default SearchPage;