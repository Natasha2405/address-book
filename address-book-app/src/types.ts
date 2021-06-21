export interface Contact {
	id: string,
	first_name: string,
	last_name: string,
	email: string,
	country: string
};
export interface ContactsState {
	contacts: Contact[]
};

export interface AplicationState {
	contacts: ContactsState
}

export interface ContactsListActions {
	type: string,
	payload: Contact,
	contacts: Contact[]
};