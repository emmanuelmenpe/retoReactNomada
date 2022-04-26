import React from "react";
import { Card, Typography } from "antd";
import { URL_IMG_TMDB } from "../variables";

const { Title, Paragraph } = Typography;

const Profile = ({ data }) => {
  return (
    <Card
      style={{ width: 300, margin: "auto" }}
      cover={<img alt="example" src={`${URL_IMG_TMDB}${data.profile_path}`} />}
    >
      {data.name ? (
        <Title>{data.name}</Title>
      ) : (
        <Paragraph type="danger">Nombre no disponible</Paragraph>
      )}

      {data.popularity ? (
        <Title level={5}>Popularidad: {data.popularity}</Title>
      ) : (
        <Paragraph type="danger">Popularidad no disponible</Paragraph>
      )}
    </Card>
  );
};

export default Profile;
