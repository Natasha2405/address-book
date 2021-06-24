// vendor imports
import React from 'react';
import { Link } from 'react-router-dom';
// components
import { NewContactForm } from '../widgets/NewContactForm/NewContactForm';
// icons
import iconBack from '../../assets/images/back-icon.png'
// styles
import './style.css';

export const AddNewContact: React.FC = () => {

	return (
		<div className='main-container-wrapper'>
			<div>
				<Link to="/">
					<div className='icon-back'>
						<img src={iconBack} alt='' className='icon-back' />
					</div>
				</Link>
				<NewContactForm />
			</div>
		</div>
	);
};