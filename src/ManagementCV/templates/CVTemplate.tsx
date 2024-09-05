import React from 'react';
import { Row, Col } from 'antd';
import CVForm from '../organisms/CVForm';
import CVPreview from '../organisms/CVPreview';
 

const CVTemplate: React.FC = () => {
  const [cvData, setCvData] = React.useState({ name: '', email: '' });

  const handleFormSubmit = (data: any) => {
    setCvData(data);
  };

  return (
    <Row gutter={16}>
      <Col span={12}>
        <CVForm onSubmit={handleFormSubmit} />
      </Col>
      <Col span={12}>
        <CVPreview name={cvData.name} email={cvData.email} />
      </Col>
    </Row>
  );
};

export default CVTemplate;
