import React from "react";
import AvatarList from "ant-design-pro/lib/AvatarList";
import "antd/dist/antd.css";
import "./styles.css";
import "ant-design-pro/dist/ant-design-pro.css";

const PicOverlap = () =>  {
  return (
    <div className="App">
      <AvatarList size="mini">
        <AvatarList.Item
          tips="Jake"
          src="https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png"
        />
        <AvatarList.Item
          tips="Andy"
          src="https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png"
        />
        <AvatarList.Item
          tips="Niko"
          src="https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png"
        />
      </AvatarList>
    </div>
  );
}

export default PicOverlap