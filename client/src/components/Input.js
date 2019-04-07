import React, { Component } from 'react';
import { Button, Container } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';


class Input extends Component {
  constructor(props) {
  super(props);
    this.state = {
      thoughts : [
        { 
          id: 1,
          content: "Content1",
          mood: "Mood1",
          timestamp: "timetime"
        },
        { 
          id:5,
          content: "Content2",
          mood: "Mood2",
          timestamp: "timetimetime"
        },
      ]
    }
  }

  // constructor(props) {
  // super(props);
  //   this.state = { thoughts: [

  //   ]};
  // }

  //fetch call to grab items in our db
  getThoughtsFromAPI() {
    fetch("http://localhost:5000/thoughts/")
      .then(res => {return res.json()})
      .then(res => this.setState(state => ({
        thoughts: state.thoughts.concat(res)
      })));        
  }

  componentWillMount() {
      this.getThoughtsFromAPI();
  }

  render() {

    const  { thoughts } = this.state;
    
    console.log(thoughts);

    return (
      <Container>
        <Button 
          style={{marginTop: '1rem'}}
            onClick={() => {
              //prompt user for input
              const content = prompt('Your thoughts go here');
              //add it to state if user enters something
              if(content) {
                this.setState(state => ({
                  thoughts: [...state.thoughts, { content }]
                }));
              }
            }}
            >Add Your Thoughts</Button>
          <div className="flex-container" style={{marginTop:'2rem'}}>
          {/* <p>{this.state.apiResponse}</p> */}
            {thoughts.map( (index, id)  => (
              <div key={id}>
                <p>{ `ID: ${index.id}` }</p>
                <p>{ `Mood: ${index.mood}` }</p>
                <p>{ `Content: ${index.content}` }</p>
                <p>{ `Timestamp: ${index.timestamp}` }</p>
              </div>
            ))}
          </div>  
          
      </Container>
    )
  }
}

export default Input;