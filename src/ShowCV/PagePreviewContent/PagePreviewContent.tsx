import { Menu } from "antd";
import React from "react";
import { MessageOutlined } from '@ant-design/icons';
// khai baso props
interface Props {
  userInfo: {
    name: string;
    age: number;
    address: string;
    phone: string;
    email: string;
    avatar: string;
    description: string;
  };
}
const PagePreviewContent = (props: Props) => {
  const { userInfo } = props;
  return (
    <div style={{ width: "80%", height: "100%", backgroundColor: "white" }}>
      <h1
        style={{
          textAlign: "center",
          fontSize: 50,
          fontWeight: "bold",
          color: "orange",
        }}
      >
        {userInfo.name}
      </h1>
      <p style={{ textAlign: "center", fontSize: 15, color: "black" }}>
        {userInfo.age} tuổi
      </p>
      <p style={{ textAlign: "center", fontSize: 15, color: "black" }}>
        {userInfo.address}
      </p>
      <p style={{ textAlign: "center", fontSize: 15, color: "black" }}>
        {userInfo.phone}
      </p>
      <p style={{ textAlign: "center", fontSize: 15, color: "black" }}>
        {userInfo.email}
      </p>
      <p style={{ textAlign: "center", fontSize: 15, color: "black" }}>
        {userInfo.description}
      </p>
      <MessageOutlined style={{ fontSize: '30px', color: '#08c', margin: 50, }} />;
    </div>
  );
};
export default PagePreviewContent;