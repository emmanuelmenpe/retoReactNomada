import React, { useContext } from "react";
import appContext from "../context/app/appContext";
import { Layout, Row, Col, Typography, message } from "antd";
import DragyDrop from "../components/DragyDrop";
import { KEY_NOMADA, API_KEY_TMDB } from "../variables";
import { useNavigate } from "react-router-dom";

const { Content } = Layout;
const { Title } = Typography;
var nameActor = "";

const Index = () => {
  const history = useNavigate();
  const AppContext = useContext(appContext);
  const { infoActor } = AppContext;

  const props = {
    name: "file",
    accept: ".png,.jpg",
    action: "https://whois.nomada.cloud/upload",
    listType: "picture",
    headers: { Nomada: KEY_NOMADA },
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        if (info.file.response.actorName) {
          history("/lista-peilculas");
          nameActor = info.file.response.actorName;
          callTheMovieDatabase(nameActor);
        } else {
          message.error(
            `${info.file.name} No se ha encontrado información con esta fotografia.`
          );
        }
      }
      if (status === "error") {
        message.error(`${info.file.name} error al cargar el archivo.`);
      }
    },
  };

  const callTheMovieDatabase = async (actor) => {
    fetch(
      `https://api.themoviedb.org/3/search/person?api_key=${API_KEY_TMDB}&language=es-mx&query=${actor}&page=1&include_adult=false`
    )
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        return infoActor(response.results);
      });
  };

  return (
    <Content style={{ margin: "15% 15% 0 15%", height: "100vh" }}>
      <Row
        justify="space-around"
        align="middle"
        style={{
          display: "flex",
          position: "absolute",
          justifyContent: "center",
        }}
      >
        <Col span={24} style={{ textAlign: "center" }}>
          <Title>¿Quién es este actor?</Title>
        </Col>
        <Col span={24}>
          <DragyDrop props={props} />
        </Col>
      </Row>
    </Content>
  );
};

export default Index;
