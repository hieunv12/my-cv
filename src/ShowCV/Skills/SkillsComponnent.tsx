import React, { useState } from 'react';
import { DownOutlined, UpOutlined } from '@ant-design/icons';

const TypeBackGround = (type: string) => {
    switch (type) {
        case 'Beginner':
            return '#A8D5BA';
        case 'Intermediate':
            return '#5DADE2';
        case 'Excellent':
            return '#1ABC9C';
        default:
            return '#E5F7EB';
    }
};

interface SkillDetail {
    title: string;
    details: string[];
}

interface SkillLevelProps {
    title: string;
    description: string;
    skills: SkillDetail[];
    type: string;
}

const SkillLevel: React.FC<SkillLevelProps> = ({
    title,
    description,
    skills,
    type,
}) => {
    const [expandedSkillIndex, setExpandedSkillIndex] = useState<number | null>(null);

    const toggleExpand = (index: number) => {
        setExpandedSkillIndex(expandedSkillIndex === index ? null : index);
    };

    return (
        <div
            style={{
                borderRadius: '16px',
                padding: '20px',
                marginBottom: '30px',
                backgroundColor: TypeBackGround(type),
                width: '100%',
                maxWidth: '300px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            }}
        >
            <h2
                style={{
                    textAlign: 'center',
                    color: '#2C3E50',
                }}
            >
                {title}
            </h2>
            <p
                style={{
                    textAlign: 'center',
                    color: '#2C3E509E',
                }}
            >
                {description}
            </p>

            <div style={{ backgroundColor: '#fff', borderRadius: '12px' }}>
                {skills.length > 0 ? (
                    skills.map((skill, index) => (
                        <div
                        onClick={() => toggleExpand(index)}
                            key={index}
                            style={{
                                padding: '10px',
                                cursor: 'pointer',
                                borderBottom: '1px solid #eee',
                            }}
                        >
                            <div
                               
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between'
                                   
                                }}
                            >
                                <p style={{ margin: 0 }}>{skill.title}</p>
                              
                            </div>
                            {expandedSkillIndex === index && (
                                <ul style={{ paddingLeft: '20px' }}>
                                    {skill.details.map((detail, detailIndex) => (
                                        <li key={detailIndex}>{detail}</li>
                                    ))}
                                </ul>
                            )}
                              <div style={{display:'flex',justifyContent:'center' }}>
                                    {expandedSkillIndex === index ? (
                                        <UpOutlined style={{ fontSize: '16px' }} />
                                    ) : (
                                        <DownOutlined style={{ fontSize: '16px' }} />
                                    )}
                                </div>
                        </div>
                    ))
                ) : (
                    <p>No Skills Available</p>
                )}
            </div>
        </div>
    );
};

const skillsData = [
    {
        level: 'Beginner',
        type: 'Beginner',
        description: 'Dưới 1 năm kinh nghiệm cho chuyên môn của bản thân',
        skills: [
            {
                title: 'Reactjs',
                details: [
                    'Phân chia các component',
                    'Sử dụng các hook cơ bản: useState, useEffect, ...',
                    'Call các API',
                ],
            },
            {
                title: 'HTML',
                details: ['Cơ bản về HTML', 'Thực hành các thẻ HTML phổ biến', 'Tối ưu SEO'],
            },
        ],
    },
    {
        level: 'Intermediate',
        type: 'Intermediate',
        description: 'Trong khoảng từ 1 - 3 năm kinh nghiệm',
        skills: [
            {
                title: 'Reactjs',
                details: [
                    'Tối ưu hóa hiệu suất',
                    'Sử dụng các hook nâng cao',
                    'Xử lý state phức tạp',
                ],
            },
        ],
    },
    {
        level: 'Excellent',
        type: 'Excellent',
        description: 'Hơn 3 năm kinh nghiệm cho chuyên môn của bản thân',
        skills: [
            {
                title: 'Reactjs',
                details: [
                    'Thiết kế kiến trúc ứng dụng phức tạp',
                    'Tích hợp với các công nghệ backend',
                    'Quản lý dự án và mentor cho đội ngũ phát triển',
                ],
            },
        ],
    },
];

const SkillsComponent: React.FC = () => {
    return (
        <div style={{ padding: '10px', fontFamily: 'Arial, sans-serif' }}>
            <h1 style={{ fontSize: '48px', marginBottom: '40px' }}>Skills</h1>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    gap: '20px',
                    flexWrap: 'wrap',
                }}
            >
                {skillsData.map((level, index) => (
                    <SkillLevel
                        key={index}
                        title={level.level}
                        description={level.description}
                        skills={level.skills}
                        type={level.type}
                    />
                ))}
            </div>
        </div>
    );
};

export default SkillsComponent;
