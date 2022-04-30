/* eslint-disable react/prop-types */
import React from 'react';
import './YoutubeComp.css';
const YoutubeComp = (props) => {
  return (
    <div className="youtube-wrapper">
      <div className="img-thumb">
        <img src="https://images.unsplash.com/photo-1651132137168-8bef9d88623d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" alt="" />
        <p className="time">{props.time}</p>
      </div>
      <p className='title'>{props.title}</p>
      <p className='desc'>{props.desc}</p>
    </div>
  );
};

YoutubeComp.defaultProps = {
  time: '00.00',
  title: 'Title here',
  desc: 'xxx ditonton, x hari yang lalu',
};

export default YoutubeComp;
