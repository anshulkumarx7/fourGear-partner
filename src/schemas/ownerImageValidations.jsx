import * as Yup from "yup";

const ownerImageValidations = Yup.object().shape({
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
  .required("Owner Image Required"),
});


export default ownerImageValidations;