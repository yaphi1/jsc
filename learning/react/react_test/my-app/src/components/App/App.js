import React from 'react';
import logo from '../../assets/logo.svg';
import './App.css';

import Pizza from '../Pizza/Pizza';
import Order from '../Order/Order';

import pizzaData from '../../utils/data/pizzaData';

class App extends React.Component {

	constructor(){
		super();

		this.state = {
			order:{}
		};

		this.addToOrder = this.addToOrder.bind(this);
		this.updateQty = this.updateQty.bind(this);
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

	render() {
		return (
			<div className="App">
				<img src={logo} className="App-logo" alt="logo" />
				<h1 className="App-title">React Pizza</h1>

				<section className="interactive-section">

					<div className="pizza-container">
						{
							Object.keys(pizzaData).map((key)=>{
								return (
									<Pizza
										key={key}
										id={key}
										pizzaData={pizzaData[key]}
										addToOrder={this.addToOrder}
									/>
								);
							})
						}
					</div>

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
