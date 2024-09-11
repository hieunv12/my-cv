import { Button, Col, Flex, Row } from "antd";
import React from "react";
import SideBar from "./SideBar/SideBar";
import PagePreviewContent from "./PagePreviewContent/PagePreviewContent";

const HomeCVTemplate: React.FC = () => {
  const userInfo = {
    name: "NGUYỄN VĂN DUY",
    age: 20,
    address: "Ha Noi",
    phone: "0377303105",
    email: "duynvph50688@gmail.com",
    avatar:
      "https://images2.thanhnien.vn/528068263637045248/2024/8/10/1-17232609003225266391.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  };
  return (
    <Flex align="start" style={{ height: "100vh" }}>
      <SideBar />
      <PagePreviewContent userInfo={userInfo} />
    </Flex>
  );
};

export default HomeCVTemplate;