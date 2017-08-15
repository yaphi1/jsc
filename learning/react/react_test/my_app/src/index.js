import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(
	<div>
		<App />
		<h1>Hello world!</h1>
	</div>,
	document.getElementById('root')
);

registerServiceWorker();
