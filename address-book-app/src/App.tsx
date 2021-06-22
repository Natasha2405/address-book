// vendor imports
import React from 'react';
import { Switch, Route } from 'react-router-dom';
// routes
import ROUTES from './data/routes';
// components
import { HomePage } from './components/HomePage/HomePage';
import { AddNewContact } from './components/AddNewContact/AddNewContact';
// import { EditContact } from './components/EditContact/EditContact';
// styles
import './assets/styles/global.css';

const App: React.FC = () => {
	return (
		<>
			<Switch>
				<Route exact path={ROUTES.ROOT} component={HomePage} />
				<Route exact path={ROUTES.ADD_NEW_CONTACT} component={AddNewContact} />
				{/* <Route exact path={ROUTES.EDIT_CONTACT} component={EditContact} /> */}
			</Switch>
		</>
	);
};

export default App;
