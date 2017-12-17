import React from 'react';

import { DragDropContextProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import CardContainer from './CardContainer';

class App extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			categories: [
				{
					id: 'to_do',
					title: 'To Do',
				},
				{
					id: 'in_progress',
					title: 'In Progress',
				},
				{
					id: 'done',
					title: 'Done',
				},
			],
			cards: [
			],
		}
	}

	render() {
		return (
			<DragDropContextProvider backend={HTML5Backend}>
				<div className="App">
					<h1>App</h1>
					<div className="TaskBoard">
						{this.state.categories.map(category=>{
							return (
								<CardContainer
									key={category.id}
									title={category.title}
								/>
							);
						})}
						<CardContainer />
						<CardContainer />
					</div>
				</div>
			</DragDropContextProvider>
		);
	}
}

export default App;