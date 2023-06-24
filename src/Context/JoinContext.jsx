import React, {createContext,useState} from 'react';

export const JoinContext = createContext();
function convertToBase64(file) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
  });
}
export const JoinProvider = ({ children }) => {
  const [details, setDetails] = useState({
    name: "",
    contactNumber: "",
    email: "",
    password: "",
    address: "",
    aadharNumber: "",
    accountNumber: "",
    ifscCode: "",
    numberofMechanics: "",
  });
  const [currLocation, setCurrLocation] = useState({
    latitude: "",
    longitude: "",
  });
  const [ownerImage, setOwnerImage] = useState("");
  const [shImage, setShopImage] = useState("");
  const handleImage1Uplaod = async (event) => {
    const file = event.target.files[0];
    const base64 = await convertToBase64(file);
    setOwnerImage(base64);
  };
  const handleImage2Uplaod = async (event) => {
    const file = event.target.files[0];
    const base64 = await convertToBase64(file);
    setShopImage(base64);
  };
    
  return (
      <JoinContext.Provider value={{details,setDetails,currLocation,setCurrLocation,ownerImage,shImage,setOwnerImage,setShopImage,handleImage1Uplaod,handleImage2Uplaod }}>
        {children}
      </JoinContext.Provider>
    );
  };
