import React, { Component } from 'react';
import { Button, Container } from 'reactstrap';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';


/* This component is becoming too large and needs to be restructured*/
class Input extends Component {

  constructor(props) {
  super(props);
    this.state = {
      thoughts : []
    }
  }

  // handles posts to db and makes call to getAllThoughts() to update state
  // data parameter comes from prompt in render method
  postThought = (data) => {
    axios.post('http://localhost:5000/thoughts/', {
      content: data
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
    //update state
    .then(()=>{
      this.getAllThoughts();
    });
  }

  // handles deletes from db and makes a call to getAllThoughts() to update state
  // id parameter comes from onClick() of corresponding thought view.
  deleteThought = (id) => {
    axios.delete(`http://localhost:5000/thoughts/${id}`)
      .catch(function (error) {
        console.log(error);
      })
      .then( (id) => {
        this.setState( state => ({
          thoughts: state.thoughts.filter(thought => thought.id !== id )
        }));
      })
      .then(()=>{
        this.getAllThoughts();
      });
  }

  
  // handles syncing API with this.state
  getAllThoughts = () => {
    axios.get('http://localhost:5000/thoughts/')
    //handle success
    .then(res => {
      console.log("syncing state with API")
      this.setState(state => ({
        thoughts: res.data
      }))})
    //handle error
    .catch(err => {console.log(err)}) 
  }

  componentWillMount() {
      this.getAllThoughts();
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
                this.postThought(content);
              }
            }}
            >Add Your Thoughts
          </Button>

          <div className="flex-container" style={{marginTop:'2rem'}}>
            {thoughts.map(({id, mood, content, timestamp})  => (
              <div key={id}>
                <Button
                  className="remove-btn"
                  color="danger"
                  size="sm"
                  style={{
                    marginRight: "auto"
                  }}
                  onClick={ () =>
                    this.deleteThought(id)
                  }
                  >&times;
                </Button>
                <p>{ `ID: ${id}` }</p>
                <p>{ `Mood: ${mood}` }</p>
                <p>{ `Content: ${content}` }</p>
                <p>{ `Timestamp: ${timestamp}` }</p>
              </div>
            ))}
          </div>  
      </Container>
    )
  }
}

export default Input;