// import React, { Component } from 'react'; import logo from './logo.svg'; import '../App.css';

import React from 'react';
// import Sample from './Sample';

import Column from './Column';
// import Card from './Card';

class App extends React.Component{
	constructor(props){
		super(props);

		this.addCard = this.addCard.bind(this);
		this.moveCard = this.moveCard.bind(this);

		this.state = {
			cols: [
				{
					name: 'Winnie',
					cards: [
						'card 1',
						'card 2',
					],
				},
				{
					name: 'Bob',
					cards: [
						'bob card 1',
						'bob card 2',
					]
				},
				{
					name: 'Tom',
					cards: [
						'Tom card 1',
						'Tom card 2',
					]
				},
				{
					name: 'George',
					cards: [
						'George card 1',
						'George card 2',
					]
				}
			]
		};
	}

	/*addItem(item){
		this.setState((prevState)=>{
			return {items: [...prevState.items, item]};
		});
	}*/

	addCard(colIndex, cardContent){
		console.log('card added');

		this.setState((prevState)=>{
			const newState = prevState;
			newState.cols[colIndex].cards.push(cardContent);
			return newState;
		});
	}

	moveCard(currentCardHeight, targetColIndex){
	}

	render(){
		return (
			<div className="Board">
				{this.state.cols.map((col,i) => {
					return (
						<Column
							key={i}
							colIndex={i}
							columnTitle={col.name}
							addCard={this.addCard}
							cards={col.cards}
							moveCard={this.moveCard}
						/>
					);
				})}
			</div>
		);
	}
}

export default App;