import React from "react";
import { Skeleton, Divider, Row, Col, Typography, Card } from "antd";

const { Title } = Typography;

const PrintCard = () => {
  return (
    <>
      <Card
        style={{
          width: "100%",
          height: "300px",
          margin: "auto",
        }}
      >
        <Row>
          <Col span={8}>
            <Skeleton.Image style={{ height: "250px", width: "190px" }} />
          </Col>
          <Col span={16}>
            <Skeleton active />
          </Col>
        </Row>
      </Card>
      <Divider />
    </>
  );
};

const UseSkeleton = () => {
  return (
    <>
      <Col
        span={8}
        style={{
          borderRight: "gray 1px solid",
          paddingLeft: "5%",
          paddingRight: "6%",
        }}
      >
        <Skeleton.Image style={{ height: "430px", width: "300px" }} />
        <Skeleton active style={{ backgroundColor: "white" }} />
      </Col>
      <Col span={16}>
        <Title style={{ paddingLeft: "10%" }}>Películas:</Title>
        <div
          style={{
            paddingLeft: "10%",
            paddingRight: "10%",
          }}
        >
          <PrintCard />
          <PrintCard />
          <PrintCard />
          <PrintCard />
        </div>
      </Col>
    </>
  );
};

export default UseSkeleton;
