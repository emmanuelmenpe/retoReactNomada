import React from "react";
import { Card, Image, Row, Col, Divider, Typography, Skeleton } from "antd";
import { StarFilled } from "@ant-design/icons";
import { URL_IMG_TMDB } from "../variables";

const { Title, Paragraph } = Typography;
let day, month, year;

const fecha = (date) => {
  const fecha = new Date(date);
  const months = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre",
  ];

  day = fecha.getDate();
  month = fecha.getMonth();
  year = fecha.getFullYear();

  months.find((e, i) => {
    if (i === month) {
      month = months[i];
    }
  });

  return day + " de " + month + " de " + year;
};

const UseCard = ({ data }) => {
  return (
    <div style={{ paddingLeft: "10%", paddingRight: "10%" }}>
      {data.known_for.map((movie, index) => (
        <div key={index}>
          <Card style={{ width: "100%", margin: "auto" }}>
            <Row>
              <Col span={20}>
                {movie.title ? (
                  <Title>{movie.title}</Title>
                ) : (
                  <Paragraph type="danger">Título no disponible</Paragraph>
                )}
              </Col>
              <Col
                span={4}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-end",
                  alignContent: "center",
                }}
              >
                {movie.vote_average ? (
                  <>
                    <Title level={4}>{movie.vote_average}/10</Title>
                    <StarFilled style={{ height: "40px", width: "40px" }} />
                  </>
                ) : (
                  <Paragraph type="danger">
                    Calificación no disponible
                  </Paragraph>
                )}
              </Col>
              <Col span={8}>
                {movie.poster_path ? (
                  <Image
                    width={200}
                    src={`${URL_IMG_TMDB}${movie.poster_path}`}
                  />
                ) : (
                  <Skeleton.Image style={{ height: "300px", width: "200px" }} />
                )}
              </Col>
              <Col span={16}>
                {movie.overview ? (
                  <Paragraph>{movie.overview}</Paragraph>
                ) : (
                  <Paragraph type="danger">Descripción no disponible</Paragraph>
                )}
                {movie.release_date ? (
                  <Title level={5}>
                    Fecha de estreno: {fecha(movie.release_date)}
                  </Title>
                ) : (
                  <Paragraph type="danger">Fecha no disponible</Paragraph>
                )}
              </Col>
            </Row>
          </Card>
          <Divider />
        </div>
      ))}
    </div>
  );
};

export default UseCard;
