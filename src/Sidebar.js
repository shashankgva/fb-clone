import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStateValue } from './StateProvider';

function Sidebar() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="sidebar">
      <SidebarRow title={user.displayName} src={user.photoURL} key="sidebar1" />
      <SidebarRow
        title="Covid 19 Info"
        Icon={LocalHospitalIcon}
        key="sidebar2"
      />
      <SidebarRow title="Pages" Icon={EmojiFlagsIcon} key="sidebar3" />
      <SidebarRow title="Friends" Icon={PeopleIcon} key="sidebar4" />
      <SidebarRow title="Messages" Icon={ChatIcon} key="sidebar5" />
      <SidebarRow title="Market Place" Icon={StorefrontIcon} key="sidebar6" />
      <SidebarRow title="Videos" Icon={VideoLibraryIcon} key="sidebar7" />
      <SidebarRow title="See More" Icon={ExpandMoreIcon} key="sidebar8" />
    </div>
  );
}

export default Sidebar;
