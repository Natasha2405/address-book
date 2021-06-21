// vendor imports
import React from 'react';
import { Switch, Route } from 'react-router-dom';
// components
import { HomePage } from './components/HomePage/HomePage';
// styles
import './assets/styles/global.css';

const App = () => {
	return (
		<>
			<Switch>
				<Route exact path="/" component={HomePage} />

			</Switch>
		</>
	);
}

export default App;
