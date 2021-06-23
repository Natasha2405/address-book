// vendor imports
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
// components
import { Input } from '../../ui/Input/Input';
import { Button } from '../../ui/Button/Button';
// actions
import { setContacts, editContact } from '../../../redux/ducks/contacts';
import { getLocalStorageContacts, setLocalStorageContacts } from '../../../services/localStorage';
// validation
import { useFormik } from 'formik';
import * as Yup from 'yup';
// types
import { Contact, AplicationState } from '../../../types';
// country-list
import { getNames } from 'country-list';

interface ParamTypes {
	id: string;
};

export const EditContactForm: React.FC = () => {
	const dispatch = useDispatch();
	const history = useHistory();
	const [infoMessage, setInfoMessage] = useState('');
	const { id } = useParams<ParamTypes>();
	let countries = getNames();

	const getContacts = () => {
		let contacts: Contact[] = getLocalStorageContacts();
		dispatch(setContacts(contacts));
	};

	let data = useSelector((state: AplicationState) => state.contacts);
	let contacts = data['contacts'];

	useEffect(() => {
		getContacts();
		//  eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	let contact = contacts.find(obj => obj.id === id);

	const handleEditContact = () => {
		let contact: Contact = {
			id: id,
			first_name: formik.values.firstName,
			last_name: formik.values.lastName,
			email: formik.values.email,
			country: formik.values.country
		};
		dispatch(editContact(contact));
		setInfoMessage('Contact successfully saved!');
		resetInfoMessage();
		BackToHomePage();
	};

	if (contacts.length > 0) {
		setLocalStorageContacts(contacts);
	}

	const resetInfoMessage = () => {
		setTimeout(() => {
			setInfoMessage('');
		}, 1000);
	};

	const BackToHomePage = () => {
		setTimeout(() => {
			history.push('/');
		}, 1000);
	};

	const formik = useFormik({
		initialValues: {
			firstName: contact ? contact.first_name : '',
			lastName: contact ? contact.last_name : '',
			email: contact ? contact.email : '',
			country: contact ? contact.country : ''
		},
		enableReinitialize: true,
		validationSchema: Yup.object({
			firstName: Yup.string()
				.required('This is a required field.'),
			lastName: Yup.string()
				.required('This is a required field.'),
			email: Yup.string().email('Invalid email address.')
				.required('This is a required field.'),
			country: Yup.string()
				.required('This is a required field.')
		}),
		onSubmit: handleEditContact
	});

	return (
		<div className='create-contact-wrapper'>
			<form onSubmit={formik.handleSubmit}>
				<div className='form-box'>
					<Input
						label='First Name'
						type='text'
						placeholder='Emily'
						name='firstName'
						value={formik.values.firstName}
						onChange={formik.handleChange}
					/>
					{formik.touched.firstName && formik.errors.firstName ? (
						<div className='error-message'>{formik.errors.firstName}</div>
					) : null}
					<br />
					<Input
						label='Last Name'
						type='text'
						placeholder='Clarke'
						name='lastName'
						value={formik.values.lastName}
						onChange={formik.handleChange}
					/>
					{formik.touched.lastName && formik.errors.lastName ? (
						<div className='error-message'>{formik.errors.lastName}</div>
					) : null}
					<br />
					<Input
						label='Email'
						type='text'
						placeholder='emclarke@gmail.com'
						name='email'
						value={formik.values.email}
						onChange={formik.handleChange}
					/>
					{formik.touched.email && formik.errors.email ? (
						<div className='error-message'>{formik.errors.email}</div>
					) : null}
					<br />
					<div className='select__container'>
						<label className='country-label' htmlFor='country'>Country:</label> <br />
						<select className='country-select' name='country' id='country'
							value={formik.values.country}
							onChange={formik.handleChange}
						>
							{countries.map((country, i) => (
								<option key={i} value={country}>{country}</option>
							))}
						</select>
					</div>
					{formik.touched.country && formik.errors.country ? (
						<div className='error-message'>{formik.errors.country}</div>
					) : null}
				</div>
				<br />
				<div className='btn-create-contact'>
					<Button type="submit" disabled={formik.isSubmitting}
						label='Save contact'
					/>
				</div>
			</form>
			<div className='info-message'>
				<p>{infoMessage}</p>
			</div>
		</div>
	)
};