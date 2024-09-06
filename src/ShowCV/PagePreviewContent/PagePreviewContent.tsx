import { Menu } from "antd";
import React from "react";
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
    <div style={{ width: "80%", height: "100%", backgroundColor: "red" }}>
      <h1
        style={{
          textAlign: "center",
          fontSize: 30,
          fontWeight: "bold",
          color: "orange",
        }}
      >
        {userInfo.name}
      </h1>
      <p style={{ textAlign: "center", fontSize: 15, color: "orange" }}>
        {userInfo.age} tuổi
      </p>
      <p style={{ textAlign: "center", fontSize: 15, color: "orange" }}>
        {userInfo.address}
      </p>
      <p style={{ textAlign: "center", fontSize: 15, color: "orange" }}>
        {userInfo.phone}
      </p>
      <p style={{ textAlign: "center", fontSize: 15, color: "orange" }}>
        {userInfo.email}
      </p>
      <p style={{ textAlign: "center", fontSize: 15, color: "orange" }}>
        {userInfo.description}
      </p>
    </div>
  );
};
export default PagePreviewContent;
