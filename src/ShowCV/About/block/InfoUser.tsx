import {
  HomeOutlined,
  MailOutlined,
  PhoneOutlined
} from "@ant-design/icons";
import { Col, Typography } from "antd";
import React from "react";
const { Text } = Typography;
const InfoUser: React.FC = () => {
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
            Nguyễn Văn Hiếu
            {/* cái điền giá trị trực tiếp  người ta gọi là fix cứng */}
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
            REACTJS DEVELOPER
          </Text>
          <Text
            style={{
              display: "block",
              fontFamily: "Poppins",
              fontSize: 16,
              fontWeight: 400,
              marginBottom: 16
            }}
          >
            <PhoneOutlined style={{ marginRight: 8 }} />
            +846213871244
          </Text>
          <Text
            style={{
              display: "block",
              fontFamily: "Poppins",
              fontSize: 16,
              fontWeight: 400,
              marginBottom: 16
            }}
          >
            <MailOutlined style={{ marginRight: 8 }} />
            abc@gmail.com
          </Text>
          <Text
            style={{
              display: "block",
              fontFamily: "Poppins",
              fontSize: 16,
              fontWeight: 400,
              marginBottom: 16
            }}
          >
            <HomeOutlined style={{ marginRight: 8 }} />
            Quận A, Hà Nội
          </Text>
        </Col>
  )
};

export default InfoUser;
