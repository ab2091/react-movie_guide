import React from "react";
import {SocialIcon} from "react-social-icons";

const barstyle = {
  backgroundColor: 'black',
  color: 'white',
  padding: '10px',
  height: '100px',
  marginTop: '0.5%',
  width: '100%',
};

const pstyle = {
  display: 'flex',
  justifyContent: 'center',
  textAlign: 'center',
  color: 'white',
  marginBottom: '0',
};

const iconContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const foot = () => {
  return (
    <header style={barstyle}>
      <div style={pstyle}>
        <p>All Rights Reserved</p>
      </div>
      <div style={iconContainerStyle}>
        <p>Follow us:</p>
        <SocialIcon url="https://www.facebook.com/netflix" style={{ height: 25, width: 25, marginLeft: '1%' }} />
        <SocialIcon url="https://www.instagram.com/netflix/" style={{ height: 25, width: 25, marginLeft: '1%' }} />
        <SocialIcon url="https://twitter.com/netflix" style={{ height: 25, width: 25, marginLeft: '1%' }} />
      </div>
    </header>
  );
};

export default foot;
