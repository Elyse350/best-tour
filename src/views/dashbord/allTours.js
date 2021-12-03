import React from "react"
import 'antd/dist/antd.css';
// import DashLayout from "../../components/dashboardlayout";
import { Table, Tag, Space } from 'antd';
import AllavailableTours from "../../assets/constants/tours.json";
import Alluserstour from "../../assets/constants/users.json"
import DashLayout from "../../components/dashboardlayout";
import {EditOutlined,DeleteOutlined,EyeOutlined} from '@ant-design/icons';

const { Column, ColumnGroup } = Table;

const column = [

  {
  title:"Title",
  dataIndex:"tittle",
  key:"tittle"
  },
  {
    title:"Datescheduled",
  dataIndex:"datescheduled",
  key:"datescheduled"
  },
  {
    title:"Duedate",
  dataIndex:"duedate",
  key:"duedate"
  },
  {
    title:"Seats",
    dataIndex:"seats",
    key:"seats"
  },
  {
    title:"price(rwf)",
    dataIndex:"price",
    key:"price"
  },
{
  title: 'Action',
  key: 'action',
  render: () => (
    <Space size="middle">
      <a><EyeOutlined /></a>
      <a><EditOutlined /></a>
      <a><DeleteOutlined /> </a>
      </Space>
  ),
}

];

const data = [

    {
    title:"Fname",
    dataIndex:"fname",
    key:"fname"
    },
    {
      title:"Lname",
    dataIndex:"lname",
    key:"lname"
    },
    {
      title:"Email",
    dataIndex:"email",
    key:"email"
    },
    {
      title:"Phone",
      dataIndex:"phone",
      key:"phone"
    },
    {
      title:"Address",
      dataIndex:"address",
      key:"address"
    },
  {
    title: 'Action',
    key: 'action',
    render: () => (
      <Space size="middle">
        
        <a style={{color:"green"}}>Accept</a>
        <a style={{color:"red"}}>Decline </a>
        </Space>
    ),
  }
  
  ];
  
const AllTours =()=>{

    return(
        <>
        <h1 style={{textAlign:"center",fontSize:"large",color:"blue"}}>ALL AVAILABLE TOURS</h1>
       <Table columns={column} dataSource={AllavailableTours}/>
       <h1 style={{textAlign:"center",fontSize:"large",color:"blue"}}>ALL USERS THAT LONGED IN </h1>
       <Table columns={data} dataSource={Alluserstour}/>
       </>
    );
}
export default AllTours;