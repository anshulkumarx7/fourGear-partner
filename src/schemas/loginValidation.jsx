import *  as Yup from 'yup';

const loginValidation =Yup.object().shape({
    phone: Yup.string()
    .matches(/^\d{10}$/, 'Invalid mobile number')
    .required('Mobile number is required'),
    password:Yup.string().min(8,'Invalid password').max(20).required('Please enter the password') 
});

export default loginValidation;