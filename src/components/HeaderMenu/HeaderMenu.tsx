import { Layout, Typography } from "antd";
import { Content } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import MenuHeader from "./MenuHeader";
import UserInformation from "./UserInformation";

const { Text } = Typography;

const HeaderMenu = ({ children }: any) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
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
          collapsed={collapsed}
          toggleCollapsed={toggleCollapsed}
        />

        <div style={{ borderBottom: "2px solid #E8E8E8", margin: "16px 0" }} />

        <MenuHeader collapsed={collapsed} />
      </Sider>

      {/* chứa các page con : About, Experience, Skills, Education */}
      <Layout
        style={{
          paddingLeft: 32,
          paddingRight: 32,
          paddingTop: 50,
          background: "white",
        }}
      >
        <Content>{children}</Content>
      </Layout>
    </Layout>
  );
};

export default HeaderMenu;
