import React, { useState, useEffect } from "react";
import { Input, Row, Col, Checkbox } from "antd";
import { Form, Button } from "antd";
import "antd/dist/antd.min.css";
import "./AddProject.css";
import { Link } from "react-router-dom";
import { Avatar, Divider, List, Skeleton } from "antd";
import InfiniteScroll from "react-infinite-scroll-component";

export default function ProjectDetails() {
  // Team Members
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const loadMoreData = () => {
    if (loading) {
      return;
    }
    setLoading(true);
    fetch(
      "https://randomuser.me/api/?results=10&inc=name,gender,email,nat,picture&noinfo"
    )
      .then((res) => res.json())
      .then((body) => {
        setData([...data, ...body.results]);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    loadMoreData();
  }, []);

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  // Modules
  const onChange = (e) => {
    console.log(e.target.value, e.target.checked);
  };

  const data1 = [
    {
      title: "Module 1",
    },
    {
      title: "Module 2",
    },
    {
      title: "Module 3",
    },
    {
      title: "Module 4",
    },
  ];

  return (
    <div style={{ backgroundColor: "#121212" }}>
      <Form
        style={{ marginTop: 25 }}
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 8,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Project Name"
          name="projectname"
          rules={[
            {
              required: true,
              message: "Please input your project name",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          className="item"
          label="Project Description"
          name="projectDes"
          rules={[
            {
              required: true,
              message: "Please input your Description",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Project Domain"
          name="domain"
          rules={[
            {
              required: true,
              message: "Please input project Domain",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item>
          <Row>
            <Col />
            <Col />
            <Col
              lg={{ span: 24, push: 24 }}
              md={{ span: 24, push: 24 }}
              sm={{ span: 24, push: 24 }}
            >
              <h2>All Modules</h2>
            </Col>
          </Row>
        </Form.Item>

        <Form.Item>
          <Row>
            <Col
              lg={{ span: 24, push: 24 }}
              md={{ span: 24, push: 24 }}
              sm={{ span: 24, push: 24 }}
              xs={{ span: 24 }}
            >
              <List
                itemLayout="horizontal"
                dataSource={data1}
                renderItem={(item) => (
                  <List.Item>
                    <List.Item.Meta
                      title={<a href="https://ant.design">{item.title}</a>}
                    />
                    <Checkbox value={item.title} onChange={onChange}></Checkbox>
                  </List.Item>
                )}
              />
            </Col>
          </Row>
        </Form.Item>

        <Form.Item>
          <Row>
            <Col />
            <Col />
            <Col
              lg={{ span: 24, push: 24 }}
              md={{ span: 24, push: 24 }}
              sm={{ span: 24, push: 24 }}
            >
              <h2>Team Members</h2>
            </Col>
          </Row>
        </Form.Item>

        <Form.Item>
          <Row>
            <Col
              lg={{ span: 24, push: 24 }}
              md={{ span: 24, push: 24 }}
              sm={{ span: 24, push: 24 }}
              xs={{ span: 24 }}
            >
              <div
                id="scrollableDiv"
                style={{
                  height: 400,
                  overflow: "auto",
                  padding: "0 16px",
                  border: "1px solid rgba(140, 140, 140, 0.35)",
                }}
              >
                <InfiniteScroll
                  dataLength={data.length}
                  next={loadMoreData}
                  hasMore={data.length < 50}
                  loader={
                    <Skeleton
                      avatar
                      paragraph={{
                        rows: 1,
                      }}
                      active
                    />
                  }
                  endMessage={
                    <Divider plain>It is all, nothing more 🤐</Divider>
                  }
                  scrollableTarget="scrollableDiv"
                >
                  <List
                    dataSource={data}
                    renderItem={(item) => (
                      <List.Item key={item.email}>
                        <List.Item.Meta
                          avatar={<Avatar src={item.picture.large} />}
                          title={
                            <a href="https://ant.design">{item.name.last}</a>
                          }
                          description={item.email}
                        />
                      </List.Item>
                    )}
                  />
                </InfiniteScroll>
              </div>
            </Col>
          </Row>
        </Form.Item>

        <Form.Item>
          <Row>
            <Col span={8} xs={{ span: 0 }} />
            <Col
              lg={{ span: 8, push: 20 }}
              md={{ span: 8, push: 18 }}
              sm={{ span: 8, push: 16 }}
              xs={{ span: 12 }}
            ></Col>

            <Col
              lg={{ span: 8, push: 24 }}
              md={{ span: 8, push: 22 }}
              sm={{ span: 8, push: 20 }}
              xs={{ span: 12, pull: 4 }}
            >
              <Link to="/editModule">
                <Button
                  style={{ marginTop: 50 }}
                  type="ghost"
                  htmlType="button"
                >
                  Edit Project
                </Button>
              </Link>
            </Col>
          </Row>
        </Form.Item>
      </Form>
    </div>
  );
}
