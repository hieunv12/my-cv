import React from 'react';
import { motion } from 'framer-motion';
import { Typography, Space } from 'antd';
import { Link } from 'react-router-dom';
import Button from '../atoms/Button';

const { Title, Paragraph } = Typography;

const LandingTemplate: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{ padding: '2rem', textAlign: 'center' }}
    >
      <motion.div
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, type: 'spring' }}
      >
        <Title>Welcome to My CV</Title>
        <Paragraph>
          Discover my professional journey, skills, and experience.
        </Paragraph>
      </motion.div>

      <Space size="large" direction="vertical">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Link to="/cv">
            <Button text="View My CV" onClick={() => {}} />
          </Link>
        </motion.div>
      </Space>
    </motion.div>
  );
};

export default LandingTemplate;
