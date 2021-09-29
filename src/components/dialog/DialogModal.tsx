import DialogTitle from '@mui/material/DialogTitle';
import { Dialog } from "@mui/material";
import { StyledList, StyledListItem } from './StyledDialog'

interface Playlist {
  id: string,
  name: string
}

interface SongProps {
  name: string,
  videoId: string,
  duration: number,
  imgUrl: string
}

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  playlists: Playlist[];
  song: SongProps;
  handleAddToPlaylist: (song: SongProps, playlist: Playlist) => void
}

const DialogModal = ({open, setOpen, playlists, song, handleAddToPlaylist}: Props) => {
  
  const handlePlaylist = (playlist: Playlist) => {
    handleAddToPlaylist(song, playlist)
    setOpen(false);
  }

  return (
    <Dialog onClose={() => setOpen(false)} open={open} >
      <DialogTitle style={{ borderBottom: '1px solid black' }}>Choose a playlists to add {song.name} to:</DialogTitle>
      <StyledList>
        {playlists.map(playlist => (
          <StyledListItem key={playlist.id} onClick={() => handlePlaylist(playlist)}>
            {playlist.name}
          </StyledListItem>
        ))}
      </StyledList>
    </Dialog>
  )
}

export default DialogModal; 