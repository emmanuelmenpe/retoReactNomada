import React from "react";
import { Layout, Row, Col, Typography } from "antd";
import DragyDrop from "../components/DragyDrop";

const { Content } = Layout;
const { Title } = Typography;

const Index = () => {
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
          <DragyDrop />
        </Col>
      </Row>
    </Content>
  );
};

export default Index;
