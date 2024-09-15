import { Menu } from "antd";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { UserOutlined, CalendarOutlined } from "@ant-design/icons"; // import relevant icons
import SkillIcon from "../../assets/SkillIcon";
import Education from "../../assets/EducationIcon";
import style from "antd/es/affix/style";

interface MenuHeaderProps {
  collapsed: boolean;
}

const MenuHeader: React.FC<MenuHeaderProps> = ({ collapsed }) => {

  const location = useLocation();
  console.log({location});
  
  // useLocation :là 1 hook trong react-router-dom: lấy các địa chỉ và lấy các thông tin trong path 
  // 
  const { pathname } = location;
// const text = "React is awesome";
// (method) String.startsWith(searchString: string, position?: number): boolean
// Kiểm tra chuỗi có bắt đầu bằng "React"
// console.log(text.startsWith("React")); // Kết quả: true
// statsWith ===> kiểm tra vị trí đầu tiên
//  Kiểm tra trong chuỗi có từ is 
// text.startsWith("is",6)
//  biên dịch :text bắt đầu kiểm tra vị trí só 6 có bắt đầu bằng is hay ko

  const getSelectedKeys = () => {
    // dùng để check xem path name là gì
    if (pathname.startsWith("/user/about")) {
      return ["about"];
      // array string
      // [1] array number
      // [{name:'duy',year:'2005'}] array object
    }
    //biên dịch: nếu pathname bắt đầu bằng searchString /user/about thì trả về giá trị ["about"](array string)
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
  const items = [
    {
      label: (
        <Link to="/user/about" style={{ marginLeft: 18 }}>
          About
        </Link>
      ),
      key: "about",
      icon: <UserOutlined />,
    },
    {
      label: (
        <Link to="/user/experience" style={{ marginLeft: 18 }}>
          Experience
        </Link>
      ),
      key: "experience",
      icon: <CalendarOutlined />,
    },
    {
      label: (
        <Link to="/user/skills" style={{ marginLeft: 25 }}>
          Skills
        </Link>
      ),
      key: "skills",
      icon: <SkillIcon />,
    },
    {
      label: (
        <Link to="/user/education" style={{ marginLeft: 23 }}>
          Education
        </Link>
      ),
      key: "education",
      icon: <Education />,
    },
  ];

  return (
    // Use the items array to render the menu
    <Menu
      items={items}
      selectedKeys={getSelectedKeys()}
      inlineCollapsed={collapsed}
      mode="inline"
      style={{ fontSize: 16, fontWeight: "bold", padding: 16 }}
    />
  );
};

export default MenuHeader; 