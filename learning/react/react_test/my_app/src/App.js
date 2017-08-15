import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


const react_title = <h2>Welcome to React YES</h2>;

const users = [{
		name: 'waluigi',
		bg: 'purple',
		fg: '#fff'
	},
	{
		name: 'wario',
		bg: 'yellow',
		fg: '#333'
	}
]

function showProfile(user){
	const element = (
		<div style={{backgroundColor: user.bg, padding:'40px'}}>
			{user.name}
		</div>
	);
	return element;
}

class App extends Component {
	render() {
		return (
			<div className="App">
				<div className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					{react_title}
				</div>
				<p className="App-intro">
					To get started, edit <code>src/App.js</code> and save to reload.
				</p>
				<p>
					This could say anything.
				</p>
				<div>
					{showProfile(users[1])}
				</div>
			</div>
			);
	}
}

export default App;
