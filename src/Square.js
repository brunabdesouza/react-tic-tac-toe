import React from 'react';


function Square(props) {
    return (
      <button className = "square"
        onClick={props.onClick}>
        {props.value}
        </button>
    );
  }// function square

export default Square;
