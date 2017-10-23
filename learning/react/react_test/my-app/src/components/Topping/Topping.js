import React from 'react';


class Topping extends React.Component{
	render(){
		return (
			<div className="topping">
				topping: {this.props.name}
				<span>
					<button>Add</button>
				</span>
			</div>
		);
	}
}


export default Topping;