import React, { Component } from 'react';
import Lottie from 'react-lottie';
import animationData from './Animation/first.json';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      isPaused:false
    }
  }
  
  render(){
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };
    const buttonStyle = {
      display: "block",
      margin: "10px auto"
    };
  return (
   
      <div style={{position:"fixed",top:"30%",left:"40%"}}>
      <Lottie 
	      options={defaultOptions}
        height={200}
        width={200}
        isPaused={ this.state.isPaused }
      />
      <button
          style={buttonStyle}
          onClick={() => this.setState({ isPaused: !this.state.isPaused })}
        >
          pause/play
        </button>
      </div>
    
  );
  }
}
export default  App;