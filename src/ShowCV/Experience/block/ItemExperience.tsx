import { List, Avatar } from "antd";
import React from "react";

interface ItemExperienceProps{
    item:any,
    index:number
}
const ItemExperience=(props:ItemExperienceProps)=>{
    
    const {item,index}=props
    // item=props.item  index=props.index
    return(
        <List.Item>
        <List.Item.Meta
          avatar={
            <Avatar
              src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}
            />
          }
          title={<a href="https://ant.design">{item.title}</a>}
          description={`
            ${item.company} · ${item.date} · ${item.location}
            ${item.description}
          `}
        />
      </List.Item>
    )
}
export default ItemExperience