import React,{useState} from "react";
import "./Header.css";
import logo from "../assets/image/Ltour.jpg";
import { UnorderedListOutlined } from "@ant-design/icons";
import {Modal,Form, Input, Button} from "antd";
import {useNavigate} from "react-router-dom";

const Header= () => {
  const[visible,setVisible]=useState(false)
  const [formItem,setFormItem] = useState('login');

  const onFinish=(values) => {
    console.log(values);
    localStorage.setItem("userlLogedIn",true);
    
      navigate("/dash/newtour")
  }
  const navigate = useNavigate();
  return (
    <>
    
    {formItem =='login'?( 
    <Modal visible={visible} width="30%" onOK={()=>setVisible(false)} onCancel={()=>setVisible(false)}>
    <h1>Signin form</h1>
    <Form onFinish={onFinish} >
      <Form.Item label="Email" name="email" rules={[{required:true, type:"email"}]}>
       <Input type="email"/>
      </Form.Item>
      <Form.Item label="Password" name="password" rules={[{required:true, type:"password"}]}>
       <Input type="password"/><br/>
       <Button type="submit" onClick={()=>{}}>Login</Button> 
      </Form.Item>
      <div className="button-container">
  <h1 onClick={() => setFormItem('login')} className={formItem == 'login'?"active":""}>Login</h1>
  <h1 onClick={() => setFormItem('signup')} className={formItem == 'signup'?"active":""}>Sign up</h1>
  </div>
     </Form>
  </Modal>):(
    <Modal visible={visible} width="30%" onOK={()=>setVisible(false)} onCancel={()=>setVisible(false)}>
    <h1>Signin form</h1>
    <Form onFinish={onFinish} >
      <Form.Item label="Email" name="email" rules={[{required:true, type:"email"}]}>
       <Input type="email"/>
      </Form.Item>
      <Form.Item label="Password" name="password" rules={[{required:true,}]}>
       <Input type="password"/><br/>
       <Button htmlType="submit" onClick={()=>{}}>Login</Button> 
      </Form.Item>
      <div className="button-container">
  <h1 onClick={() => setFormItem('login')} className={formItem == 'login'?"active":""}>Login</h1>
  <h1 onClick={() => setFormItem('signup')} className={formItem == 'signup'?"active":""}>Sign up</h1>
  </div>
     </Form>
   </Modal>
  )}
 
  
   
        <div className="header-container">
          <div class="homelogo">
            <img src={logo} width="150px" height="95px" />
          </div>

          <div class="navbar">
        
            <ul>
              <li>
                <a href="/">HOME</a>
              </li>
              <li>
                <a href="./About">ABOUT US</a>
              </li>
              <li>
                <a href="./tour">TOUR</a>
              </li>
              <li>
                <a href="./contact">CONTACT</a>
              </li>
              <li>
                <a href="#"onClick={() =>setVisible(true)}>ACCOUNT</a>
              </li>
            </ul>
            </div>
          </div>
          {/* <div className="humburger-menu">
       <UnorderedListOutlined style={{color:"white",fontsize:"80px",display:"flex"}} />
        
          {/* <div className="bar"></div> */}
          {/* </div>  */}
        
      
    
    
  </>
  );

};

export default Header;
