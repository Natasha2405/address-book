// types
import { Contact, ContactsState, ContactsListActions } from "../../types";

// initial state
const initialState: ContactsState = {
	contacts: [
		{
			id: 'qjbliy4z7',
			first_name: 'Samantha',
			last_name: 'Pitterson',
			email: 'sampitt@gmail.com',
			country: 'Germany'
		}
	]
};

// constants
const ADD_CONTACT = 'ADD_CONTACT';
// const EDIT_CONTACT = 'EDIT_CONTACT';
// const DELETE_CONTACT = 'DELETE_CONTACT';
const SET_CONTACTS = 'SET_CONTACTS';

// actions
export const setContacts = (contacts: Contact[]) => {
	return {
		type: SET_CONTACTS,
		contacts: contacts
	};
};

export const addContact = (contact: Contact) => {
	return {
		type: ADD_CONTACT,
		payload: contact
	};
};

// reducer

const ContactsReducer = (state = initialState, action: ContactsListActions): ContactsState => {
	switch (action.type) {
		case SET_CONTACTS:
			return {
				...state,
				contacts: action.contacts
			}
		case ADD_CONTACT:
			return {
				...state,
				contacts: [
					...state.contacts, 
					action.payload
				]
			}
		default: return state;
	}

};

export default ContactsReducer;