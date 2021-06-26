import React from 'react';
import './StoryReel.css';
import Story from './Story';

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        key="reel1"
        title="Bus sized"
        profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSvHCof2YCjtaXixvVIDzfZAZveHdpWcIAjBQ&usqp=CAU"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT2sP6eackgnhpwt7ouRCjgKzK6_VLOrOvdDg&usqp=CAU"
      />
      <Story
        key="reel2"
        title="Bus sized"
        profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQZNnjND3SbW8xZrUrbNMy6ZYuZmXhozTwpNw&usqp=CAU"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSVYPUwZ0pbd27eUKHsb0_ZIrNsp4E4kCTnJw&usqp=CAU"
      />
      <Story
        key="reel3"
        title="Bus sized"
        profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQfET-2iSrMMbUje0B97QXty0Q3GVQhplZamA&usqp=CAU"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTOqHTAh3xGFN5C-wFGup0J2-Sl70Ihirw2fQ&usqp=CAU"
      />
      <Story
        key="reel4"
        title="Bus sized"
        profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTIE0bx-ISFsEYMIZNn0vbCgLDaIzsGFw6Wgw&usqp=CAU"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTXK11cXKumvSjHHKKxFwJkY9INBbGwUqfg0A&usqp=CAU"
      />
      <Story
        key="reel5"
        title="Bus sized"
        profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQt569mzjGXnZ1PIZaLDFOTJ2NLGFXM9YJBNw&usqp=CAU"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSuALEmTp2voj_C7MUOjQN7MNQ0d5V5yrrWfg&usqp=CAU"
      />
    </div>
  );
}

export default StoryReel;
