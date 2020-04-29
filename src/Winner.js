import React, { Component } from "react";

export default class Winner extends Component {
  handleClick = () => {
   this.props.toggle();
  };
render() {
  return (
   <div className="modal">
     <div className="modal_content">
     <span className="close" onClick={this.handleClick}>&times;    </span>
     <h1>Congratulations!</h1>
     <p>You won!</p>
    </div>
   </div>
  );
 }
}