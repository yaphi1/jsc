import React from 'react';
import { sanitizeInput } from '../../utils/helpers';

import PropTypes from 'prop-types';

class SearchBar extends React.Component{
	render(){
		return (
			<input
				className="search_bar"
				type="text"
				placeholder="Filter pizzas by name"
				onKeyUp={(e) => this.props.updateSearchQuery(
					sanitizeInput(this.search_bar.value)
				)}
				ref={(elem) => this.search_bar = elem}
			/>
		);
	}
}

SearchBar.propTypes = {
	updateSearchQuery: PropTypes.func.isRequired
};

export default SearchBar;