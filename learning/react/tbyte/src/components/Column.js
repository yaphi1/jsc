import React from 'react';

import Card from './Card';

class Column extends React.Component{
	constructor(props){
		super(props);

		this.addCardClick = this.addCardClick.bind(this);
	}

	/*addTimestamp(e){
		const timestamp = Date.now();
		this.props.addItem(timestamp);
	}*/

	addCardClick(e){
		const text = window.prompt('Make a card');
		this.props.addCard(this.props.colIndex, text);
	}

	render(){
		return (
			<div className="Column">
				<h2 className="Column-title">{this.props.columnTitle}</h2>

				{this.props.cards.map((card, i) => {
					return (
						<Card
							key={i}
							position={i}
							cardContent={card}
							moveCard={this.props.moveCard}
						/>
					);
				})}

				<button onClick={this.addCardClick}>+ Add a card</button>
			</div>
		);
	};
}

export default Column;