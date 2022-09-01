import "antd/dist/antd.min.css";

import { Row, Col, Card, Table, Progress, Avatar, Typography } from "antd";

import { Link } from "react-router-dom";
import "../App.css";

// Images
import pencil from "../assets/images/pencil.svg";

const { Title } = Typography;

// project table start
const project = [
  {
    title: "Project Name",
    dataIndex: "name",
    width: "32%",
    onCell: () => ({
      style: {
        backgroundColor: "#121212",
      },
    }),
  },
  {
    title: "STATUS",
    dataIndex: "address",
    onCell: () => ({
      style: {
        backgroundColor: "#121212",
      },
    }),
  },
  {
    title: "COMPLETION",
    dataIndex: "completion",
    onCell: () => ({
      style: {
        backgroundColor: "#121212",
      },
    }),
  },
];
const dataproject = [
  {
    key: "1",

    name: (
      <>
        <Avatar.Group>
          <div className="avatar-info">
            <Title style={{ color: "#177DDC" }} level={5}>
              Spotify Version
            </Title>
          </div>
        </Avatar.Group>
      </>
    ),
    address: (
      <>
        <div style={{ color: "#177DDC" }} className="text-sm">
          working
        </div>
      </>
    ),
    completion: (
      <>
        <div className="ant-progress-project">
          <Progress percent={30} size="small" />
          <span>
            <Link to="/projectDetails">
              <img src={pencil} alt="" />
            </Link>
          </span>
        </div>
      </>
    ),
  },

  {
    key: "2",
    name: (
      <>
        <Avatar.Group>
          <div className="avatar-info">
            <Title style={{ color: "#177DDC" }} level={5}>
              Progress Track
            </Title>
          </div>
        </Avatar.Group>
      </>
    ),
    address: (
      <>
        <div style={{ color: "#177DDC" }} className="text-sm">
          working
        </div>
      </>
    ),
    completion: (
      <>
        <div className="ant-progress-project">
          <Progress percent={10} size="small" />
          <span>
            <Link to="/projectDetails">
              <img src={pencil} alt="" />
            </Link>
          </span>
        </div>
      </>
    ),
  },

  {
    key: "3",
    name: (
      <>
        <Avatar.Group>
          <div className="avatar-info">
            <Title style={{ color: "#49AA19" }} level={5}>
              {" "}
              Jira Platform Errors
            </Title>
          </div>
        </Avatar.Group>
      </>
    ),
    address: (
      <>
        <div style={{ color: "#49AA19" }} className="text-sm">
          done
        </div>
      </>
    ),
    completion: (
      <>
        <div className="ant-progress-project">
          <Progress percent={100} size="small" format={() => "done"} />
          <span>
            <Link to="/projectDetails">
              <img src={pencil} alt="" />
            </Link>
          </span>
        </div>
      </>
    ),
  },

  {
    key: "4",
    name: (
      <>
        <Avatar.Group>
          <div className="avatar-info">
            <Title style={{ color: "#A61D24" }} level={5}>
              {" "}
              Launch new Mobile App
            </Title>
          </div>
        </Avatar.Group>
      </>
    ),
    address: (
      <>
        <div style={{ color: "#A61D24" }} className="text-sm">
          canceled
        </div>
      </>
    ),
    completion: (
      <>
        <div className="ant-progress-project">
          <Progress
            percent={50}
            size="small"
            status="exception"
            format={() => "50%"}
          />
          <span>
            <Link to="/projectDetails">
              <img src={pencil} alt="" />
            </Link>
          </span>
        </div>
      </>
    ),
  },

  {
    key: "5",
    name: (
      <>
        <Avatar.Group>
          <div className="avatar-info">
            <Title style={{ color: "#177DDC" }} level={5}>
              Web Dev
            </Title>
          </div>
        </Avatar.Group>
      </>
    ),
    address: (
      <>
        <div style={{ color: "#177DDC" }} className="text-sm">
          working
        </div>
      </>
    ),
    completion: (
      <>
        <div className="ant-progress-project">
          <Progress percent={80} size="small" />
          <span>
            <Link to="/projectDetails">
              <img src={pencil} alt="" />
            </Link>
          </span>
        </div>
      </>
    ),
  },

  {
    key: "6",
    name: (
      <>
        <Avatar.Group>
          <div className="avatar-info">
            <Title style={{ color: "#A61D24" }} level={5}>
              Redesign Online Store
            </Title>
          </div>
        </Avatar.Group>
      </>
    ),
    address: (
      <>
        <div style={{ color: "#A61D24" }} className="text-sm">
          canceled
        </div>
      </>
    ),
    completion: (
      <>
        <div className="ant-progress-project">
          <Progress percent={0} size="small" />
          <span>
            <Link to="/projectDetails">
              <img src={pencil} alt="" />
            </Link>
          </span>
        </div>
      </>
    ),
  },
];

function OngoingProjects() {
  return (
    <>
      <div>
        <Row>
          <Col span={24}>
            <Card
              bordered={false}
              className="criclebox"
              title="Projects List"
              style={{ backgroundColor: "#121212", color: "white" }}
            >
              <div className="table-responsive">
                <Table
                  columns={project}
                  dataSource={dataproject}
                  pagination={false}
                  className="ant-border-space"
                />
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default OngoingProjects;
