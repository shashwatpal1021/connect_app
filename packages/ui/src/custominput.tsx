import React from 'react';
import CLabel from './Clabel';

interface CustominputProps {
  type?: string;
  value?: string;
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; // Updated onChange type
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void; // Updated onBlur type
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
  placeholder?: string;
  maxlength?: string;
  label?: string;
  required?: boolean;
  disabled?: boolean;
  autoComplete?: string;
  className?: string;
  style?: React.CSSProperties;
  error?: boolean;
  errorMessage?: string;
}

const Custominput: React.FC<CustominputProps> = ({
  type = '',
  value = '',
  name = '',
  onChange = () => {},
  onBlur = () => {},
  onClick = () => {},
  placeholder = '',
  maxlength = '',
  label = '',
  required = false,
  disabled = false,
  autoComplete = '',
  className = '',
  style = {},
  error = false,
  errorMessage = '',
}) => {
  return (
    <div>
      {/* <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
        {required ? <span className="text-red-500">*</span> : ''}
      </label> */}
           <div
        className={`flex flex-col gap-[4px] ${
          error ? "text-red-600" : ""
        } ${className}`}
      >
      <CLabel label={label} required={required} className={error ? "text-red-600" : ""}/>
      <input
        type={type}
        className={
          error ?
          'w-full px-3 py-2 border border-red-500 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500' :
          className ||
          'w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
        }
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange} // Corrected to take event argument
        onBlur={onBlur} // Corrected to take event argument
        maxLength={maxlength ? parseInt(maxlength) : undefined} // Adjusted maxlength handling
        onClick={onClick}
        disabled={disabled}
        autoComplete={autoComplete}
        style={style}
      />
        </div>
      {error && <CLabel error label={errorMessage} />}
    </div>
  );
};

export default Custominput;
