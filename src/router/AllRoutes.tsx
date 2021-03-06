import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ArtistPage from "../pages/artistPage/ArtistPage";
import CreateDjRoom from "../pages/createDjRoom/CreateDjRoom";
import DjRoomPage from "../pages/djRoomPage/DjRoomPage";
import DjRoomsPage from "../pages/djRoomsPage/DjRoomsPage";
import HomePage from "../pages/homePage/HomePage";
import LandingPage from "../pages/landingPage/LandingPage";
import MyPlaylistsPage from "../pages/myPlaylistsPage/MyPlaylistsPage";
import PlaylistPage from "../pages/playlistPage/PlaylistPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import RegisterPage from "../pages/registerPage/RegisterPage";
import SearchPage from "../pages/searchPage/SearchPage";
import {Redirect} from 'react-router-dom'


interface Props {
  children: JSX.Element[]
}

const AllRoutes: React.FC<Props> = ({children}: Props) => {

  return(
    <Router>
      {children}
      <Switch>
        <Route path="/" exact={true} component={LandingPage}>
          {localStorage.getItem('userId') && <Redirect to="/home" />}
        </Route>
        <Route path="/home" exact={true} component={HomePage} />
        <Route path="/register" exact={true} component={RegisterPage} />
        <Route path="/myPlaylist" exact={true} component={MyPlaylistsPage} />
        <Route path="/playlist/:id" exact={true} component={PlaylistPage} />
        <Route path="/search" exact={true} component={SearchPage} />
        <Route path="/profile" exact={true} component={ProfilePage} />
        <Route path="/artist/:id" exact={true} component={ArtistPage} />
        <Route path="/djrooms" exact={true} component={DjRoomsPage} />
        <Route path="/djroom/:id" exact={true} component={DjRoomPage} />createDjRoom
        <Route path="/createDjRoom/:id?" exact={true} component={CreateDjRoom} />
      </Switch>
    </Router>
  )
}

export default AllRoutes;