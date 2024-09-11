import React from "react";
import {
  UserOutlined,
  PhoneOutlined,
  MailOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { Avatar, Typography, Col, Row } from "antd";
import InIcon from "../../assets/InIcon";
import Face from "../../assets/Face";
import Tele from "../../assets/Tele";
import GitHub from "../../assets/GitHub";

const { Text } = Typography;

const About: React.FC = () => {
  return (
    <div style={{ marginLeft: 30, marginTop: 70 }}>
      <Row gutter={24}>
        <Col>
          <Avatar
            shape="square"
            size="large"
            style={{ width: 250, height: 250, borderRadius: 36}}
            icon={<UserOutlined />}
            src="https://images2.thanhnien.vn/528068263637045248/2024/8/10/1-17232609003225266391.jpg"
            
          />

          <Row
            style={{
              display: "flex",
              flexDirection: "row",
              marginTop: 24,
              marginRight: 30,
            }}
          >
            <Col style={{ marginLeft: 30, marginTop: 16 }}>
              <InIcon />
            </Col>
            <Col style={{ marginLeft: 30, marginTop: 16 }}>
              <Tele />
            </Col>
            <Col style={{ marginLeft: 30, marginTop: 16 }}>
              <GitHub />
            </Col>
            <Col style={{ marginLeft: 30, marginTop: 16}}>
              <Face />
            </Col>
          </Row>
         
        </Col>
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
      </Row>
      <p style={{marginTop: 30, fontWeight: 300, fontSize: 12, }}>
            02 năm kinh nghiệm đào tạo kỹ năng bán hàng và kỹ năng mềm tại
            trường đại học và doanh nghiệp. Kinh nghiệm đứng lớp 50 - 500 học
            viên. Có thế mạnh về thiết kế chương trình, đào tạo trực tuyến và
            xây dựng chuẩn đầu ra. Đang tìm kiếm cơ hội làm việc tại vị trí [X]
            để đóng góp gia tăng chất lượng chương trình đào tạo cho công ty
            [Y].
          </p>
    </div>
  );
};

export default About;
