// vendor imports
import React from 'react';

// style
import './style.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	label: string,
};

export const Button: React.FC<ButtonProps> = ({ label, ...props }) => {
	return (
		<button
			className='active-button'
			type={props.type}
		>
			{label}
		</button>
	);
};