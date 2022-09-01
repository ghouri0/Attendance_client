import { Space, Table, Button, Progress } from 'antd';
import React from 'react';
import 'antd/dist/antd.min.css'
import '../Profile/profile.css'
import { Link } from 'react-router-dom';

import { useState } from 'react';

const columns = [
    {
        title: 'Reg Number',
        dataIndex: 'key',
        key: 'key',
        //render: (text) => <a>{text}</a>,
    },
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        //render: (text) => <a>{text}</a>,
    },
    {
        title: 'Designation',
        dataIndex: 'Designation',
        key: 'Designation',
    },
    {
        title: 'Attendance',
        key: 'Attendance',
        dataIndex: 'Attendance',
        // render: (_, record) => (
        //     <Space size="middle">
        //         <Progress
        //             strokeColor={{
        //                 '0%': '#108ee9',
        //                 '100%': '#87d068',
        //             }}
        //             percent={66}
        //         />
        //     </Space>
    },
    {
        title: 'Details',
        key: 'details',
        render: (_, record) => (
            <Space size="middle">
                <Link to= '/viewAttend'>
                <Button type="primary" style={{ width: '100%', backgroundColor: '#244b82', border: 'none', borderRadius: '5px' }}>View Details</Button>
                </Link>
            </Space>
        ),
    },
];
const data = [
    {
        key: '1',
        name: 'John Brown',
        Designation: 'MERN',
        Attendance: <Progress
            strokeColor={{
                '0%': 'crimson',
                '75': '#87d068'
            }}
            percent={78}
        />,

    },
    {
        key: '2',
        name: 'Jim Green',
        Designation: 'Flutter',
        Attendance: <Progress
            strokeColor={{
                '0%': 'crimson',
                '75': '#87d068'
            }}
            percent={70}
        />,

    },
    {
        key: '3',
        name: 'Joe Black',
        Designation: 'React Native',
        Attendance: <Progress
            strokeColor={{
                '0%': 'crimson',
                '75': '#87d068'
            }}
            percent={81}
        />,
    },
    {
        key: '4',
        name: 'John',
        Designation: 'MERN',
        Attendance: <Progress
            strokeColor={{
                '0%': 'crimson',
                '75': '#87d068'
            }}
            percent={45}
        />,
    },
    {
        key: '5',
        name: 'Joe Black',
        Designation: 'MERN',
        Attendance: <Progress
            strokeColor={{
                '0%': 'crimson',
                '75': '#87d068'
            }}
            percent={90}
        />,
    },
];

export default function Employee( ) {
    // const head = {title: ''}
    // switch (type) {
    //     case 'employee':
    //         head.title = 'Employees Attendance'
    //         break;
    //     case 'internee':
    //         head.title = 'Internees Attendance'
    //         break;
    //     default:
    //         break;
    // }
    return (
        <div>
            <div className="profile" style={{ flexDirection: 'column', padding: '25px'}}>
                <div className="info">
                    <h3>
                        Attendance
                    </h3>
                </div>
                <div style={{backgroundColor: 'black'}}>
                    <Table pagination={false} columns={columns} dataSource={data}  />
                </div>
            </div>
        </div>
    )
}
