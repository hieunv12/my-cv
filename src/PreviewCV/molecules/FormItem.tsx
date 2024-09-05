import React from 'react';
import { Form } from 'antd';
import Input from '../atoms/Input';

interface FormItemProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormItem: React.FC<FormItemProps> = ({ label, placeholder, value, onChange }) => {
  return (
    <Form.Item label={label}>
      <Input placeholder={placeholder} value={value} onChange={onChange} />
    </Form.Item>
  );
};

export default FormItem;
