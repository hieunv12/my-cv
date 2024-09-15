// ExperienceCard.js
import React from 'react';
import { Card, Typography } from 'antd';

const { Text } = Typography;
interface ExperienceCardProps {
  title: string;
  company: string;
  date: string;
  location: string;
  description: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  title,
  company,
  date,
  location,
  description,
}) => {
  return (
    <Card
      bordered={false}
      style={{ borderRadius: 10, boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', overflow: "auto"  }}
    >
      <Text style={{ fontSize: 18, fontWeight: 700 }}>{title}</Text>
      <br />
      <Text type="secondary" style={{ fontSize: 14, fontWeight: 700 }}>
        {company}
      </Text>
      <br />
      <Text type="secondary" style={{ fontSize: 14 }}>
        {date} · {location}
      </Text>
      <br />
      <Text style={{ fontSize: 14 }}>{description}</Text>
    </Card>
  );
};

export default ExperienceCard;
