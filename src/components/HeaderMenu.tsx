import React, { useState } from "react";
import { Button, Drawer, Layout, Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
import Sider from "antd/es/layout/Sider";
import { MenuUnfoldOutlined, MenuFoldOutlined, } from "@ant-design/icons";
import { Content } from "antd/es/layout/layout";

const HeaderMenu = ({ children }: any) => {
  const [collapsed, setCollapsed] = useState(false);

  // Hàm để toggle (thu gọn/mở rộng) Sider
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  const location = useLocation();
  const { pathname } = location;
  // Xác định mục nào đang được chọn
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
    <Layout>
        {/* layout là 1 cái khung chứa các component con */}
        {/* Sider là 1 cái thanh bên trái của layout */}
        {/* \collapsed là 1 cái thanh để thu gọn/mở rộng Sider */}

        {/* thu gọn/mở rộng thì sử dụng Sider */}
        {/* Sider có 1 cái button để thu gọn/mở rộng */}
        {/* Menu là 1 cái menu để chọn các mục */}
        {/* Content là 1 cái khung chứa các component con */}
        
      <Sider
        // collapsible
        collapsed={collapsed}
        width={256}
        
        style={{
          height: "100vh",
          marginTop: 24,
          marginBottom: 24,
          backgroundColor: "white",
          borderRadius: 20,
          borderColor: "#000000",
        }}
      >
        <Button type="primary" onClick={toggleCollapsed} style={{ margin: 16 }}>
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
        <Menu
          selectedKeys={getSelectedKeys()}
          inlineCollapsed={collapsed}
          mode="inline"
          style={{fontSize:16,fontWeight:'bold'}}
        >
          <Menu.Item key="about"  >
            <Link to="user/about">About</Link>
          </Menu.Item>
          <Menu.Item key="experience">
            <Link to="user/experience">Experience</Link>
          </Menu.Item>
          <Menu.Item key="skills">
            <Link to="user/skills">Skills</Link>
          </Menu.Item>
          <Menu.Item key="education">
            <Link to="user/education">Education</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Content style={{ padding: "16px" }}>{children}</Content>
      </Layout>
    </Layout>
  );
};

export default HeaderMenu;
