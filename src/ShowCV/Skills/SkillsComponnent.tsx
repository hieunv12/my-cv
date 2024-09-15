import React, { useState } from 'react';

interface SkillDetail {
    title: string;
    details: string[];
}

interface SkillLevelProps {
    title: string;
    description: string;
    skills: SkillDetail[];
}

const SkillLevel: React.FC<SkillLevelProps> = ({
    title,
    description,
    skills
}) => {
    const [expanded, setExpanded] = useState(false);

    const toggleExpand = () => {
        setExpanded(!expanded);
    };

    return (
        <div style={{
            borderRadius: '16px',
            padding: '20px',
            marginBottom: '30px', 
            backgroundColor: '#E5F7EB',
            width: '100%',
            maxWidth: '300px',
            minHeight: 900, 
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}>
            <h2 style={{
  
                padding: '10px',
                borderRadius: '12px 12px 0 0',
                margin: '0',
                textAlign: 'center',
                color: '#2C3E50'
            }}>{title}</h2>
            <p style={{
                padding: '10px',
                // backgroundColor: '#BFD6BF',
                borderRadius: '0 0 12px 12px',
                textAlign: 'center',
                color: '#2C3E509E',
            }}>{description}</p>

            <div style={{
                padding: '10px',
                backgroundColor: '#fff',
                borderRadius: '12px',
                marginTop: '10px',
                cursor: 'pointer',
                border: '1px solid #ccc'
            }} onClick={toggleExpand}>
                {skills.length > 0 ? (
                    skills.map((skill, index) => (
                        <div key={index}>
                            <h3>{skill.title}</h3>
                            <h3>{skill.details}</h3>
                            {expanded && (
                                <ul>
                                    {skill.details.map((detail, detailIndex) => (
                                        <li key={detailIndex}>{detail}</li>
                                    ))}
                                </ul>
                            )}
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
        description: 'Dưới 1 năm kinh nghiệm cho chuyên môn của bản thân',
        skills: [
            {
                title: 'Reactjs',
                details: [
                    'Phân chia các component',
                    'Sử dụng các hook cơ bản: useState, useEffect, ...',
                    'Call các API'
                ],
            },
        ],
    },
    {
        level: 'Intermediate',
        description: 'Trong khoảng từ 1 - 3 năm kinh nghiệm',
        skills: [
            {
                title: 'Reactjs',
                details: [
                    'Tối ưu hóa hiệu suất',
                    'Sử dụng các hook nâng cao',
                    'Xử lý state phức tạp'
                ],
            },
        ],
    },
    {
        level: 'Excellent',
        description: 'Hơn 3 năm kinh nghiệm cho chuyên môn của bản thân',
        skills: [
            {
                title: 'Reactjs',
                details: [
                    'Thiết kế kiến trúc ứng dụng phức tạp',
                    'Tích hợp với các công nghệ backend',
                    'Quản lý dự án và mentor cho đội ngũ phát triển'
                ],
            },
        ],
    },
];

const SkillsComponent: React.FC = () => {
    return (
        <div style={{
            padding: '40px',
            fontFamily: 'Arial, sans-serif'
        }}>
            <h1 style={{
                fontSize: '48px',
                marginBottom: '40px',
            }}>Skills</h1>
            <div style={{
                display: 'flex',
                justifyContent: 'space-around',
                gap: '20px',
                flexWrap: 'wrap',
            }}>
                {skillsData.map((level, index) => (
                    <SkillLevel
                        key={index}
                        title={level.level}
                        description={level.description}
                        skills={level.skills}
                    />
                ))}
            </div>
        </div>
    );
};

export default SkillsComponent;
