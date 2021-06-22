//types
import { Contact } from "../types";

export const setLocalStorageContacts = (contacts: Contact[]) => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
};

export const getLocalStorageContacts = () => {
    let contacts = localStorage.getItem('contacts');
    if (contacts) {
        return JSON.parse(contacts);
    } else {
        return [];
    }
};

export const addContactInLocalStorage = (contact: Contact, contacts: Contact[]) => {
    contacts.push(contact);
    setLocalStorageContacts(contacts);
};