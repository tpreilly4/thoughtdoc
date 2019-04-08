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

  // handles posts to db and makes call to syncAPI() to update state
  // data parameter comes from prompt in render method
  giveThoughtsToAPI = (data) => {
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
      this.syncAPI();
    });
  }

  // handles syncing API with this.state
  syncAPI = () => {
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
      this.syncAPI();
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
                this.giveThoughtsToAPI(content);
              }
            }}
            >Add Your Thoughts
          </Button>

          <div className="flex-container" style={{marginTop:'2rem'}}>
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