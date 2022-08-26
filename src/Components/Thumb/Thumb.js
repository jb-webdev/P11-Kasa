import React from 'react';
import "./Thumb.css";

function Thumb(props) {
  return (
    <div className="home-thumb">
        <h2 className="home-thumb-title">{props.title}</h2>
    </div>
  )
}

export default Thumb;