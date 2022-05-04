import React from "react";
import { Upload } from "antd";
import { InboxOutlined } from "@ant-design/icons";

const DragyDrop = ({ props }) => {
  const { Dragger } = Upload;

  return (
    <Dragger {...props}>
      <p className="ant-upload-drag-icon">
        <InboxOutlined />
      </p>
      <p className="ant-upload-text">Haz click o arrastra una imagen</p>
      <p className="ant-upload-hint">
        Selecciona la foto de un actor famoso para conocer quién es y en qué
        películas ha salido.
      </p>
    </Dragger>
  );
};

export default DragyDrop;
