import *  as Yup from 'yup';

const loginValidation =Yup.object().shape({
    email:Yup.string().email('Invalid Email').required('Please enter the email'),
    password:Yup.string().min(8,'Invalid password').max(20).required('Please enter the password') 
});

export default loginValidation;