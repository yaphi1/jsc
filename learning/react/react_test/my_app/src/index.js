import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));


const profileData = [
	{id:'001', name:'alice', city:'washington'},
	{id:'002', name:'bob', city:'sacramento'},
	{id:'003', name:'calvin', city:'chicago'}
];

function Profile(props){
	return (
		<div className="profile">
			<div>Name: {props.name}</div>
			<div>City: {props.city}</div>
			<br />
		</div>
	);
}

const allProfiles = profileData.map((v,i)=>{
	return (
		<Profile key={v.id} name={v.name} city={v.city} />
	);
});


class Clock extends React.Component {
	constructor(props){
		super(props);
		this.state = {date: new Date()};
	}

	componentDidMount(){
		this.timerID = setInterval(()=>{
			this.tick();
		},1000);
	}
	componentWillUnmount(){
		clearInterval(this.timerID);
	}

	tick(){
		this.setState({date: new Date()});
	}

	render(){
		return (
			<div>{this.state.date.toLocaleTimeString()}</div>
		);
	}
}


function ActionLink(){
	function handleClick(e){
		e.preventDefault();
		console.log('link was clicked');
	}

	return (
		<a href="#" onClick={handleClick}>Click this</a>
	);
}



const payload = (
	<div>
		<h1>Profile list</h1>
		{allProfiles}
		Clock: <Clock />
		<br />
		<ActionLink />
		<br /><br />
		Another clock: <Clock />
	</div>
);

// const testProfile = <Profile name="TestName" city="TestCity" />;

/*const payload = (
	<div>
		<App />
		<h1>Hello world!</h1>
		{allProfiles}
	</div>
);*/

ReactDOM.render(
	payload,
	document.getElementById('root')
);

registerServiceWorker();
