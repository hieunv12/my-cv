import React, { useEffect, useState } from "react";

import { Row } from "antd";

import InfoUser from "./block/InfoUser";
import AvatarSection from "./block/AvatarSection";

const About: React.FC = () => {
  const [infoUser, setInfoUser] = useState<any>(null);

  // cách chuyền dữ liệu từ component sang component khác bằng cách chuyền props
  useEffect(() => {
    // call api responseUser
    // useEffect : là một hook trong React, nó được sử dụng để
    // thực hiện một số hành động sau khi một component được render
    // useEffect về học
    callApi();
  }, []);
  const callApi = () => {
    // call api responseUser
    const responseUser = {
      name: "Nguyễn Văn Hiếu",
      position: "ReactJS Developer",
      description:
        "02 năm kinh nghiệm đào tạo kỹ năng bán hàng và kỹ năng mềm tại trường đại học và doanh nghiệp. Kinh nghiệm đứng lớp 50 - 500 học viên. Có thế mạnh về thiết kế chương trình, đào tạo trực tuyến và xây dựng chuẩn đầu ra. Đang tìm kiếm cơ hội làm việc tại vị trí [X] để đóng góp gia tăng chất lượng chương trình đào tạo cho công ty [Y].",
      avatar:
        "https://images2.thanhnien.vn/528068263637045248/2024/8/10/1-17232609003225266391.jpg",
      link_in: "https://www.linkedin.com/in/nguyenvanhieu/",
      link_telegram: "https://t.me/nguyenvanhieu",
      link_github: "https://github.com/nguyenvanhieu",
      link_facebook: "https://www.facebook.com/nguyenvanhieu",
      address: "1234 Main St, Anytown, USA",
      phone: "1234567890",
      email: "nguyenvanhieu@example.com",
      skills: [
        { name: "ReactJS", level: "Expert" },
        { name: "JavaScript", level: "Advanced" },
        { name: "HTML", level: "Intermediate" },
        { name: "CSS", level: "Intermediate" },
        { name: "Node.js", level: "Intermediate" },
        { name: "Express", level: "Intermediate" },
        { name: "MongoDB", level: "Intermediate" },
        { name: "MongoDB", level: "Intermediate" },
      ],
    };
    setInfoUser(responseUser);
  };
  return (
    <div  >
      <Row gutter={24}>
        {/* công dụng chia nhỏ các component là 
        
          -Dễ nhìn (code sạch) Dễ quản lý
          -Dễ tái sử dụng
          - Dễ thay đổi
          - Hạn chế việc render lại các component khác khi chỉ cần render lại 1 component
        */}
        <AvatarSection
          // truyền dữ liệu từ component sang component khác bằng cách chuyền props
          // và avatar, name, position, description là các props của component AvatarSection
          // ? là optional chaining nghĩa là nếu infoUser không có avatar, name, position, description thì sẽ không bị lỗi
          avatar={infoUser?.avatar}
          link_in={infoUser?.link_in}
          link_telegram={infoUser?.link_telegram}
          link_github={infoUser?.link_github}
          link_facebook={infoUser?.link_facebook}
        />

      <InfoUser
        name={infoUser?.name}
        role={infoUser?.role}
        phone={infoUser?.phone}
        email={infoUser?.email}
        address={infoUser?.address}
      /> 
        
      </Row>
      <p style={{ marginTop: 30, fontWeight: 300, fontSize: 12 }}>
        {infoUser?.description}
      </p>
    </div>
  );
};

export default About;
