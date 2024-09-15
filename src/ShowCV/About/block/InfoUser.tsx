import {
  HomeOutlined,
  MailOutlined,
  PhoneOutlined
} from "@ant-design/icons";
import { Col, Typography } from "antd";
import React from "react";

const { Text } = Typography;

interface InfoUserProps {
  name: string;
  role: string;
  phone: string;
  email: string;
  address: string;
}

const InfoUser: React.FC<InfoUserProps> = ({ name, role, phone, email, address }) => {
  return (
    <Col style={{ whiteSpace: "nowrap", marginLeft: 16 }}>
      <Text
        style={{
          fontSize: 48,
          fontWeight: 700,
          color: "#030723",
          fontFamily: "Poppins",
          marginBottom: 16,
        }}
      >
        {name}
      </Text>
      <Text
        style={{
          display: "block",
          fontFamily: "Poppins",
          fontSize: 16,
          fontWeight: "bold",
          marginBottom: 16,
        }}
      >
        {role}
      </Text>
      <Text
        style={{
          display: "block",
          fontFamily: "Poppins",
          fontSize: 16,
          fontWeight: 400,
          marginBottom: 16,
        }}
      >
        <PhoneOutlined style={{ marginRight: 8 }} />
        {phone}
      </Text>
      <Text
        style={{
          display: "block",
          fontFamily: "Poppins",
          fontSize: 16,
          fontWeight: 400,
          marginBottom: 16,
        }}
      >
        <MailOutlined style={{ marginRight: 8 }} />
        {email}
      </Text>
      <Text
        style={{
          display: "block",
          fontFamily: "Poppins",
          fontSize: 16,
          fontWeight: 400,
          marginBottom: 16,
        }}
      >
        <HomeOutlined style={{ marginRight: 8 }} />
        {address}
      </Text>
    </Col>
  );
};

export default InfoUser;
