import React from 'react';

class Sample extends React.Component{
	constructor(props){
		super(props);

		this.addTimestamp = this.addTimestamp.bind(this);
	}

	addTimestamp(e){
		const timestamp = Date.now();
		this.props.addItem(timestamp);
	}

	render(){
		return (
			<div className="Sample">
				<p>sample component</p>

				<button onClick={this.addTimestamp}>Add Timestamp</button>

				<h3>List of items:</h3>
				<ul>
					{this.props.items.map((item,i)=>{
						return (<li key={i}>Timestamp: {item}</li>);
					})}
				</ul>
			</div>
		);
	};
}

export default Sample;