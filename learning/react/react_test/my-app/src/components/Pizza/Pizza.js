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
		const {name, price, img} = this.props.pizzaData;
		return (
			<div className="pizza">
				<div className="pizza_img_col" style={{backgroundImage:`url('${img}')`}}>
					
				</div>
				<div className="pizza_info_col">
					<h3 className="pizza_name">
						{name}
					</h3>
					<p>${price}</p>
					<button onClick={this.addToOrder}>Add to Order</button>
				</div>
			</div>
		);
	}
}

export default Pizza;