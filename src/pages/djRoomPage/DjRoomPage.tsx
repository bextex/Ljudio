import {StyledWrapper, StyledSettingsWrapper, StyledHeaderWrapper, StyledSongTitle} from './StyledDjRoomPage'
import Bubbels from '../../components/bubbels/Bubbels'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SettingsIcon from '@material-ui/icons/Settings';
import QueueMusicIcon from '@material-ui/icons/QueueMusic';
import DjRoomSettingsModal from '../../components/djRoomSettingsModal/DjRoomSettingsModal'
import ShareIcon from '@material-ui/icons/Share';
import { useState, useContext, useEffect } from 'react';
import SnackBar from '../../components/snackBar/SnackBar'
import { DjRoomContext } from '../../contexts/djRoomContext/djRoomContextProvider';
import {PlaylistContext} from '../../contexts/playlistsContext/PlaylistContextProvider'
import { useParams } from "react-router-dom";
import { UserContext } from '../../contexts/usersContext/UserContextProvider';
import { useHistory } from 'react-router';
import DjRoomOwnersPlaylistModal from '../../components/djRoomOwnersPlaylistModal/DjRoomOwnersPlaylistModal'
import { useSubscription, gql } from '@apollo/client';

import LeaveRoomModal from '../../components/leaveRoomModal/LeaveRoomModal'

const DjRoomPage = () => {
  const { id }: any = useParams();
  const [openSettingsModal, setOpenSettingsModal] = useState(false);
  const [openPlaylistModal, setOpenPlaylistModal] = useState(false);
  const [openLeaveRoomModal, setOpenLeaveRoomModal] = useState(false);
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const { djRoom, getDjRoom, disjoinDjRoom } = useContext(DjRoomContext);
  const {currentSong, currentSongIndex} = useContext(PlaylistContext)
  const [userId, setUserId] = useState<string | null>();
  // const [isOwner, setIsOwner] = useState(false);
  const { setInDjRoom, whatAmI, iAm } = useContext(UserContext);
  const history = useHistory();

  const [ playListId, setPlaylistId ] = useState('');
  
  const USER_CHANGE_SUBSCRIPTION = gql`
  subscription {
    userChangeDjRoom {
      _id
      email
      username
    }
  }
`;
  
  useEffect(() => {
    const userId = localStorage.getItem('userId');
    setUserId(userId);
    getCurrentDjRoom();
    whatAmI(userId);
    setInDjRoom(true);
    if(djRoom.playlist)
    setPlaylistId(djRoom.playlist._id);
  }, []);


  const getCurrentDjRoom = async () => {
    await getDjRoom(id);
  }

  const handleCopy = () => {
  setOpenSnackBar(true);
  const el = document.createElement("input");
    el.value = window.location.href;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
  }

  const handleExit = async () => {

    setOpenLeaveRoomModal(true)

    // await disjoinDjRoom(userId);
    // setInDjRoom(false);
    // history.push('/myPlaylist');
  }

    const { data, loading } = useSubscription(
      USER_CHANGE_SUBSCRIPTION,
    );
  
    useEffect( () => {
      if(!loading && data){
        getCurrentDjRoom();

        if(iAm) {
          console.log('only for dj room owner')
          console.log(data.userChangeDjRoom, 'user left/joined to dj room');
        }
      }
    }, [data, loading]) 

  const renderIcons = () => (
    <StyledHeaderWrapper>
      <ExitToAppIcon onClick={handleExit} style={{ cursor: 'pointer' }} />
      {currentSong[currentSongIndex] && !iAm ? <StyledSongTitle>{currentSong[currentSongIndex].title}</StyledSongTitle> : <p></p>}
      {iAm ? <SettingsIcon onClick={() => setOpenSettingsModal(true)} style={{ justifySelf: 'end', cursor: 'pointer' }} /> : <p></p>}
      {iAm ? <QueueMusicIcon onClick={() => setOpenPlaylistModal(true)} style={{ justifySelf: 'end', cursor: 'pointer' }} /> : <p></p>}
      <ShareIcon onClick={handleCopy} style={{ justifySelf: 'end', cursor: 'pointer' }} />
    </StyledHeaderWrapper>
  )

  return  (
    <StyledWrapper>
    <StyledSettingsWrapper>{renderIcons()}</StyledSettingsWrapper>
    {Object.prototype.toString.call(djRoom) === '[object Object]' && <Bubbels data={djRoom} />}
      <DjRoomSettingsModal open={openSettingsModal} setOpen={setOpenSettingsModal} data={djRoom} />
      <DjRoomOwnersPlaylistModal open={openPlaylistModal} setOpen={setOpenPlaylistModal} playListId={playListId} />
      <LeaveRoomModal open={openLeaveRoomModal} setOpen={setOpenLeaveRoomModal} />
    {openSnackBar && <SnackBar
        snackbarContent="Copied!"
        open={openSnackBar}
        setOpen={setOpenSnackBar}
      />}      
  </StyledWrapper>  
  );
}

export default DjRoomPage;