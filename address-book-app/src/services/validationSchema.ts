// validation
import * as Yup from 'yup';

export const validationSchema = Yup.object({
    firstName: Yup.string()
        .required('This is a required field.'),
    lastName: Yup.string()
        .required('This is a required field.'),
    email: Yup.string().email('Invalid email address.')
        .required('This is a required field.'),
    country: Yup.string()
        .required('This is a required field.')
});