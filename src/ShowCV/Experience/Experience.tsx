import React from 'react';
import { Card, Col, Row, Typography } from 'antd';

const { Title, Text } = Typography;

const Experience = () => {
  const experiences = [
    {
      title: 'Senior UI/UX Product Designer',
      company: 'Apple',
      date: 'Aug 2018 - Present · 1 year',
      location: 'Paris',
      description:
        'Directly collaborated with CEO and Product team to prototype, design and deliver the UI and UX experience with a lean design process: research, design, test, and iterate.',
    },
    {
      title: 'Senior UI/UX Product Designer',
      company: 'Apple',
      date: 'Aug 2018 - Present · 1 year',
      location: 'Paris',
      description:
        'Directly collaborated with CEO and Product team to prototype, design and deliver the UI and UX experience with a lean design process: research, design, test, and iterate.',
    },
    {
      title: 'Senior UI/UX Product Designer',
      company: 'Apple',
      date: 'Aug 2018 - Present · 1 year',
      location: 'Paris',
      description:
        'Directly collaborated with CEO and Product team to prototype, design and deliver the UI and UX experience with a lean design process: research, design, test, and iterate.',
    },
    {
        title: 'Senior UI/UX Product Designer',
        company: 'Apple',
        date: 'Aug 2018 - Present · 1 year',
        location: 'Paris',
        description:
          'Directly collaborated with CEO and Product team to prototype, design and deliver the UI and UX experience with a lean design process: research, design, test, and iterate.',
      },
      {
        title: 'Senior UI/UX Product Designer',
        company: 'Apple',
        date: 'Aug 2018 - Present · 1 year',
        location: 'Paris',
        description:
          'Directly collaborated with CEO and Product team to prototype, design and deliver the UI and UX experience with a lean design process: research, design, test, and iterate.',
      },
      {
        title: 'Senior UI/UX Product Designer',
        company: 'Apple',
        date: 'Aug 2018 - Present · 1 year',
        location: 'Paris',
        description:
          'Directly collaborated with CEO and Product team to prototype, design and deliver the UI and UX experience with a lean design process: research, design, test, and iterate.',
      },
      {
        title: 'Senior UI/UX Product Designer',
        company: 'Apple',
        date: 'Aug 2018 - Present · 1 year',
        location: 'Paris',
        description:
          'Directly collaborated with CEO and Product team to prototype, design and deliver the UI and UX experience with a lean design process: research, design, test, and iterate.',
      },
      {
        title: 'Senior UI/UX Product Designer',
        company: 'Apple',
        date: 'Aug 2018 - Present · 1 year',
        location: 'Paris',
        description:
          'Directly collaborated with CEO and Product team to prototype, design and deliver the UI and UX experience with a lean design process: research, design, test, and iterate.',
      },
      {
        title: 'Senior UI/UX Product Designer',
        company: 'Apple',
        date: 'Aug 2018 - Present · 1 year',
        location: 'Paris',
        description:
          'Directly collaborated with CEO and Product team to prototype, design and deliver the UI and UX experience with a lean design process: research, design, test, and iterate.',
      },
  ];

  return (
    <div style={{ padding: '40px' }}>
      <Title style={{ fontSize: 48, fontWeight: 700 }}>Experience</Title>
      <Row gutter={[24, 24]}>
        {experiences.map((exp, index) => (
          <Col key={index} xs={24} sm={12} md={8}>
            <Card bordered={false} style={{ borderRadius: 10, boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
              <Text style={{ fontSize: 18, fontWeight: 700 }}>{exp.title}</Text>
              <br />
              <Text type="secondary" style={{ fontSize: 14, fontWeight: 700 }}>
                {exp.company}
              </Text>
              <br />
              <Text type="secondary" style={{ fontSize: 14 }}>
                {exp.date} · {exp.location}
              </Text>
              <br />
              <Text style={{ fontSize: 14 }}>{exp.description}</Text>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Experience;
