import React from 'react';

import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';


class App extends React.Component{

	constructor(){
		super();
		this.state = {
			fishes: {},
			order: {}
		};

		this.addFish = this.addFish.bind(this);
		this.loadSamples = this.loadSamples.bind(this);
		this.addToOrder = this.addToOrder.bind(this);
	}

	addFish(fish){
		// instead of just changing this.state directly, use this.setState to update efficiently

		// get copy of current state
		const fishes = {...this.state.fishes};

		// update COPY of state rather than original state itself
		const timestamp = Date.now();
		fishes[`fish-${timestamp}`] = fish;

		// set state to new copy (react will update dom everywhere as needed)
		this.setState({ fishes }); // note this uses es6 shortening of {fishes:fishes}
	}

	loadSamples(){
		this.setState(
			{fishes: sampleFishes}
		);
	}


	addToOrder(key){
		const order = {...this.state.order};

		order[key] = order[key] + 1 || 1;

		this.setState({order});
	}


	render(){
		return(
			<div className="catch-of-the-day">
				<div className="menu">
					<Header tagline="Fresh seafood market" />
					<ul className="list-of-fishes">
						{
							Object
								.keys(this.state.fishes)
								.map(key => <Fish
									key={key}
									index={key}
									details={this.state.fishes[key]}
									addToOrder={this.addToOrder}
								/>)
						}
					</ul>
				</div>
				<Order order={this.state.order} fishes={this.state.fishes} />
				<Inventory addFish={this.addFish} loadSamples={this.loadSamples} />
			</div>
		);
	}
}


export default App;