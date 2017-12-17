import React from 'react';

class Card extends React.Component{
	constructor(props){
		super(props);

		// this.addTimestamp = this.addTimestamp.bind(this);
	}

	/*addTimestamp(e){
		const timestamp = Date.now();
		this.props.addItem(timestamp);
	}*/

	moveCardClick(e){
		console.log('move right');
		// this.props.addCard(this.props.colIndex, text);

		this.props.moveCard(this.props.position, 3);
	}


	render(){
		return (
			<div className="Card">
				{this.props.cardContent}
				<button onClick={this.moveCardClick}>right</button>
			</div>
		);
	};
}

export default Card;