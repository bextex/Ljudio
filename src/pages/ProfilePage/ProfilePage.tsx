import React,{ useState, useRef, useContext, useEffect } from "react";
import CreateIcon from '@material-ui/icons/Create';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CheckIcon from '@material-ui/icons/Check';
import { UserContext } from '../../contexts/usersContext/UserContextProvider';
 
import {
  StyledWrapper,
  StyledName,
  StyledNameDiv,
  StyledTitleDiv,
  StyledNameSpan,
  StyledNameInput,
  StyledEditDiv
} from "./StyledProfilePage";
import { useThemeWithoutDefault } from '@mui/system';


const ProfilePage: React.FC = () => {
  const { user, getUser, changeUsername } = useContext(UserContext);
  const [userId, setUserId] = useState<string | null>();
  // const [name, setName] = useState('');
  const [editName, setEditName] = useState(false);
  const newName: any = useRef();
  const editHandler = () => {
      setEditName(!editName);
  }

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    setUserId(userId);
  }, []);


  useEffect(() => {
    if (userId) {
      getCurrentUser();
    }
  }, [userId]);


  const getCurrentUser = async () => {
    await getUser(userId);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const saveEditName = async (ref: any, setEditName: any) => {
    setEditName(!editName);
    await changeUsername(userId, ref.current.value);
    // setName(ref.current.value)
    // console.log(ref.current.value, "hmm")
  }


  return (
    <StyledWrapper>
      <StyledTitleDiv>
        <AccountCircleIcon color="secondary" fontSize="large" /><StyledNameSpan>My Profile</StyledNameSpan>
      </StyledTitleDiv>
      {!editName ? <StyledNameDiv>
        <CreateIcon onClick={editHandler} fontSize="small" /><StyledName>{user?.username}</StyledName>
       
      </StyledNameDiv> : <StyledEditDiv><CheckIcon onClick={() => saveEditName(newName, setEditName)} fontSize="small" /><StyledNameInput ref={newName} placeholder={user?.username} type="text" /></StyledEditDiv>}


    </StyledWrapper>

  );
}

export default ProfilePage;