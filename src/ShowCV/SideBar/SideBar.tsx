import { Avatar, Menu } from "antd";
import React from "react";
import { UserOutlined } from "@ant-design/icons";

// eslint-disable-next-line no-sparse-arrays
const items = [
  {
    key: "sub1",
    label: "About",
  },
  {
    key: "sub2",
    label: "Experience",
  },
  {
    key: "sub3",
    label: "Education",
  },
  {
    key: "sub6",
    label: "Skills",
  },
  {
    key: "sub5",
    label: "Interests",
  },
  ,
  {
    key: "sub4",
    label: "Awards",
  },
];
const onClick = (e: any) => {
    // Tạo component Menu tùy chỉnh

    // typescript là 1 ngôn ngữ lập trình dựa trên javascript
    // type any là kiểu dữ liệu bất kỳ
    // type object là kiểu dữ liệu là 1 object
    // type function là kiểu dữ liệu là 1 function
    // type array là kiểu dữ liệu là 1 mảng
    // type number là kiểu dữ liệu là 1 số
    // type string là kiểu dữ liệu là 1 chuỗi
    // type boolean là kiểu dữ liệu là 1 boolean
    // type null là kiểu dữ liệu là null
    // type undefined là kiểu dữ liệu là undefined
    // type symbol là kiểu dữ liệu là 1 symbol
  console.log(e);
};
const SideBar: React.FC = () => {
  return (
    <div
      style={{
        width: "20%",
        height: "100%",
        backgroundColor: "orange",
      
      }}
    >
      <Avatar
        size={200}
        style={{margin:20}}
        src={
          "https://images2.thanhnien.vn/528068263637045248/2024/8/10/1-17232609003225266391.jpg"
        }
      />
      <Menu
        onClick={onClick}
        style={{
          backgroundColor: "orange",
          fontSize: 20,
          fontWeight: "bold",
          textTransform: "uppercase",
          marginTop: 16,
        }}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        items={items as import("antd").MenuProps["items"]}
      />
    </div>
  );
};
export default SideBar;
