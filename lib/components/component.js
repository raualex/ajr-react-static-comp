import React, { Component } from 'react';
import '../css/component.css';
// import laibachasz from '../images/laibachasz.jpg'
import pigr from '../images/pigr.jpg'
import vnvtansn from '../images/vnvtransn.jpg'
import mbmis from '../images/mbmis.jpg'

class Topstory extends Component {
  constructor() {
    super();

    this.state = {
      count: 0
    }
  }

  render() {
    return (
      <div className="topStoryCard">
      <img src={require("../images/laibachasz.jpg")} alt="" />
        <h1>Hello World!</h1>
        <button>Do This</button>
        <span>{this.state.count}</span>
      </div>
    );
  }
}

export default Topstory;