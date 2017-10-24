import React from 'react';


class Order extends React.Component{

	constructor(){
		super();

		this.renderOrderItem = this.renderOrderItem.bind(this);
	}

	renderOrderItem(key){
		const {name,price} = this.props.pizzaData[key];
		const qty = this.props.order[key];

		return(
			<li key={key}>
				{qty} {name}
				<span className="right">
					${(price * qty).toFixed(2)}
				</span>
			</li>
		);
	}

	render(){

		const pizzaIds = Object.keys(this.props.order);

		const total = pizzaIds.reduce((total,current)=>{
			const {price} = this.props.pizzaData[current];
			const qty = this.props.order[current];
			return total + (price*qty);
		},0);

		return (
			<div className="order-container">
				<h2>order</h2>
				<ul className="order-items">

					{ pizzaIds.map(this.renderOrderItem) }

					<li className="order-total">
						Total
						<span className="right">
							${(total).toFixed(2)}
						</span>
					</li>
				</ul>
			</div>
		);
	}
}


export default Order;