import React from 'react';
import Pizza from '../Pizza/Pizza';

import { sanitizeInput } from '../../utils/helpers';

import PropTypes from 'prop-types';

import { CSSTransition, TransitionGroup } from 'react-transition-group';

class PizzaContainer extends React.Component{
	constructor(){
		super();

		this.getResults = this.getResults.bind(this);
		this.renderPizzas = this.renderPizzas.bind(this);
	}

	getResults(query){
		const pizzaData = this.props.pizzaData;
		const cleanQuery = sanitizeInput(query);

		return Object.keys(pizzaData).filter((pizza) => {
			const regex = RegExp(cleanQuery,'i');
			const queryMatchesPizza = regex.test(pizzaData[pizza].name);

			return queryMatchesPizza;
		});
	}

	renderPizzas(results){
		const pizzaData = this.props.pizzaData;

		if(results.length){
			return (
				<TransitionGroup>
					{results.map((key) => {
						return (
							<CSSTransition
								key={key}
								timeout={300}
								classNames="fade"
							>
								<div className="fade_anim_container">
									<Pizza
										id={key}
										pizzaData={pizzaData[key]}
										addToOrder={this.props.addToOrder}
									/>
								</div>
							</CSSTransition>
						);
					})}
				</TransitionGroup>
			);
		}
		else{
			return (
				<div className="pizza pizza_not_found">
					<h2>Sorry!</h2>
					<p>No pizzas found for: <b>{this.props.query}</b></p>
					<p>What kind of search term is that? You must be one of those people who asks for stuff that's not on the menu. We have a vast catalog of {Object.keys(this.props.pizzaData).length} pizzas to choose from. That should be enough.</p>
				</div>
			);
		}
	}

	render(){
		const results = this.getResults(this.props.query);

		return (
			<div className="pizza-container">
				{this.renderPizzas(results)}
			</div>
		);
	}
}



PizzaContainer.propTypes = {
	pizzaData: PropTypes.object.isRequired,
	addToOrder: PropTypes.func.isRequired,
	query: PropTypes.string.isRequired,
};


export default PizzaContainer;