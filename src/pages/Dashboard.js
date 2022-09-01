import { Col, Row } from "antd";
import OngoingProjects from "./OngoingProjects";
import Stats from "./stats";
import "../App.css";

const Dashboard = () => {
  return (
    <>
      <Row style={{ marginTop: 15 }} justify="space-around">
        <Col span={22}>
          <Stats />
        </Col>
      </Row>
      <Row style={{ marginTop: 15 }} justify="space-around">
        <Col span={22}>
          <OngoingProjects />
        </Col>
      </Row>
    </>
  );
};

export default Dashboard;
