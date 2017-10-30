import React from 'react';
import OrderItem from '../OrderItem/OrderItem';

import PropTypes from 'prop-types';

import { CSSTransition, TransitionGroup } from 'react-transition-group';

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
				<h2>Your Order</h2>
				<ul className="order-items">
					<TransitionGroup>
						{
							pizzaIds.map(key => {
								const qty = this.props.order[key];

								return qty>0 && (
									<CSSTransition
										key={key}
										timeout={300}
										classNames="fade"
									>
										<div className="fade_anim_container">
											<OrderItem
												pizzaId={key}
												pizzaData={this.props.pizzaData[key]}
												qty={qty}
												updateQty = {this.props.updateQty}
											/>
										</div>
									</CSSTransition>
								);
							})
						}
					</TransitionGroup>

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

Order.propTypes = {
	order: PropTypes.object.isRequired,
	pizzaData: PropTypes.object.isRequired,
	updateQty: PropTypes.func.isRequired,
};

export default Order;