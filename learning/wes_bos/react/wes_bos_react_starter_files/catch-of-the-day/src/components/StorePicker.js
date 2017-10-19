import React from 'react';
import {getFunName} from '../helpers';

class StorePicker extends React.Component{

	constructor(){
		super();
		this.goToStore = this.goToStore.bind(this);
	}

	goToStore(e){
		e.preventDefault();
		console.log(this.storeInput.value);
		console.log('url changed');

		// get text from box
		// transition url from / to /store/whatever
	}

	render(){
		return (
			<form className="store-selector" onSubmit={this.goToStore}>

				{/* this comment syntax is for jsx */}

				<h2>Please Enter A Store</h2>
				<input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={(input) => {this.storeInput = input}} />
				<button type="submit">Visit Store</button>
			</form>
		);
	}
}

export default StorePicker;
