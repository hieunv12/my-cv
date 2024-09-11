import React from "react";
import { Avatar, Col, Row } from "antd";
import { UserOutlined } from "@ant-design/icons";
import Face from "../../../assets/Face";
import GitHub from "../../../assets/GitHub";
import InIcon from "../../../assets/InIcon";
import Tele from "../../../assets/Tele";
interface InfoUserProps {
  // khai báo kiểu dữ liệu cho props
  avatar: string;
  link_in: string;
  link_telegram: string;
  link_github: string;
  link_facebook: string;
}
const AvatarSection: React.FC<InfoUserProps> = (props) => {
  const { avatar, link_in, link_telegram, link_github, link_facebook } = props;
  // lấy giá trị infoUser
  return (
    <Col>
      <Avatar
        shape="square"
        size="large"
        style={{ width: 250, height: 250, borderRadius: 36 }}
        icon={<UserOutlined />}
        src={avatar}
      />

      <Row
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: 24,
          marginRight: 30,
        }}
      >
        <Col
          onClick={() => window.open(link_in, "_blank")}
          style={{ marginLeft: 30, marginTop: 16 }}
        >
          {/* _blank là mở 1 tab mới  */}
          <InIcon />
        </Col>
        <Col
          onClick={() => window.open(link_telegram, "_blank")}
          style={{ marginLeft: 30, marginTop: 16 }}
        >
          <Tele />
        </Col>
        <Col
          onClick={() => window.open(link_github, "_blank")}
          style={{ marginLeft: 30, marginTop: 16 }}
        >
          <GitHub />
        </Col>
        <Col
          onClick={() => window.open(link_facebook, "_blank")}
          style={{ marginLeft: 30, marginTop: 16 }}
        >
          <Face />
        </Col>
      </Row>
    </Col>
  );
};
export default AvatarSection;
