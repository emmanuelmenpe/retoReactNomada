import React, { useContext } from "react";
import appContext from "../context/app/appContext";
import { Row, Col, Button, Divider, Typography } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import Profile from "../components/Profile";
import Card from "../components/Card";

const ListMovies = () => {
  const history = useNavigate();
  const AppContext = useContext(appContext);
  const { dataActor, deleteInfoActor } = AppContext;

  const { Title } = Typography;

  const back = () => {
    history("/");
    deleteInfoActor();
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
              <Card data={info} id={index} key={index} />
            ))}
          </Col>
        </>
      ) : (
        <Col span={24}>
          <h1 style={{ margin: "auto" }}>
            No se encontró datos del actor, intente con otra fotografía
          </h1>
        </Col>
      )}
    </Row>
  );
};

export default ListMovies;
