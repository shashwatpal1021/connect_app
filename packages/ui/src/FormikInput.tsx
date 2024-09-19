import React from 'react';
import Custominput from './custominput';
import { useField } from 'formik';

interface FormikInputProps {
  label?: string;
  type?: string;
  placeholder?: string;
  disabled?: boolean;
  autoComplete?: string;
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void; // onClick should be a MouseEvent
  className?: string;
  style?: React.CSSProperties;
  value?: string;
  name: string;
  errorMessage?: string;
  [key: string]: any; // Rest props to support additional props
}

const FormikInput: React.FC<FormikInputProps> = ({
  label = '',
  type = 'text',
  placeholder = '',
  disabled = false,
  autoComplete = 'off',
  required = false,
  onChange,
  onBlur,
  onClick, // Corrected: Handle onClick as MouseEvent
  className = '',
  style = {},
  name,
  errorMessage = '',
  ...rest
}) => {
  const [field, meta] = useField(name);
  const isError = meta.touched && meta.error;

  return (
    <Custominput
      type={type}
      name={name}
      value={field.value} // Use Formik's field value
      onChange={onChange || field.onChange} // Use either custom onChange or Formik's handler
      onBlur={onBlur || field.onBlur} // Use either custom onBlur or Formik's handler
      onClick={onClick} // Custom onClick handler for MouseEvent
      label={label}
      placeholder={placeholder}
      disabled={disabled}
      autoComplete={autoComplete}
      required={required}
      className={className}
      style={style}
      error={Boolean(isError)}
      errorMessage={isError ? meta.error : errorMessage}
      {...rest}
    />
  );
};

export default FormikInput;
