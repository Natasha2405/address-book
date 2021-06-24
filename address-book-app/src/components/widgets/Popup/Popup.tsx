// vendor imports
import React from 'react';
// types
import { Contact } from '../../../types';
// style
import './style.css';

interface PopupTypes {
	text: string,
	contact: Contact | {},
	index: number,
	deleteContact(contact: Contact | {}, index: number): void,
	closePopup(): void
};

export const Popup: React.FC<PopupTypes> = (props) => {
	
	const deleteTheContact = () => {
		props.deleteContact(props.contact, props.index);
	};

	return (
		<div className='popup-container'>
			<div className='popup__box'>
				<h3 className='del-confirmation-text'>{props.text}</h3>
				<div className='buttons-box'>
				<button className='active-button' onClick={deleteTheContact}>Yes</button>
				<button className='active-button' onClick={props.closePopup}>No</button>
				</div>
			</div>
		</div>
	);
};