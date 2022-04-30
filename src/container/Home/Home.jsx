/* eslint-disable require-jsdoc */
import React, {Component} from 'react';
import YoutubeComp from '../../component/youtubeComp/YoutubeComp';

class Home extends Component {
  render() {
    return (
      <div>
        <p>YouTube Component</p>
        <hr />
        <YoutubeComp
          time="7.12"
          title="Cara Membuat Sate"
          desc="10x ditonton, 2 hari yang lalu"/>
        <YoutubeComp
          time="8.34"
          title="Cara Membuat Boneka"
          desc="200x ditonton, 10 hari yang lalu"/>
        <YoutubeComp
          time="5.14"
          title="Cara Mengubah Tampilan PC"
          desc="500x ditonton, 14 hari yang lalu"/>
        <YoutubeComp/>
      </div>
    );
  }
}

export default Home;
