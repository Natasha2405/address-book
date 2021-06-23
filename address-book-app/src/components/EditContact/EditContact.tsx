// vendor imports
import React from 'react';
// components
import { EditContactForm } from '../widgets/EditContactForm/EditContactForm';
// style
import './style.css';


export const EditContact: React.FC  = () => {

	return(
		<div className='edit-contact-form-container'>
			<EditContactForm />
		</div>
	);
};