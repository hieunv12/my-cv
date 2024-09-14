import { Menu } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { UserOutlined, CalendarOutlined } from "@ant-design/icons"; // import relevant icons
import SkillIcon from "../../assets/SkillIcon";
import Education from "../../assets/EducationIcon";

interface MenuHeaderProps {
  collapsed: boolean;
}

const MenuHeader: React.FC<MenuHeaderProps> = ({ collapsed }) => {

  const getSelectedKeys = () => {
   
    return ["about"];
  };

  return (
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
  );
};

export default MenuHeader;
