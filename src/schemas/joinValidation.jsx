import *  as Yup from 'yup';

const detailsValidation =Yup.object().shape({
    name:Yup.string().min(2,'Name should be more than 2 Characters').max(20).required('Please enter your Name'),
    phone:Yup.string().min(10,'Invalid Contact number').max(10)
    .matches(/^\+?[1-9]\d{1,14}$/, 'Invalid contact number')
    .required('Contact number is required'),
    email:Yup.string().email('Invalid Email').required('Please enter the email'),
    password:Yup.string().min(8,'Invalid password').max(20).required('Password Required')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      " Password must be at least 8 characters long and contain [A-Z,a-z,@#]"
    ),
    shopName:Yup.string().min(4,'Please enter shop name').required('Please enter shop name'),
    address:Yup.string().min(10,'Please enter your full address').max(30).required('Please enter your address'),
    city:Yup.string().required('Please choose city'),
    aadharNumber:Yup.string().matches(/^\d{12}$/, "Invalid Aadhaar number").required('Please enter your Aadhar Number'),
    accountNumber:Yup.string().min(10,'Invalid account number').max(25).required('Please enter your account number'),
    ifscCode:Yup.string().min(10,'Invalid IFSC Code').max(25).required('Please enter your IFSC code'),
    numberofMechanics:Yup.string().max(2).required('Please enter the no.of mechanics'),
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
    }),
    // .required('Shop Owner Image is required'),
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
    }),
    // // .required('Shop Image is required'), 

});

export default detailsValidation;