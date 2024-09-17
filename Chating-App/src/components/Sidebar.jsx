import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ setSelected }) => {
  return (
    <div className="sidebar">
      <div className="profile-icon">👤</div>
      <div className="section">
        <h3>Channels</h3>
        <ul>
          <li><Link to="/channel/channel1" onClick={() => setSelected('channel1')}># Channel 1</Link></li>
          <li><Link to="/channel/channel2" onClick={() => setSelected('channel2')}># Channel 2</Link></li>
        </ul>
      </div>
      <div className="section">
        <h3>Direct Messages</h3>
        <ul>
          <li><Link to="/dm/user1" onClick={() => setSelected('user1')}>User 1</Link></li>
          <li><Link to="/dm/user2" onClick={() => setSelected('user2')}>User 2</Link></li>
          <li><Link to="/dm/user3" onClick={() => setSelected('user3')}>User 3</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
