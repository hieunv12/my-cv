import React from 'react';
import { Form } from 'antd';
import FormItem from '../molecules/FormItem';
import Button from '../atoms/Button';

interface CVFormProps {
  onSubmit: (data: any) => void;
}

const CVForm: React.FC<CVFormProps> = ({ onSubmit }) => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    onSubmit(values);
  };

  return (
    <Form form={form} layout="vertical" onFinish={onFinish}>
      <FormItem label="Full Name" placeholder="Enter your name" value="" onChange={() => {}} />
      <FormItem label="Email" placeholder="Enter your email" value="" onChange={() => {}} />
      {/* Add more FormItems as needed */}
      <Button text="Save" onClick={() => form.submit()} />
    </Form>
  );
};

export default CVForm;
