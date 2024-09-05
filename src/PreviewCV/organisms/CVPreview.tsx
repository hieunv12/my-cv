import React from 'react';
import { Card } from 'antd';

interface CVPreviewProps {
  name: string;
  email: string;
  // Add more fields as needed
}

const CVPreview: React.FC<CVPreviewProps> = ({ name, email }) => {
  return (
    <Card title="CV Preview" style={{ width: '100%' }}>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Email:</strong> {email}</p>
      {/* Add more fields as necessary */}
    </Card>
  );
};

export default CVPreview;
