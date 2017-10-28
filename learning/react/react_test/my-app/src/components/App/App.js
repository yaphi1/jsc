import React from 'react';
import logo from '../../assets/logo.svg';
import './App.css';

import PizzaContainer from '../PizzaContainer/PizzaContainer';
// import Pizza from '../Pizza/Pizza';
import Order from '../Order/Order';
import SearchBar from '../SearchBar/SearchBar';

import pizzaData from '../../utils/data/pizzaData';

class App extends React.Component {

	constructor(){
		super();

		this.state = {
			order: {},
			query: ''
		};

		this.addToOrder = this.addToOrder.bind(this);
		this.updateQty = this.updateQty.bind(this);
		this.filterPizzas = this.filterPizzas.bind(this);
	}

	addToOrder(pizzaId){
		const order = {...this.state.order};

		order[pizzaId] = order[pizzaId]+1 || 1;

		this.setState({order});
	}

	updateQty(pizzaId, newQty){
		const order = {...this.state.order};
		if(newQty<0){ newQty=0; }
		order[pizzaId] = newQty;
		this.setState({order});
	}

	filterPizzas(query){
		this.setState({query});
	}

	render() {
		return (
			<div className="App">
				<img src={logo} className="App-logo" alt="logo" />
				<h1 className="App-title">React Pizza</h1>

				<section className="interactive-section">

					<SearchBar filterPizzas={this.filterPizzas} />

					<PizzaContainer
						pizzaData={pizzaData}
						addToOrder={this.addToOrder}
						query={this.state.query}
					/>

					<Order
						order={this.state.order}
						pizzaData={pizzaData}
						updateQty={this.updateQty}
					/>
				</section>
			</div>
		);
	}
}

export default App;
