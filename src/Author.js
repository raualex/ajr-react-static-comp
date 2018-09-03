import React from 'react';
import './Story.css';
import './Author.css';


const Author = (props) => {
  console.log(props)
  return (
    <div className='story-author-info'>
      <img src={props.author.story.authImg} className='story-author-image' />
      <div className='story-author-text'>
        <h4>{props.author.story.authName}</h4>
        <h4>{props.author.story.estTime} read</h4>
      </div>
    </div>
  )
}


export default Author;
