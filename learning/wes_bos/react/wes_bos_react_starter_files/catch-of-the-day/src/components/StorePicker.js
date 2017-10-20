import React from 'react';
import {getFunName} from '../helpers';

class StorePicker extends React.Component{

	constructor(){
		super();
		this.goToStore = this.goToStore.bind(this);
	}

	goToStore(e){
		e.preventDefault();

		// get text from box
		var storeId = this.storeInput.value;
		console.log(storeId);
		console.log('url changed to: /store/'+storeId);

		// transition url from / to /store/whatever
		this.context.router.transitionTo(`/store/${storeId}`);
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

StorePicker.contextTypes = {
	router: React.PropTypes.object
};

export default StorePicker;
