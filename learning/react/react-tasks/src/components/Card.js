import React from 'react';

import PropTypes from 'prop-types';

import ItemTypes from './ItemTypes';

import { DragSource } from 'react-dnd';


// implements drag source contract
const cardSource = {
	beginDrag(props){
		return {
			text: 'sample text'
		};
	}
};

// specify props to inject into component
function collect(connect, monitor){
	return {
		connectDragSource: connect.dragSource(),
		isDragging: monitor.isDragging()
	};
}




class Card extends React.Component{
	render(){
		const { isDragging, connectDragSource } = this.props;
		return connectDragSource(
			<div className="Card" style={{opacity: isDragging ? 0.2:1}}>
				<h2>Card</h2>
				<textarea name="" id="" cols="30" rows="10"></textarea>
			</div>
		);
	}
}




Card.propTypes = {
	// Injected by React DnD:
	isDragging: PropTypes.bool.isRequired,
	connectDragSource: PropTypes.func.isRequired
};



export default DragSource(ItemTypes.CARD, cardSource, collect)(Card);