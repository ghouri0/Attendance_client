import { Space, Table, Button } from 'antd';
import React from 'react';
const columns = [
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Attendance',
    dataIndex: 'attendance',
    key: 'attendance',
  },
  {
    title: 'Action',
    key: 'action',
    render: () => (
      <Space size="middle">
        <Button type="primary" style={{ width: '100%', backgroundColor: '#244b82', border: 'none', borderRadius: '5px' }}>Mark Leave</Button>
      </Space>
    ),
  },
];
const data = [
  {
    key: '1',
    date: '27 May 2001',
    attendance: 'Present'

  },
  {
    key: '2',
    date: '10 March 2000',
    attendance: 'Absent'


  },
  {
    key: '3',
    date: '17 August 2001',
    attendance: 'Present'


  },
];

const App = () =>
  <div className="profile" style={{ flexDirection: 'column', padding: '25px' }}>
    <div className="info">
      <h3>
        Attendance
      </h3>
    </div>
    <div style={{ backgroundColor: 'black' }}>
      <Table pagination={false} columns={columns} dataSource={data} />
    </div>
  </div>

export default App;