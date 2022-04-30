import React from 'react';
import './YoutubeComp.css';
const YoutubeComp = () => {
  return (
    <div className="youtube-wrapper">
      <div className="img-thumb">
        <img src="https://images.unsplash.com/photo-1651132137168-8bef9d88623d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" alt="" />
        <p className="time">7.12</p>
      </div>
      <p className='title'>title here</p>
      <p className='desc'>desc here</p>
    </div>
  );
};

export default YoutubeComp;
