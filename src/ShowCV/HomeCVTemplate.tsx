import { Button, Col, Flex, Row } from "antd";
import React from "react";
import SideBar from "./SideBar/SideBar";
import PagePreviewContent from "./PagePreviewContent/PagePreviewContent";

const HomeCVTemplate: React.FC = () => {
  const userInfo = {
    name: "Nguyen Van A",
    age: 20,
    address: "Ha Noi",
    phone: "0987654321",
    email: "nguyenvana@gmail.com",
    avatar:
      "https://images2.thanhnien.vn/528068263637045248/2024/8/10/1-17232609003225266391.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  };
  return (
    <Flex align="start" style={{ height: "100vh" }}>
      {/* Chia nhỏ các component */}
      {/* GỌi component SideBar vào trong HomeCVTemplate */}
      {/* Row  là 1 thuộc css của ant design : Cho các children (con) cùng nằm trên 1 hàng */}
      <SideBar />
      <PagePreviewContent userInfo={userInfo} />
    </Flex>
  );
};

export default HomeCVTemplate;
