import Layout from './components/layout/Layout.jsx';
import { useState } from 'react';
import { InputContext } from './contexts/InputContext';

function App() {
  const [formInputs, setFormInputs] = useState({
    name: '',
    emailAddress: '',
    phoneNumber: '',
    planType: 'arcade',
    monthlyPayment: true,
    onlineService: false,
    largerStorage: false,
    customizeableProfile: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormInputs((prevInputs) => {
      return {
        ...prevInputs,
        [name]: type === 'checkbox' ? checked : value,
      };
    });
  };

  return (
    <>
      <InputContext.Provider value={{ formInputs, handleInputChange }}>
        <Layout />
      </InputContext.Provider>
    </>
  );
}

export default App;
