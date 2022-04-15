/* eslint-disable react/jsx-props-no-spreading */
import { ErrorMessage, useField } from 'formik';
import React from 'react';
import { StyledTextfield } from './Textfield.styled';

export default function Textfield({ ...props }) {
  const [field, meta] = useField(props);
  return (
    <StyledTextfield>
      <input
        className={`${meta.touched && meta.error && 'invalid'}`}
        {...field}
        {...props}
        autoComplete="off"
      />
      <ErrorMessage component="div" name={field.name} className="error" />
    </StyledTextfield>
  );
}
