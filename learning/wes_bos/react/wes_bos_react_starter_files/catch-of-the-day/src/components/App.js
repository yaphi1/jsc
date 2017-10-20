import React from 'react';

import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';


class App extends React.Component{

	constructor(){
		super();
		this.state = {
			fishes: {},
			order: {}
		};

		this.addFish = this.addFish.bind(this);
	}

	addFish(fish){
		// get copy of current state
		const fishes = {...this.state.fishes};

		// update COPY of state rather than original state itself
		const timestamp = Date.now();
		fishes[`fish-${timestamp}`] = fish;

		// set state to new copy (react will update dom everywhere as needed)
		this.setState({ fishes }); // note this uses es6 shortening of {fishes:fishes}
	}

	render(){
		return(
			<div className="catch-of-the-day">
				<div className="menu">
					<Header tagline="Fresh seafood market" />
				</div>
				<Order />
				<Inventory addFish={this.addFish} />
			</div>
		);
	}
}


export default App;