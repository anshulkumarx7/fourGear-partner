import * as Yup from 'yup';

const mechanicsValidation =Yup.object().shape({
    name:Yup.string().min(2,'Name should be more than 2 Characters').max(20).required('Please enter your Name'),
    contactNumber:Yup.string().min(10,'Invalid Contact number').max(10)
    .matches(/^\+?[1-9]\d{1,14}$/, 'Invalid contact number')
    .required('Contact number is required'),
    address:Yup.string().min(10,'Please enter your full address').max(30).required('Please enter your address'),
    aadharNumber:Yup.string().matches(/^\d{12}$/, "Invalid Aadhaar number").required('Please enter your Aadhar Number'), 
});

export default mechanicsValidation;