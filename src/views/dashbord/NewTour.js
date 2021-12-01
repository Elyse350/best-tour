import React from "react";
import DashLayout from "../../components/dashboardlayout";
import { Form, Input,Space,DatePicker,InputNumber,Button,Select } from "antd";
import { SettingOutlined } from '@ant-design/icons';

const { Option } = Select;
const selectafter = (
    <Select defaultValue="USD" style={{ width: 60 }}>
      <Option value="USD">$</Option>
      <Option value="EUR">€</Option>
      <Option value="GBP">£</Option>
      <Option value="CNY">¥</Option>
    </Select>
  );
const Newtourview = () => {
    const onFinish=(values)=>{
        console.log(values);

    }
  return (
<>
      <Form onFinish={onFinish}>
        <Form.Item name="tittle"label="Tittle"rules={[{ required:true}]}>
            <Input/>
        </Form.Item>
        <Form.Item name="description"label="The trip"rules={[{ required:false}]}>
            <Input.TextArea/>
        </Form.Item>
        <Space>
        <Form.Item name="seats"label="Planed seats"rules={[{ required:false}]}>
            <InputNumber/>
        </Form.Item>
        <Form.Item name="available"label="Available seats Now"rules={[{ required:true}]}>
            <InputNumber/>
        </Form.Item>
        </Space>
        <br/>
        <Space>
        <Form.Item name="duedate"label="DueDate"rules={[{ required:true}]}>
            <DatePicker/>
          </Form.Item>
        <Form.Item name="datescheduled"label="ReturnDate"rules={[{ required:true}]}>
            <DatePicker/>
        </Form.Item>
        </Space>
        <br/>
        
        <Form.Item name="price"label="price"rules={[{ required:true}]}>
            
            <Select defaultValue="USD" style={{ width: 60 }}>
      <Option value="USD">$</Option>
      <Option value="EUR">€</Option>
      <Option value="GBP">£</Option>
      <Option value="CNY">¥</Option>
    </Select> 
        </Form.Item>
        <Form.Item name="sprice"label="Couple Price"rules={[{ required:false}]}>
            <InputNumber/>
        </Form.Item>
    
        <Form.Item name="tripDescription"label="About trip"rules={[{ required:true}]}>
            <Input.TextArea/>
        </Form.Item>

<Button html type="submit" type="primary" style={{width:"20%"}}>Register Tour</Button>



      </Form>
    </>
  );
};
export default Newtourview;
