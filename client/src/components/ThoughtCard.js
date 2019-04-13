import React, { Component } from 'react';
import './components.css';
import { Button } from 'reactstrap';


class ThoughtCard extends Component {



  render() {
    return (
      <div className="cardContainer">
        <div className="topDiv">
          <div className="timeStamp">
            <p>id{this.props.id} | timestamp{this.props.timeStamp}</p>
          </div>
          <Button
            className="remove-btn"
            color="danger"
            onClick={ () => this.props.deleteThought(this.props.id) }
            >&times;
          </Button>
          <div className="thoughtDiv">
            <p className="thoughtText">{this.props.content}</p>
          </div>

        </div>
        <div className="bottomDiv">
          <div className="moodDiv">
            <p className="moodText">I'm feeling... {this.props.mood}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default ThoughtCard;


