import { Layout } from "antd";
import React  from "react";
import "antd/dist/antd.min.css";
import "../index.css";
import { Link } from "react-router-dom";
import image from "../assets/Texinity.png";

import { Avatar, Image } from "antd";
import {
  DashboardOutlined,
  AlertOutlined,
  ProfileOutlined,
  SolutionOutlined,
  CalendarOutlined,
  ReadOutlined,
  SafetyCertificateOutlined,
} from "@ant-design/icons";

const { Sider } = Layout;

const SideNavBar = () => {
//   const [collapsed, setCollapsed] = useState(false);

  return (
    <Sider trigger={null} style={{ backgroundColor: "black" }} className = 'sidebar'>
      <div>
        <div style={{ margin: 20, marginLeft: 45 }}>
          <Image src={image} height={100} width={100}></Image>
        </div>

        <div
          style={{
            flexDirection: "row",
            justifyContent: "end",
            backgroundColor: "#000000",
            borderRadius: 0,
            marginTop: 20,
          }}
          className="dashboard-link"
        >
          <Avatar
            size={50}
            style={{ marginLeft: 10, marginBottom: 10 }}
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          >
            Avataer
          </Avatar>
          <Link
            to="/profile"
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: "#FFFFFF",
              marginLeft: 10,
            }}
          >
            Asaad Khan
          </Link>
        </div>

        <div
          style={{ flexDirection: "row", justifyContent: "end" }}
          className="dashboard-link"
        >
          <Link
            to="/"
            style={{ fontSize: 15, fontWeight: "bold" }}
            className="link-color"
          >
            <DashboardOutlined
              style={{
                fontSize: "20px",
                margin: 17,
                marginRight: 15,
                marginTop: 16,
              }}
              className="dashboard-link"
            />
            Dashboard
          </Link>
        </div>

        <div
          style={{ flexDirection: "row", justifyContent: "end" }}
          className="dashboard-link"
        >
          <Link
            to="/announcement"
            style={{ fontSize: 15, fontWeight: "bold" }}
            className="link-color"
          >
            <AlertOutlined
              style={{
                fontSize: "20px",
                margin: 17,
                marginRight: 15,
                marginTop: 15,
              }}
              twoToneColor="#FFFFFF"
              className="dashboard-link"
            />
            Announcements
          </Link>
        </div>

        <div
          style={{ flexDirection: "row", justifyContent: "end" }}
          className="dashboard-link"
        >
          <Link
            to="/attendance"
            style={{ fontSize: 15, fontWeight: "bold" }}
            className="link-color"
          >
            <CalendarOutlined
              style={{
                fontSize: "20px",
                margin: 17,
                marginRight: 15,
                marginTop: 15,
              }}
              className="attendance"
            />
            Attendance
          </Link>
        </div>

        <div
          style={{ flexDirection: "row", justifyContent: "end" }}
          className="dashboard-link"
        >
          <Link
            to="/profile"
            style={{ fontSize: 15, fontWeight: "bold" }}
            className="link-color"
          >
            <ProfileOutlined
              style={{
                fontSize: "20px",
                margin: 17,
                marginRight: 15,
                marginTop: 15,
              }}
              twoToneColor="#FFFFFF"
              className="dashboard-link"
            />
            Profile
          </Link>
        </div>

        <div
          style={{ flexDirection: "row", justifyContent: "end" }}
          className="dashboard-link"
        >
          <Link
            to="/about"
            style={{ fontSize: 15, fontWeight: "bold" }}
            className="link-color"
          >
            <SolutionOutlined
              style={{
                fontSize: "20px",
                margin: 17,
                marginRight: 15,
                marginTop: 15,
              }}
              twoToneColor="#FFFFFF"
              className="dashboard-link"
            />
            About
          </Link>
        </div>

        <div
          style={{ flexDirection: "row", justifyContent: "end" }}
          className="dashboard-link"
        >
          <Link
            to="/termsconditions"
            style={{ fontSize: 15, fontWeight: "bold" }}
            className="link-color"
          >
            <SafetyCertificateOutlined
              style={{
                fontSize: "20px",
                margin: 17,
                marginRight: 15,
                marginTop: 15,
              }}
              twoToneColor="#FFFFFF"
              className="dashboard-link"
            />
            Terms/Cond
          </Link>
        </div>

        <div
          style={{ flexDirection: "row", justifyContent: "end" }}
          className="dashboard-link"
        >
          <Link
            to="/policy"
            style={{ fontSize: 15, fontWeight: "bold" }}
            className="link-color"
          >
            <ReadOutlined
              style={{
                fontSize: "20px",
                margin: 17,
                marginRight: 15,
                marginTop: 15,
              }}
              twoToneColor="#FFFFFF"
              className="dashboard-link"
            />
            Policy
          </Link>
        </div>
      </div>
    </Sider>
  );
};

export default SideNavBar;
