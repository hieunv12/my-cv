import React, { useState } from "react";
import { Avatar, Button, Drawer, Layout, Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
import Sider from "antd/es/layout/Sider";
import {
  LeftOutlined,
  RightOutlined,
  UserOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import { Content } from "antd/es/layout/layout";
import AppText from "../Text";
import "./HeaderMenu.css";
import ChartIcon from "../../assets/svg/ChartIcon";
import FolderIcon from "../../assets/svg/FolderIcon";
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

  const infoUserUi = () => {
    return (
      <div
        style={{
          display: "flex",
 
          alignItems: "center",

          margin: 16,
          borderBottom: "2px solid #F6F6F6",
          paddingBottom: 24,
          marginBottom: 24,
          justifyContent: collapsed ? "center" : "space-between",
          transition: "all 0.3s ease", // Thêm hiệu ứng cho toàn bộ div
        }}
      >
        <div
          style={{
            flexDirection: "row",
            display: "flex",
            alignItems: "center",
            
          }}
        >
          <Avatar
            size={collapsed ? 32 : 44}
            src={
              "https://images2.thanhnien.vn/528068263637045248/2024/8/10/1-17232609003225266391.jpg"
            }
         
          />
       {!collapsed && <div
            style={{
              marginLeft: 16,
              maxHeight: collapsed ? "0px" : "50px", // Điều chỉnh maxHeight để tạo hiệu ứng ẩn/hiện
              opacity: collapsed ? 0 : 1, // Điều chỉnh opacity để ẩn/hiện mượt mà
              overflow: "hidden", // Đảm bảo khi thu gọn sẽ không bị tràn nội dung
              // transition: "all 0.3s ease", // Thêm hiệu ứng mượt mà
      
            }}
          >
            <AppText
              style={{ fontSize: 14, color: "#2F54EB", fontWeight: "bold" }}
            >
              Nguyen Van A
            </AppText>
            <AppText
              style={{
                fontSize: 10,
                fontWeight: "600",
                textTransform: "uppercase",
              }}
            >
              Full Stack Developer
            </AppText>
          </div>}
        </div>
      </div>
    );
  };

  return (
    <Layout style={{ height: "100vh" }}>
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
          backgroundColor: "white",
          borderRadius: 20,
          borderColor: "#000000",
          marginTop: 24,
          marginBottom: 24,
        }}
      >
        {/*  */}
        {infoUserUi()}
        {/*  */}
        <Button
          // type="primary"
          onClick={toggleCollapsed}
          style={{
            width: 28,
            height: 28,
            margin: 16,
            // backgroundColor: "white",
            borderRadius: 8,
            borderColor: "#F6F6F6",
            borderWidth: 1,
            position: "absolute",
            top: 8,
            right: -28,
            // position :  vị trí  , absolute : vị trí tuyệt đối (nằm ở vị trí nào thì nằm ở vị trí đó)
          }}
        >
          {!collapsed ? (
            <LeftOutlined color="black" />
          ) : (
            <RightOutlined color="black" />
          )}
        </Button>
        <Menu
          selectedKeys={getSelectedKeys()}
          inlineCollapsed={collapsed}
          mode="inline"
          style={{
            fontSize: 16,
            fontWeight: "600",
            paddingLeft: 16,
            paddingRight: 16,
          }}
        >
          <Menu.Item key="about" icon={<UserOutlined />}>
            <Link to="user/about" style={{ marginLeft: 2 }}>
              About
            </Link>
          </Menu.Item>
          <Menu.Item key="experience" icon={<CalendarOutlined />}>
            <Link to="user/experience" style={{ marginLeft: 2 }}>
              Experience
            </Link>
          </Menu.Item>
          <Menu.Item
            key="skills"
            icon={
              <ChartIcon style={{ marginRight: 12 }} width={16} height={16} />
            }
          >
            <Link to="user/skills">Skills</Link>
          </Menu.Item>
          <Menu.Item
            key="education"
            icon={
              <FolderIcon style={{ marginRight: 12 }} width={16} height={16} />
            }
          >
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
