import React from "react";
import { Row, Col, Typography, List, Avatar } from "antd";
import ExperienceCard from "./ExperienceCard";
import ItemExperience from "./block/ItemExperience";

const { Title } = Typography;
export interface ItemExperience {
  title: string;
  company: string;
  date: string;
  location: string;
  description: string;
}
const ExperienceList = () => {
  const experiences :ItemExperience[]= [
    {
      title: "Senior UI/UX Product Designer",
      company: "Apple",
      date: "Aug 2018 - Present · 1 year",
      location: "Paris",
      description:
        "Directly collaborated with CEO and Product team to prototype, design and deliver the UI and UX experience with a lean design process: research, design, test, and iterate.",
    },
    {
      title: "Senior UI/UX Product Designer",
      company: "Apple",
      date: "Aug 2018 - Present · 1 year",
      location: "Paris",
      description:
        "Directly collaborated with CEO and Product team to prototype, design and deliver the UI and UX experience with a lean design process: research, design, test, and iterate.",
    },
    {
      title: "Senior UI/UX Product Designer",
      company: "Apple",
      date: "Aug 2018 - Present · 1 year",
      location: "Paris",
      description:
        "Directly collaborated with CEO and Product team to prototype, design and deliver the UI and UX experience with a lean design process: research, design, test, and iterate.",
    },
    {
      title: "Senior UI/UX Product Designer",
      company: "Apple",
      date: "Aug 2018 - Present · 1 year",
      location: "Paris",
      description:
        "Directly collaborated with CEO and Product team to prototype, design and deliver the UI and UX experience with a lean design process: research, design, test, and iterate.",
    },
    {
      title: "Senior UI/UX Product Designer",
      company: "Apple",
      date: "Aug 2018 - Present · 1 year",
      location: "Paris",
      description:
        "Directly collaborated with CEO and Product team to prototype, design and deliver the UI and UX experience with a lean design process: research, design, test, and iterate.",
    },
    {
      title: "Senior UI/UX Product Designer",
      company: "Apple",
      date: "Aug 2018 - Present · 1 year",
      location: "Paris",
      description:
        "Directly collaborated with CEO and Product team to prototype, design and deliver the UI and UX experience with a lean design process: research, design, test, and iterate.",
    },
    {
      title: "Senior UI/UX Product Designer",
      company: "Apple",
      date: "Aug 2018 - Present · 1 year",
      location: "Paris",
      description:
        "Directly collaborated with CEO and Product team to prototype, design and deliver the UI and UX experience with a lean design process: research, design, test, and iterate.",
    },
    {
      title: "Senior UI/UX Product Designer",
      company: "Apple",
      date: "Aug 2018 - Present · 1 year",
      location: "Paris",
      description:
        "Directly collaborated with CEO and Product team to prototype, design and deliver the UI and UX experience with a lean design process: research, design, test, and iterate.",
    },
    {
      title: "Senior UI/UX Product Designer",
      company: "Apple",
      date: "Aug 2018 - Present · 1 year",
      location: "Paris",
      description:
        "Directly collaborated with CEO and Product team to prototype, design and deliver the UI and UX experience with a lean design process: research, design, test, and iterate.",
    },
  ];
  // khởi tạo arrow function
  const renderItem = (item: ItemExperience, index: number) => {
    // gọi function component vào trong arrow function
    return <ItemExperience item={item} index={index} />;
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-start",
        }}
      >
        <Title style={{ fontSize: 48, fontWeight: 700 }}>Experience</Title>
      </div>
      {/* <Row gutter={[24, 24]}>
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
      </Row> */}
      <List
        dataSource={experiences}
        pagination={{
          pageSize: 5, // Change to the number of items per page you want
        }}
        // renderItem  cần viết riêng ra :
        // b1 khởi tạo arrow function
        // b2 Khởi tạo function component
        // b3 gọi function component vào trong arrow function
        renderItem={renderItem}
      />
    </div>
  );
};

export default ExperienceList;
