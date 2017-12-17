import React from 'react';

import Card from './Card';

class CardContainer extends React.Component{
	render(){
		return (
			<div className="CardContainer">
				<h2>{this.props.title || 'no title'}</h2>
				<Card />
				<Card />
			</div>
		);
	}
}

export default CardContainer;