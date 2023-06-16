import *  as Yup from 'yup';

const joinValidation =Yup.object().shape({
    name:Yup.string().min(2,'Name should be more than 2 Characters').max(20).required('Please Enter Your Name'),
    contactNumber:Yup.string().min(10,'Invalid Contact number').max(10)
    .matches(/^\+?[1-9]\d{1,14}$/, 'Invalid contact number')
    .required('Contact number is required'),
    email:Yup.string().email('Invalid Email').required('Please enter the email'),
    password:Yup.string().min(8,'Invalid password').max(20).required('Password Required'),
    address:Yup.string().min(10,'Please enter your full address').max(30).required('Please enter your address'),
    aadharNumber:Yup.string().min(12,'Please enter valid aadharNumber').max(12).required('Please enter your Aadhar Number'),
    accountNumber:Yup.string().min(10,'Invalid account number').max(25).required('Please enter your account number'),
    ifscCode:Yup.string().min(10,'Invalid IFSC Code').max(25).required('Please enter your IFSC code'),
    shopOwnerImage:Yup.mixed()
    .test('fileType', 'Invalid file format', (value) => {
      if (value) {
        const supportedFormats = ['image/jpeg', 'image/png', 'image/jpg'];
        return supportedFormats.includes(value.type);
      }
      return true;
    })
    .test('fileSize', 'File size is too large', (value) => {
      if (value) {
        const maxSizeInBytes = 5 * 1024 * 1024; // 5 MB
        return value.size <= maxSizeInBytes;
      }
      return true;
    })
    .required('Shop Owner Image is required'),
    shopImage:Yup.mixed()
    .test('fileType', 'Invalid file format', (value) => {
      if (value) {
        const supportedFormats = ['image/jpeg', 'image/png', 'image/jpg'];
        return supportedFormats.includes(value.type);
      }
      return true;
    })
    .test('fileSize', 'File size is too large', (value) => {
      if (value) {
        const maxSizeInBytes = 5 * 1024 * 1024; // 5 MB
        return value.size <= maxSizeInBytes;
      }
      return true;
    })
    .required('Shop Image is required'),
    numberofMechanics:Yup.string().max(2).required('Please enter the no.of mechanics'),
});

export default joinValidation;