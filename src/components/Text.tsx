import React from 'react';
import { Typography } from 'antd';

const {  Text } = Typography;


const AppText = ({children,style}:{children:React.ReactNode,style?:React.CSSProperties}) => {
  return (
    <div>
 
      <Text style={style}>{children}</Text>
    </div>
  );
};
export default AppText;