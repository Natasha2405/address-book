// types
import { Contact, ContactsState, ContactsListActions } from "../../types";

// initial state
const initialState: ContactsState = {
	contacts: []
};

// constants
const SET_CONTACTS = 'SET_CONTACTS';
const ADD_CONTACT = 'ADD_CONTACT';
const EDIT_CONTACT = 'EDIT_CONTACT';
const DELETE_CONTACT = 'DELETE_CONTACT';

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

export const editContact = (updatedContact: Contact) => {
	return {
		type: EDIT_CONTACT,
		payload: updatedContact
	}
};

export const deleteContact = (contact: Contact) => {
	return {
		type: DELETE_CONTACT,
		payload: contact
	}
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
		case EDIT_CONTACT:
			return {
				...state,
				contacts: state.contacts.map((contact) => (contact.id === action.payload.id) ?
				action.payload : contact)
			}
		case DELETE_CONTACT:
			return {
				contacts: state.contacts.filter((contact) => (contact.id !== action.payload.id))
			}
		default: return state;
	}
};

export default ContactsReducer;