import React from 'react';

import Card from './Card';

class CardContainer extends React.Component{
	render(){
		return (
			<div className="CardContainer">
				<Card />
				<Card />
			</div>
		);
	}
}

export default CardContainer;