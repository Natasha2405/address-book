// vendor imports
import React from 'react';
import { useSelector } from 'react-redux';

import { Contact, AplicationState } from '../../types';

// import { setContacts } from '../../redux/ducks/contacts';
// styles
import './style.css';

interface StateProps {
	contacts: Contact[],
}

export const HomePage: React.FC<StateProps> = () => {

	let data = useSelector((state: AplicationState) => state.contacts);
	let contacts = data['contacts'];
	console.log(contacts);


	return (
		<div className="homepage-container">
			<h2>Your Contacts:</h2>
			{contacts.map(contact => (
				<h2>{contact.first_name}</h2>
			))}

		</div>
	);
};
