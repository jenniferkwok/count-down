	import React, { Component } from 'react';
	import './App.css';

	class App extends Component {
		constructor(props) {
			super(props);
			this.state = {
				deadline: 'January 1, 2019',
				newDeadline: ''
			}
		}

		changeDeadline(){
			// console.log('state', this.state);
			this.setState({deadline: this.state.newDeadline});

		}
		render() {
			return(
			<div className="App">
				<div className="App-title">
				Count down to {this.state.deadline}!</div>
				<div>
					<div className="Clock-days">14 days</div>
					<div className="Clock-hours">20 hours</div>
					<div className="Clock-minutes">10 minutes</div>
					<div className="Clock-seconds">50 seconds</div>
				</div>
				<div>
				<input placeholder='new date'
				onChange={event => this.setState({newDeadline: event.target.value})}/>
				<button onClick={() => this.changeDeadline()}>Submit</button>
				</div>
			</div>
				)
			}
		}

		export default App;
