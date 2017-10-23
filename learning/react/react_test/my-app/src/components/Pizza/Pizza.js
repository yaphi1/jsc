import React from 'react';

// import './Pizza.css';

class Pizza extends React.Component{
	constructor(){
		super();

		this.addToOrder = this.addToOrder.bind(this);
	}

	addToOrder(e){
		const pizzaId = this.props.id;
		this.props.addToOrder(pizzaId);
	}

	render(){
		return (
			<div className="pizza">
				<h3>Pizza: {this.props.name}</h3>
				<p>${this.props.price}</p>
				<button onClick={this.addToOrder}>Add to Order</button>
			</div>
		);
	}
}

export default Pizza;