import { Avatar, Button, Col, Typography } from "antd";
import React from "react";
import {

    LeftOutlined,
    RightOutlined,
  } from "@ant-design/icons";


const { Text } = Typography;

interface UserInformationProps {
    collapsed: boolean;
    // nếu mà có dấu ? thì có hay ko ko cần thiết 
    toggleCollapsed: () => void
}
const UserInformation:  React.FC<UserInformationProps> = (props) => {
    const {collapsed, toggleCollapsed} = props;

    return(
        <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          margin: 16,
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <Avatar
            size={70}
            style={{
              width: 44,
              height: 44,
            }}
            src="https://images2.thanhnien.vn/528068263637045248/2024/8/10/1-17232609003225266391.jpg"
          />
          {!collapsed && (
            <Col style={{ marginLeft: 16, whiteSpace: "nowrap" }}>
              <Text
                style={{ fontSize: 16, fontWeight: "bold", color: "#2F54EB" }}
              >
                Vikashini
              </Text>
              <Text
                style={{ display: "block", fontSize: 10, fontWeight: 600 }}
              >
                REACTJS DEVELOPER
              </Text>
            </Col>
          )}
        </div>

        <Button
          // type="primary"
          onClick={toggleCollapsed}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 30,
            height: 30,
            borderRadius: "30%",
            transition: "all 0.3s",
            position: "absolute",
            right: -20,
          }}
        >
          {!collapsed ? <LeftOutlined /> : <RightOutlined />}
        </Button>
      </div>
    )
}

export default UserInformation
