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
import SkillIcon from "../../assets/SkillIcon";
import Education from "../../assets/EducationIcon";
import UserInformation from "./UserInformation";
import MenuHeader from "./MenuHeader";


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
    <Layout style={{ height: "100vh", background: "white" }}>
      <Sider
        collapsed={collapsed}
        width={256}
        style={{
         
          marginTop: 24,
          marginBottom: 24,
          backgroundColor: "white",
          borderRadius: 20,
          borderRight: "1px solid #0000001A",

        }}
      >
        {/* Khai báo Props 
            lấy giá trị Props từ màn hình cha
            Truyền props từ màn hình cha sang màn hình con
        */}
       <UserInformation 
       collapsed = {collapsed}
       toggleCollapsed={toggleCollapsed}
       />

        <div style={{ borderBottom: "2px solid #E8E8E8", margin: "16px 0" }} />

        <MenuHeader collapsed={false} />
      </Sider>

{/* chứa các page con : About, Experience, Skills, Education */}
      <Layout style={{paddingLeft:32,paddingRight:32,paddingTop:50, background: "white"}}>
        <Content >{children}</Content>
      </Layout>
    </Layout>
  );
};

export default HeaderMenu;
