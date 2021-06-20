import React from 'react';
import { Avatar } from '@material-ui/core';
import './Story.css';

function Story(props) {
  const { title, profileSrc, image } = props;
  return (
    <div className="story" style={{ backgroundImage: `url(${image})` }}>
      <Avatar className="story__avatar" src={profileSrc} />
      <h4>{title}</h4>
    </div>
  );
}

export default Story;
