import React, { useContext } from "react";
import appContext from "../context/app/appContext";
import { Row, Col, Button, Divider, Typography } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import Profile from "../components/Profile";
import Card from "../components/Card";
import Skeleton from "../components/Skeleton";

const ListMovies = () => {
  const history = useNavigate();
  const AppContext = useContext(appContext);
  const { dataActor, deleteInfoActor } = AppContext;

  const { Title } = Typography;

  const back = () => {
    history("/");
    deleteInfoActor();
  };

  const fecha = (date) => {
    let day, month, year;
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

  return (
    <Row>
      <Col span={24}>
        <Button
          type="primary"
          style={{ margin: "15px 0  0 15px" }}
          icon={<ArrowLeftOutlined />}
          onClick={() => back()}
        >
          Regresar
        </Button>
        <Divider />
      </Col>
      {dataActor.length > 0 ? (
        <>
          <Col span={24} style={{ marginLeft: "40%" }}></Col>
          <Col span={8} style={{ borderRight: "gray 1px solid" }}>
            <Profile data={dataActor[0]} />
          </Col>
          <Col span={16}>
            <Title style={{ paddingLeft: "10%" }}>Películas:</Title>
            {dataActor.map((info, index) => (
              <Card data={info} id={index} key={index} fecha={fecha} />
            ))}
          </Col>
        </>
      ) : (
        <Skeleton />
      )}
    </Row>
  );
};

export default ListMovies;
