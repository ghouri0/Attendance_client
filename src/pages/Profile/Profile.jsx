import React from "react";
import "./profile.css";
import { Typography, Button, Row, Col } from "antd";
import { useState } from "react";
// import { height, width } from '@mui/system'

export default function Profile() {
  const [name, setName] = useState("Muhammad Ali");
  const [email, setEmail] = useState("alighouri@gmail.com");
  const [gender, setGender] = useState("Male");
  const [address, setAddress] = useState("Rawalpindi");
  const [phone, setPhone] = useState("+92-334-0058007");
  const [birth, setBirth] = useState("26 Nov,2000");
  const [pass, setPass] = useState("");
  const [old, setOld] = useState("");
  const [confirm, setConfirm] = useState("");

  return (
    <div style={{ bacgroundColor: "black" }}>
      {/* // header */}

      <div className="profile">
        <Row>
          <Col
            lg={{ span: 8 }}
            md={{ span: 8 }}
            sm={{ span: 8 }}
            xs={{ span: 24, push: 2 }}
          >
            <div className="image">
              <img
                src="https://images.unsplash.com/photo-1497316730643-415fac54a2af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
                className="avatar"
              />
            </div>
          </Col>
          <Col
            lg={{ span: 16, push: 8 }}
            md={{ span: 16, push: 8 }}
            sm={{ span: 16, push: 8 }}
            xs={{ span: 24, pull: 3 }}
          >
            <div className="name">
              <div className="info">
                <h3>Muhammad Ali</h3>
                <h5>Project Manager</h5>
              </div>
            </div>
          </Col>
        </Row>
      </div>

      {/* // profile information */}

      <div
        className="profile"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <div className="info">
          <h3>Profile Information</h3>
        </div>

        {/* first Row */}

        <div
          className="profile"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <div
            className="information"
            style={{
              display: "flex",
              gap: "25px",
            }}
          >
            <Row>
              <Col
                lg={{ span: 12 }}
                md={{ span: 12 }}
                sm={{ span: 12 }}
                xs={{ span: 24 }}
              >
                <div className="label">Name</div>
              </Col>
              <Col
                lg={{ span: 12 }}
                md={{ span: 12 }}
                sm={{ span: 12 }}
                xs={{ span: 24 }}
              >
                <Typography.Text
                  editable={{
                    onChange: setName,
                  }}
                  style={{
                    margin: "0",
                    border: "1px solid lightGrey",
                    outline: "none",
                    width: "100%",
                    height: "35px",
                    fontSize: "15px",
                    padding: "5px",
                    gap: "5px",
                  }}
                >
                  {name}
                </Typography.Text>
              </Col>
            </Row>
          </div>

          {/* 2nd Row */}

          <div
            className="information"
            style={{
              display: "flex",
              margin: "5px",
              gap: "25px",
              padding: "5px",
            }}
          >
            <div className="label">Email</div>
            <Typography.Text
              editable={{
                onChange: setEmail,
              }}
              style={{
                margin: "0",
                border: "1px solid lightGrey",
                outline: "none",
                width: "35%",
                height: "35px",
                fontSize: "15px",
                padding: "5px",
                gap: "5px",
              }}
            >
              {email}
            </Typography.Text>
          </div>

          {/* 3rd Row */}

          <div
            className="information"
            style={{
              display: "flex",
              margin: "5px",
              gap: "25px",
              padding: "5px",
            }}
          >
            <div className="label">Phone Number</div>
            <Typography.Text
              editable={{
                onChange: setPhone,
              }}
              style={{
                margin: "0",
                border: "1px solid lightGrey",
                outline: "none",
                width: "35%",
                height: "35px",
                fontSize: "15px",
                padding: "5px",
                gap: "5px",
              }}
            >
              {phone}
            </Typography.Text>
          </div>

          {/* 4th Row */}

          <div
            className="information"
            style={{
              display: "flex",
              margin: "5px",
              gap: "25px",
              padding: "5px",
            }}
          >
            <div className="label">Birth Date</div>
            <Typography.Text
              editable={{
                onChange: setBirth,
              }}
              style={{
                margin: "0",
                border: "1px solid lightGrey",
                outline: "none",
                width: "35%",
                height: "35px",
                fontSize: "15px",
                padding: "5px",
                gap: "5px",
              }}
            >
              {birth}
            </Typography.Text>
          </div>

          {/* 5th Row */}

          <div
            className="information"
            style={{
              display: "flex",
              margin: "5px",
              gap: "25px",
              padding: "5px",
            }}
          >
            <div className="label">Address</div>
            <Typography.Text
              editable={{
                onChange: setAddress,
              }}
              style={{
                margin: "0",
                border: "1px solid lightGrey",
                outline: "none",
                width: "35%",
                height: "35px",
                fontSize: "15px",
                padding: "5px",
                gap: "5px",
              }}
            >
              {address}
            </Typography.Text>
          </div>

          {/* 6th Row */}

          <div
            className="information"
            style={{
              display: "flex",
              margin: "5px",
              gap: "25px",
              padding: "5px",
            }}
          >
            <div className="label">Gender</div>
            <Typography.Text
              editable={{
                onChange: setGender,
              }}
              style={{
                margin: "0",
                border: "1px solid lightGrey",
                outline: "none",
                width: "35%",
                height: "35px",
                fontSize: "15px",
                padding: "5px",
                gap: "5px",
              }}
            >
              {gender}
            </Typography.Text>
          </div>
        </div>
      </div>

      {/* Reset Password */}

      <div
        className="profile"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <div className="info">
          <h3>Reset Password</h3>
        </div>
        <div className="profile" style={{ flexDirection: "column" }}>
          <div
            className="information"
            style={{
              display: "flex",
              margin: "5px",
              gap: "25px",
              padding: "5px",
            }}
          >
            <div className="label">Current Password</div>
            <Typography.Text
              editable={{
                onChange: setOld,
              }}
              style={{
                margin: "0",
                border: "1px solid lightGrey",
                outline: "none",
                width: "35%",
                height: "35px",
                fontSize: "15px",
                padding: "5px",
                gap: "5px",
              }}
            >
              {old}
            </Typography.Text>
          </div>
          <div
            className="information"
            style={{
              display: "flex",
              margin: "5px",
              gap: "25px",
              padding: "5px",
            }}
          >
            <div className="label">New Password</div>
            <Typography.Text
              editable={{
                onChange: setPass,
              }}
              style={{
                margin: "0",
                border: "1px solid lightGrey",
                outline: "none",
                width: "35%",
                height: "35px",
                fontSize: "15px",
                padding: "5px",
                gap: "5px",
              }}
            >
              {pass}
            </Typography.Text>
          </div>
          <div
            className="information"
            style={{
              display: "flex",
              margin: "5px",
              gap: "25px",
              padding: "5px",
            }}
          >
            <div className="label">Confirm New Password</div>
            <Typography.Text
              editable={{
                onChange: setConfirm,
              }}
              style={{
                margin: "0",
                border: "1px solid lightGrey",
                outline: "none",
                width: "35%",
                height: "35px",
                fontSize: "15px",
                padding: "5px",
                gap: "5px",
              }}
            >
              {confirm}
            </Typography.Text>
          </div>
          <Button
            type="primary"
            style={{
              width: "100px",
              backgroundColor: "#244b82",
              border: "none",
              borderRadius: "5px",
              height: "45px",
              margin: "10px",
            }}
          >
            Reset
          </Button>
        </div>
      </div>
    </div>
  );
}
