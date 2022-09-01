import { Space, Table, Button } from "antd";
import React, { useEffect, useState } from "react";
import useUser from "../customHooks/useUser";
const columns = [
  {
    title: "User Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Domain",
    dataIndex: "domain",
    key: "domain",
  },
  {
    title: "Phone Number",
    dataIndex: "phone",
    key: "phone",
  },
  {
    title: "Action",
    key: "action",
    render: () => (
      <Space size="middle">
        <Button
          type="primary"
          style={{
            width: "100%",
            backgroundColor: "#244b82",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Delete Profile
        </Button>
      </Space>
    ),
  },
];



export default function ViewUsers({ type }) {
  const {emp} = useUser()
  const [title, setTitle] = useState("");

  useEffect(() => {
    
    switch (type) {
      case "employee":
        setTitle("Employees");
        break;
      case "internee":
        setTitle("Internees");
        break;
      default:
        break;
    }
  }, []);

  return (
    <div
      className="profile"
      style={{ flexDirection: "column", padding: "25px" }}
    >
      <div className="info">
        <h3>{title}</h3>
      </div>
      <div style={{ backgroundColor: "black" }}>
        <Table pagination={false} columns={columns} dataSource={emp} />
      </div>
    </div>
  );
}
