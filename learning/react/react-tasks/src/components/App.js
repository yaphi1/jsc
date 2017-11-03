import React from 'react';

import { DragDropContextProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import CardContainer from './CardContainer';

class App extends React.Component {
	render() {
		return (
			<DragDropContextProvider backend={HTML5Backend}>
				<div className="App">
					<h1>App</h1>
					<div className="TaskBoard">
						<CardContainer />
						<CardContainer />
					</div>
				</div>
			</DragDropContextProvider>
		);
	}
}

export default App;