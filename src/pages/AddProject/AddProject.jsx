import { Input, Transfer, Select, Row, Col } from "antd";
import { Form, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import "antd/dist/antd.min.css";
import "./AddProject.css";
import { useEffect, useState } from "react";
import { MinusCircleOutlined } from "@ant-design/icons";

export default function AddProject() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const [mockData, setMockData] = useState([]);
  const [targetKeys, setTargetKeys] = useState([]);

  const getMock = () => {
    const tempTargetKeys = [];
    const tempMockData = [];
    const names = ["Asaad", "Ali", "Ehsan", "Hassam", "Javeria"];

    for (let i = 0; i < 5; i++) {
      const data = {
        key: names[i],
        title: names[i],
        description: `description of ${names[i]}`,
        chosen: names[Math.random() * 2 > 1],
      };

      if (data.chosen) {
        tempTargetKeys.push(data.key);
      }

      tempMockData.push(data);
    }

    setMockData(tempMockData);
    setTargetKeys(tempTargetKeys);
  };

  useEffect(() => {
    getMock();
  }, []);

  const filterOption = (inputValue, option) =>
    option.description.indexOf(inputValue) > -1;

  const handleChange = (newTargetKeys) => {
    setTargetKeys(newTargetKeys);
  };

  const handleSearch = (dir, value) => {
    console.log("search:", dir, value);
  };

  const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 8,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 24,
      },
    },
  };
  const formItemLayoutWithOutLabel = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 24,
        offset: 8,
      },
      md: {
        span: 24,
        offset: 8,
      },
      lg: {
        span: 24,
        offset: 8,
      },
    },
  };
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

        <Form.List
          name="Modules"
          rules={[
            {
              validator: async (_, names) => {
                if (!names || names.length < 2) {
                  return Promise.reject(new Error(""));
                }
              },
            },
          ]}
        >
          {(fields, { add, remove }, { errors }) => (
            <>
              {fields.map((field, index) => (
                <Form.Item
                  {...(index === 0
                    ? formItemLayout
                    : formItemLayoutWithOutLabel)}
                  label={index === 0 ? "Module" : ""}
                  required={false}
                  key={field.key}
                >
                  <Form.Item
                    {...field}
                    validateTrigger={["onChange", "onBlur"]}
                    rules={[
                      {
                        required: true,
                        whitespace: true,
                        message: "Please input Module's name or delete Module.",
                      },
                    ]}
                    noStyle
                  >
                    <Input
                      placeholder="Module"
                      style={{
                        width: "50%",
                        justifyContent: "center",
                      }}
                    />
                  </Form.Item>
                  {fields.length > 1 ? (
                    <MinusCircleOutlined
                      className="dynamic-delete-button"
                      onClick={() => remove(field.name)}
                    />
                  ) : null}
                </Form.Item>
              ))}
              <Form.Item>
                <Row>
                  <Col
                    lg={{ span: 24, push: 24 }}
                    md={{ span: 24, push: 24 }}
                    sm={{ span: 24, push: 24 }}
                    xs={{ span: 12, offset: 0 }}
                  >
                    <Button
                      type="dashed"
                      onClick={() => add()}
                      style={{
                        width: "60%",
                      }}
                      icon={<PlusOutlined />}
                    >
                      Add Module
                    </Button>
                  </Col>
                </Row>

                <Form.ErrorList errors={errors} />
              </Form.Item>
            </>
          )}
        </Form.List>

        <Form.Item name="teamMembers" label="Team Members">
          <Transfer
            dataSource={mockData}
            showSearch
            filterOption={filterOption}
            targetKeys={targetKeys}
            onChange={handleChange}
            onSearch={handleSearch}
            oneWay
            render={(item) => item.title}
          />
        </Form.Item>
        <Form.Item>
          <Row>
            <Col span={8} />
            <Col span={8} />
            <Col span={8}>
              <Button style={{ marginTop: 50 }} type="ghost" htmlType="submit">
                Submit
              </Button>
            </Col>
          </Row>
        </Form.Item>
      </Form>
    </div>
  );
}
