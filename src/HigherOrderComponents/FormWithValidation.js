import React from 'react';
import {FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
 
// Define a function that takes a validation schema and returns a HOC
const FormWithValidation = (validationSchema) => (Component) => {
  // Define a wrapper component that handles the validation
  const FormWithValidation = (props) => {
    const methods= useForm({
        resolver: yupResolver(validationSchema),
    });

 
    // Pass the form errors and isValid properties to the wrapped component as props
    return     <Component {...props} methods={methods}/>;
   };

  return FormWithValidation;
};

export default FormWithValidation;
