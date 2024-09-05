import React from 'react';
import { Input as AntInput } from 'antd';

interface InputProps {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ placeholder, value, onChange }) => {
  return <AntInput placeholder={placeholder} value={value} onChange={onChange} />;
};

export default Input;
