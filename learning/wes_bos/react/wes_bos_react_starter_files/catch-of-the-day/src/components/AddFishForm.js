import React from 'react';


class AddFishForm extends React.Component{
	
	constructor(){
		super();

		this.createFish = this.createFish.bind(this);
	}

	createFish(e){
		e.preventDefault();

		const fish = {
			name: this.name.value,
			price: this.price.value,
			status: this.status.value,
			desc: this.desc.value,
			image: this.image.value,
		};

		this.props.addFish(fish);

		this.fishForm.reset();
	}

	render(){
		return(
			<form ref={(elem) => this.fishForm = elem} className="fish-edit" onSubmit={this.createFish}>
				<input ref={(elem) => this.name = elem} type="text" placeholder="Fish Name"/>
				<input ref={(elem) => this.price = elem} type="text" placeholder="Fish Price"/>
				<select ref={(elem) => this.status = elem}>
					<option value="available">Fresh!</option>
					<option value="unavailable">Sold Out!</option>
				</select>
				<textarea ref={(elem) => this.desc = elem} type="text" placeholder="Fish Desc"></textarea>
				<input ref={(elem) => this.image = elem} type="text" placeholder="Fish Image"/>
				<button type="submit">+ Add Item</button>
			</form>
		);
	}
}


export default AddFishForm;