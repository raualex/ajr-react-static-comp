import React, { Component } from 'react';
import '../css/component.css';
import laibachasz from '../images/laibachasz.jpg'

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
        <h1>Hello World!</h1>
        <button>Do This</button>
        <span>{this.state.count}</span>
      </div>
    );
  }
}

export default Topstory;