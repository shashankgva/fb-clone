import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { Avatar, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStateValue } from './StateProvider';
import './Header.css';

function Header() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fundersavedandoverweight.com%2F2018%2F08%2F22%2Fthe-long-road-part-1%2F&psig=AOvVaw1I6uGfLuD7mURJXDLNH7xK&ust=1624778306576000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCKCf1IDhtPECFQAAAAAdAAAAABAI"
          alt=""
        />
        <div className="header__input">
          <SearchIcon />
          <input type="text" placeholder="Search Facebook" />
        </div>
      </div>
      <div className="header__center">
        <div className="header__option header__option--active">
          <HomeIcon fontSise="large" />
        </div>
        <div className="header__option">
          <FlagIcon fontSise="large" />
        </div>
        <div className="header__option">
          <SubscriptionsIcon fontSise="large" />
        </div>
        <div className="header__option">
          <StorefrontIcon fontSise="large" />
        </div>
        <div className="header__option">
          <SupervisedUserCircleIcon fontSise="large" />
        </div>
      </div>
      <div className="header__right">
        <div className="header__info">
          <Avatar src={user.photoURL} />
          <h4>{user.displayName}</h4>
        </div>
        <IconButton>
          <AddIcon />
        </IconButton>
        <IconButton>
          <ForumIcon />
        </IconButton>
        <IconButton>
          <NotificationsActiveIcon />
        </IconButton>
        <IconButton>
          <ExpandMoreIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
