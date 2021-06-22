// vendor imports
import React from 'react';
// components
import { NewContactForm } from '../widgets/NewContactForm/NewContactForm';
// style
import './style.css';


export const AddNewContact: React.FC = () => {

    return(
        <div className='new-contcat-form-container'>
            <NewContactForm />
        </div>
    );
};