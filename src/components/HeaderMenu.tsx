import React, { useState } from "react";
import { Button, Layout, Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
import Sider from "antd/es/layout/Sider";
import {
  UserOutlined,
  CalendarOutlined,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";
import { Content } from "antd/es/layout/layout";
import { Avatar, Typography, Col } from "antd";
import SkillIcon from "../assets/SkillIcon";
import Education from "../assets/EducationIcon";

const { Text } = Typography;

const HeaderMenu = ({ children }: any) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  const location = useLocation();
  const { pathname } = location;

  const getSelectedKeys = () => {
    if (pathname.startsWith("/user/about")) {
      return ["about"];
    }
    if (pathname.startsWith("/user/experience")) {
      return ["experience"];
    }
    if (pathname.startsWith("/user/skills")) {
      return ["skills"];
    }
    if (pathname.startsWith("/user/education")) {
      return ["education"];
    }
    return [];
  };
  return (
    <Layout style={{ height: "100vh" }}>
      <Sider
        collapsed={collapsed}
        width={256}
        style={{
         
          marginTop: 24,
          marginBottom: 24,
          backgroundColor: "white",
          borderRadius: 20,
          borderColor: "#000000",
          border: "2px solid #fff",
        }}
      >
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
            type="primary"
            onClick={toggleCollapsed}
            style={{
              backgroundColor: collapsed ? "#1890ff" : "#ffffff",
              color: collapsed ? "#ffffff" : "#1890ff",
              border: "2px solid #1890ff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 40,
              height: 40,
              borderRadius: "50%",
              transition: "all 0.3s",
              position: "absolute",
              right: -20,
            }}
          >
            {!collapsed ? <LeftOutlined /> : <RightOutlined />}
          </Button>
        </div>

        <div style={{ borderBottom: "2px solid #E8E8E8", margin: "16px 0" }} />

        <Menu
          selectedKeys={getSelectedKeys()}
          inlineCollapsed={collapsed}
          mode="inline"
          style={{ fontSize: 16, fontWeight: "bold", padding: 16 }}
        >
          <Menu.Item key="about" icon={<UserOutlined />}>
            <Link to="user/about" style={{ marginLeft: 18 }}>
              About
            </Link>
          </Menu.Item>
          <Menu.Item key="experience" icon={<CalendarOutlined />}>
            <Link to="user/experience" style={{ marginLeft: 18 }}>
              Experience
            </Link>
          </Menu.Item>
          <Menu.Item key="skills" icon={<SkillIcon />}>
            <Link to="user/skills" style={{ marginLeft: 25 }}>
              Skills
            </Link>
          </Menu.Item>
          <Menu.Item key="education" icon={<Education />}>
            <Link to="user/education" style={{ marginLeft: 23 }}>
              Education
            </Link>
          </Menu.Item>
        </Menu>
      </Sider>

{/* chứa các page con : About, Experience, Skills, Education */}
      <Layout style={{paddingLeft:32,paddingRight:32,paddingTop:50, background: "white"}}>
        <Content >{children}</Content>
      </Layout>
    </Layout>
  );
};

export default HeaderMenu;
