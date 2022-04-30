/* eslint-disable require-jsdoc */
import React, {Component} from 'react';
import YoutubeComp from '../../component/youtubeComp/YoutubeComp';

class Home extends Component {
  render() {
    return (
      <div>
        <p>YouTube Component</p>
        <hr />
        <YoutubeComp/>
        <YoutubeComp/>
        <YoutubeComp/>
        <YoutubeComp/>
      </div>
    );
  }
}

export default Home;
