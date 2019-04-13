import React, { Component } from 'react';
import { Button, Container } from 'reactstrap';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import ThoughtCard from './ThoughtCard';


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
              <ThoughtCard 
                key={id}
                deleteThought={this.deleteThought}
                content={content}
                id={id}
                mood={mood}
                timeStamp={timestamp}
                />
            ))}
          </div>  
      </Container>
    )
  }
}

export default Input;