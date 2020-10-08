import React, { Component } from 'react';
import TextLabel from './TextLabel';
import TimeLabel from './TimeLabel';
import Button from './Button';

class Timer extends Component {

	constructor(props) {
		super(props);

		this.state = {
			currentState: 'Start',
			seconds: 0,
			minutes: 0,
		};
	}

	handleStateChange = (currentState) => {

    if (currentState === 'Start') {
    	this.startTimer();
    } else if (currentState === 'Pause') {
    	clearInterval(this.interval);
    } else {
    	clearInterval(this.interval);
      this.setState({
      	seconds: 0,
      	minutes: 0,
      });
    }

    const newState = (currentState === 'Pause' || currentState === 'Reset') ? 'Start' : 'Pause';
    this.setState({
      currentState: newState,
    });
	}

	startTimer = () => {
	  this.interval = setInterval(() => {
	    const { seconds, minutes } = this.state
      this.setState(({ seconds }) => ({
        seconds: seconds + 1
      }));

      if (seconds === 59) {
        this.setState(({ minutes }) => ({
          minutes: minutes + 1,
          seconds: 0,
        }));

        if (minutes === 4) {
        	clearInterval(this.interval);
        	this.setState({
        		currentState: 'Reset',
        	});
        }
      }
	  }, 1000)
	}

	render() {
	  return (
	    <div className="timer">
	      <TextLabel />
	      <TimeLabel {...this.state} />
	      <Button
	        handleStateChange={this.handleStateChange}
	        {...this.state} 
	      />
	    </div>
	  );
	}
}

export default Timer;
