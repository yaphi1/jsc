import React from 'react';
import { sanitizeInput } from '../../utils/helpers';

class SearchBar extends React.Component{
	render(){
		return (
			<input
				className="search_bar"
				type="text"
				placeholder="Search pizzas by name"
				onKeyUp={(e) => this.props.updateSearchQuery(
					sanitizeInput(this.search_bar.value)
				)}
				ref={(elem) => this.search_bar = elem}
			/>
		);
	}
}

export default SearchBar;