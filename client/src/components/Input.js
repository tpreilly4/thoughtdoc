import React, { Component } from 'react';
import { Button, ListGroup, ListGroupItem, Container } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';


class Input extends Component {
  state = {
    thoughts : [
      { id: 1, content: 'Here\'s a thought...' },
      { id: 2, content: 'Here\'s another thought...' }
    ]
  }

  render() {

    const  { thoughts } = this.state;

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
            {thoughts.map( (index, id)  => (
              <div key={id}><p>{ index.content }</p></div>
            ))}
          </div>  
          
      </Container>
    )
  }
}

export default Input;