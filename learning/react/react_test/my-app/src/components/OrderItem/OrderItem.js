import React from 'react';

class OrderItem extends React.Component{
	constructor(){
		super();

		this.decreaseQty = this.decreaseQty.bind(this);
		this.increaseQty = this.increaseQty.bind(this);
	}

	decreaseQty(e){
		const pizzaId = this.props.pizzaId;
		const qty = this.props.qty;
		this.props.updateQty(pizzaId, qty-1);
	}

	increaseQty(e){
		const pizzaId = this.props.pizzaId;
		const qty = this.props.qty;
		this.props.updateQty(pizzaId, qty+1);
	}

	render(){
		const {name,price} = this.props.pizzaData;
		const qty = this.props.qty;

		return(
			<li>
				<button className="change_qty" onClick={this.decreaseQty}>-</button>
				<span className="order-item-qty">{qty}</span>
				<button className="change_qty" onClick={this.increaseQty}>+</button>
				
				<span className="order-item-name">{name}</span>
				<span className="right">
					${(price * qty).toFixed(2)}
				</span>
			</li>
		);
	}
}

export default OrderItem;
