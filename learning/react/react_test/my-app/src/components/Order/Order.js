import React from 'react';
import OrderItem from '../OrderItem/OrderItem';

class Order extends React.Component{

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

					{
						pizzaIds.map(key => {
							const qty = this.props.order[key];

							return qty>0 && (
								<OrderItem
									key={key}
									pizzaId={key}
									pizzaData={this.props.pizzaData[key]}
									qty={qty}
									updateQty = {this.props.updateQty}
								/>
							);
						})
					}

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