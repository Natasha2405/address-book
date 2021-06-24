// vendor imports
import React from 'react';
import { Link } from 'react-router-dom';
// components
import { EditContactForm } from '../widgets/EditContactForm/EditContactForm';
// icons
import iconBack from '../../assets/images/back-icon.png'


export const EditContact: React.FC = () => {

	return (
		<div className='main-container-wrapper'>
			<div>
				<Link to="/">
					<div className='icon-back'>
						<img src={iconBack} alt='' className='icon-back' />
					</div>
				</Link>
				<EditContactForm />
			</div>
		</div>
	);
};