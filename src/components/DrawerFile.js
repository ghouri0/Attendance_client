import React, { useState } from "react";
import { Button, Drawer } from "antd";
import "antd/dist/antd.min.css";
import "../index.css";
import { Link } from "react-router-dom";
import { Avatar, Image } from "antd";
import {
  CloseCircleTwoTone,
  ProjectTwoTone,
  CarryOutTwoTone,
  ProfileTwoTone,
  ContactsTwoTone,
  ContainerTwoTone,
  SoundTwoTone,
  SafetyCertificateTwoTone,
  PoweroffOutlined,
} from "@ant-design/icons";

import image2 from "../assets/hamburger.png";

function DrawerFile() {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div style={{ backgroundColor: "black" }}>
      <Button
        className="Ham-Button"
        onClick={showDrawer}
        style={{ border: "none", margin: 8 }}
      >
        <Image preview={false} src={image2} width={30} height={30}></Image>
      </Button>

      <Drawer
        title="Close"
        placement="left"
        onClose={onClose}
        visible={visible}
      >
        <div>
          <div
            style={{
              flexDirection: "row",
              justifyContent: "end",
              backgroundColor: "#362d26",
              borderRadius: 0,
              marginTop: 20,
            }}
            className="dashboard-link"
          >
            <Avatar
              size={50}
              style={{ marginLeft: 10, marginBottom: 10 }}
              src="https://joeschmoe.io/api/v1/random"
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
            {/* <ProjectTwoTone style={{ fontSize : '20px', margin : 17, marginRight : 15 , marginTop : 16}} twoToneColor= "#CC00FF" className='dashboard-link' /> */}
            <Link
              to="/dashboard"
              style={{ fontSize: 15, fontWeight: "bold" }}
              className="link-color"
            >
              <ProjectTwoTone
                style={{
                  fontSize: "20px",
                  margin: 17,
                  marginRight: 15,
                  marginTop: 16,
                }}
                twoToneColor="#CC00FF"
                className="dashboard-link"
              />
              Dashboard
            </Link>
          </div>

          <div
            style={{ flexDirection: "row", justifyContent: "end" }}
            className="dashboard-link"
          >
            <SoundTwoTone
              style={{
                fontSize: "20px",
                margin: 17,
                marginRight: 15,
                marginTop: 15,
              }}
              twoToneColor="#33FFFF"
              className="dashboard-link"
            />
            <Link
              to="/announcement"
              style={{ fontSize: 15, fontWeight: "bold" }}
              className="link-color"
            >
              Announcements
            </Link>
          </div>

          <div
            style={{ flexDirection: "row", justifyContent: "end" }}
            className="dashboard-link"
          >
            <CarryOutTwoTone
              style={{
                fontSize: "20px",
                margin: 17,
                marginRight: 15,
                marginTop: 15,
              }}
              twoToneColor="	#009933"
              className="attendance"
            />
            <Link
              to="/attendance"
              style={{ fontSize: 15, fontWeight: "bold" }}
              className="link-color"
            >
              Attendance
            </Link>
          </div>

          <div
            style={{ flexDirection: "row", justifyContent: "end" }}
            className="dashboard-link"
          >
            <ProfileTwoTone
              style={{
                fontSize: "20px",
                margin: 17,
                marginRight: 15,
                marginTop: 15,
              }}
              twoToneColor="#FFCC99"
              className="dashboard-link"
            />
            <Link
              to="/profile"
              style={{ fontSize: 15, fontWeight: "bold" }}
              className="link-color"
            >
              Profile
            </Link>
          </div>

          <div
            style={{ flexDirection: "row", justifyContent: "end" }}
            className="dashboard-link"
          >
            <ContactsTwoTone
              style={{
                fontSize: "20px",
                margin: 17,
                marginRight: 15,
                marginTop: 15,
              }}
              twoToneColor="#FFFF00"
              className="dashboard-link"
            />
            <Link
              to="/about"
              style={{ fontSize: 15, fontWeight: "bold" }}
              className="link-color"
            >
              About
            </Link>
          </div>

          <div
            style={{ flexDirection: "row", justifyContent: "end" }}
            className="dashboard-link"
          >
            <ContainerTwoTone
              style={{
                fontSize: "20px",
                margin: 17,
                marginRight: 15,
                marginTop: 15,
              }}
              twoToneColor="	#FF6699"
              className="dashboard-link"
            />
            <Link
              to="/termsconditions"
              style={{ fontSize: 15, fontWeight: "bold" }}
              className="link-color"
            >
              Terms/Cond
            </Link>
          </div>

          <div
            style={{ flexDirection: "row", justifyContent: "end" }}
            className="dashboard-link"
          >
            <SafetyCertificateTwoTone
              style={{
                fontSize: "20px",
                margin: 17,
                marginRight: 15,
                marginTop: 15,
              }}
              twoToneColor="#6633FF"
              className="dashboard-link"
            />
            <Link
              to="/policy"
              style={{ fontSize: 15, fontWeight: "bold" }}
              className="link-color"
            >
              Policy
            </Link>
          </div>

          <div
            style={{ flexDirection: "row", justifyContent: "end" }}
            className="dashboard-link"
          >
            <PoweroffOutlined
              style={{
                fontSize: "20px",
                margin: 17,
                marginRight: 15,
                marginTop: 15,
              }}
              twoToneColor="red"
              className="dashboard-link"
            />
            <Link
              to="/policy"
              style={{ fontSize: 15, fontWeight: "bold" }}
              className="link-color"
            >
              Logout
            </Link>
          </div>
        </div>
      </Drawer>
    </div>
  );
}

export default DrawerFile;
