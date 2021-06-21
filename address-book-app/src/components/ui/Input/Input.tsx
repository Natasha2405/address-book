// vendor imports
import React from 'react';

// style
import './style.css';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label: string,
	name: string
}

export const Input: React.FC<InputProps> = ({ label, name, ...props }) => {
	return (
		<div className='input-field-wrapper'>
			<span className='input-field__label'>{label}</span>
			<br />
			<input
				className='input-field'
				name={name}
				placeholder={props.placeholder}
				type={props.type}
				value={props.value}
				onChange={props.onChange}
			/>
		</div>
	);
};