import React from 'react';
import { Row, Col, Typography } from 'antd';
import ExperienceCard from './ExperienceCard';

const { Title } = Typography;

const ExperienceList = () => {
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
    <div>
      <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
        <Title style={{ fontSize: 48, fontWeight: 700 }}>Experience</Title>
      </div>
      <Row gutter={[24, 24]}>
        {experiences.map((exp, index) => (
          <Col key={index} xs={24} sm={12} md={8}>
            <ExperienceCard
              title={exp.title}
              company={exp.company}
              date={exp.date}
              location={exp.location}
              description={exp.description}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ExperienceList;
