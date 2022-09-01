import React from "react";
import axios from 'axios'
import { useStepsForm } from "sunflower-antd";
import { UploadOutlined } from "@ant-design/icons";
import { Steps, Input, message, Button, Form, Result, Select, Upload } from "antd";
const { Option } = Select;

const { Step } = Steps;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const AddUser = (props) => {
  const { current, gotoStep, stepsProps, formProps, submit, formLoading } =
    useStepsForm({
      async submit(values) {
        const formData = new FormData();
        formData.append("file", values.image_url.file.originFileObj);
        formData.append("upload_preset", "texinity");
        const data = await axios.post("https://api.cloudinary.com/v1_1/hassam-murtaza/image/upload", formData)
        values.image_url = data.data.url
        props.submitUser(values)
        await new Promise((r) => setTimeout(r, 1000));
        return "ok";
      },
      total: 4,
    });

  const prop = {
    beforeUpload: (file) => {
      const isPNG = file.type === 'image/png';

      if (!isPNG) {
        message.error(`${file.name} is not a png file`);
      }

      return isPNG || Upload.LIST_IGNORE;
    },
    onChange: (info) => {
      console.log(info.fileList);
    },
  };

  const formList = [
    <>
      <Form.Item
        label="Name"
        name="name"
        rules={[
          {
            required: true,
            message: "Please input username",
          },
        ]}
      >
        <Input placeholder="Enter Full Name" />
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: "Please input email",
          },
        ]}
      >
        <Input placeholder="Enter Email" />
      </Form.Item>
      <Form.Item
        label="CNIC"
        name="cnic"
        rules={[
          {
            required: true,
            message: "Please input National ID",
          },
        ]}
      >
        <Input placeholder="Enter CNIC" />
      </Form.Item>
      <Form.Item
        label="Address"
        name="address"
        rules={[
          {
            required: true,
            message: "Please input address",
          },
        ]}
      >
        <Input placeholder="Enter Address" />
      </Form.Item>
      <Form.Item
        label="Phone Number"
        name="phone"
        rules={[
          {
            required: true,
            message: "Please input email",
          },
        ]}
      >
        <Input placeholder="Enter Phone Number" />
      </Form.Item>
      <Form.Item
        name="gender"
        label="Gender"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select
          placeholder="Select Gender"
          // onChange={onGenderChange}
          allowClear
        >
          <Option value="male">male</Option>
          <Option value="female">female</Option>
          <Option value="other">other</Option>
        </Select>
      </Form.Item>
      <Form.Item
        name="image_url"
        label="Picture"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Upload {...prop} maxCount={1} >
          <Button icon={<UploadOutlined />}>Click to Upload</Button>
        </Upload>

      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button onClick={() => gotoStep(current + 1)}>Next</Button>
      </Form.Item>
    </>,

    <>
      <Form.Item
        name="role"
        label="Role"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select
          placeholder="Select User's Role"
          // onChange={onGenderChange}
          allowClear
        >
          <Option value="Employee">Employee</Option>
          <Option value="Internee">Internee</Option>
        </Select>
      </Form.Item>
      <Form.Item
        name="domain"
        label="Domain"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select
          placeholder="Select Technology Domain"
          // onChange={onGenderChange}
          allowClear
        >
          <Option value="MERN">MERN-WEB</Option>
          <Option value="react">React-Native</Option>
          <Option value="flutter">Flutter-Mob</Option>
        </Select>
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button
          style={{ marginRight: 10 }}
          type="primary"
          loading={formLoading}
          onClick={() => {
            submit().then((result) => {
              if (result === "ok") {
                gotoStep(current + 1);
              }
            });
          }}
        >
          Submit
        </Button>
        <Button onClick={() => gotoStep(current - 1)}>Prev</Button>
      </Form.Item>
    </>,
  ];

  return (
    <div style={{ margin: "25px", padding: "10px" }}>
      <Steps {...stepsProps}>
        <Step title="Personal Information" />
        <Step title="Technology Domain" />
        <Step title="Completed" />
      </Steps>

      <div style={{ margin: "50px", padding: "15px" }}>
        <Form {...layout} {...formProps} style={{ maxWidth: 600 }}>
          {formList[current]}
        </Form>

        {current === 2 && (
          <Result
            status="success"
            title="Profile Successfully Uploaded!"
            extra={<></>}
          />
        )}
      </div>
    </div>
  );
};

export default AddUser;
