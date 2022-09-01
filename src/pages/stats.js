import { Col, Row, Statistic } from "antd";
import React, { useEffect, useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import useDashboard from "../customHooks/useDashboard";

const Stats = () => {

  const {emp, intern, preEmp, preInt} = useDashboard();

  return (
    <Row className="statsRow">
      <Col xs={24} sm={24} md={12} lg={6} xl={6} className="statsCol">
        <Link to="/viewUsers/employees">
          <Statistic title="Total Employees" value={emp} />
        </Link>
      </Col>
      <Col xs={24} sm={24} md={12} lg={6} xl={6} className="statsCol">
        <Link to="/viewUsers/internees">
          <Statistic title="Total Internees" value={intern} />
        </Link>
      </Col>
      <Col xs={24} sm={24} md={12} lg={6} xl={6} className="statsCol">
        <Statistic title="Interns Present" value={preInt} />
      </Col>
      <Col xs={24} sm={24} md={12} lg={6} xl={6} className="statsCol">
        <Statistic title="Employees Present" value={preEmp} />
      </Col>
    </Row>
  );
};
export default Stats;
