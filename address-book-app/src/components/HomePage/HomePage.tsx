// vendor imports
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
// components
// import { NewContactForm } from '../widgets/NewContactForm/NewContactForm';
// types
import { Contact, AplicationState } from '../../types';
// actions
import { setContacts, deleteContact } from '../../redux/ducks/contacts';
// localStorage
import { getLocalStorageContacts, setLocalStorageContacts } from '../../services/localStorage';
// styles
import './style.css';
// icons
import iconAddNew from '../../assets/images/add-new-contact.png';
import iconDelete from '../../assets/images/delete-icon.png';
import iconEdit from '../../assets/images/edit-icon.png';

interface StateProps {
	contacts: Contact[],
}

export const HomePage: React.FC<StateProps> = () => {
	const dispatch = useDispatch();
	const history = useHistory();

	const ButtonAddNewContact = () => {
		history.push('/contacts/new-contact');
	};

	const getContacts = () => {
		let contacts: Contact[] = getLocalStorageContacts();
		dispatch(setContacts(contacts));
		// console.log(contacts);
	};

	let data = useSelector((state: AplicationState) => state.contacts);
	let contacts = data['contacts'];

	useEffect(() => {
		getContacts();
		//  eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const removeContact = (contact: Contact, index: number) => {
		dispatch(deleteContact(contact));
		let localStorageContacts: Contact[] = getLocalStorageContacts();
		localStorageContacts.splice(index, 1);
		setLocalStorageContacts(localStorageContacts);
	};

	return (
		<div className='homepage-container'>
			<div className='button-add-new-contact' onClick={ButtonAddNewContact}>
				<img className='icon-add-new-contact' src={iconAddNew} alt='' />
				<span>Add new Contacts</span>
			</div>
			{contacts.length > 0 ?
				<div className='table-wrapper'>
					<h3 className='table-state--title'>Your Address Book:</h3>
					<table className='table__contacts'>
						<thead>
							<tr>
								<th>First name</th>
								<th>Last name</th>
								<th>Email</th>
								<th>Country</th>
								<th></th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							{contacts.map((contact, index) => {
								return (
									<tr key={contact.id}>
										<td>{contact.first_name} </td>
										<td>{contact.last_name}</td>
										<td>{contact.email}</td>
										<td>{contact.country}</td>
										<td className='icon-active'>
											<img className='icon-active' src={iconEdit} alt='' />
										</td>
										<td className='icon-active' onClick={() => removeContact(contact, index)}>
											<img className='icon-active' src={iconDelete} alt='' />
										</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
				: <h3 className='table-state--title'> Your Address Book is empty.</h3>
			}
		</div>
	);
};
