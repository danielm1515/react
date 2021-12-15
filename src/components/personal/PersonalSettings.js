import React, { useEffect,useState } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';
import { Form, Input, Button, Checkbox,DatePicker } from 'antd';
import { Typography,Divider } from 'antd';
import './PersonalSettings.css';
import moment from 'moment';
import { Avatar, Tooltip } from 'antd';
import { UserOutlined, AntDesignOutlined } from '@ant-design/icons';

const { Title, Paragraph, Text, Link } = Typography;
const PersonalSettings = () => {


  const [personal,setPersonal] = useState({firstname:'daniel',lastname:'mamre',email:'danielmamre@gmail.com',birthday:'1992-09-03'});
  const firstname = personal.firstname;
  const lastname = personal.lastname;
  const email = personal.email;
  const birthday = personal.birthday;

  useEffect (() => 
  {
     console.log(personal);
  },[personal])

  function updateFirstname (event)
  {
    setPersonal(prevPersonal=>{
      return {...prevPersonal , firstname : event.target.value }
    })
  }
  

  function updateLastname ()
  {
    
  }

  function updateBirthday (date, dateString)
  {
    setPersonal(prevPersonal=>{
      return {...prevPersonal , birthday : date }
    })
  }

  return (
    <div style={{padding:'15px'}}>
      <Divider>Local</Divider>
    <Row>
    <Col span={6} className='col'> <Input value={firstname} addonBefore="Firstname"/></Col>
      <Col span={6} className='col'> <Input value={lastname} addonBefore="Lastname"/></Col>
      <Col span={6} className='col'> <Input value={email} addonBefore="Email "/></Col>
      <Col span={6} className='col'> <DatePicker onChange={updateBirthday}  defaultValue={moment(birthday, 'YYYY-MM-DD')}addonBefore="Birthday"/></Col>
   
  </Row>
  <Divider>About me</Divider>
    
  <Row>
  <Typography>
    <Title>Introduction</Title>
    <Paragraph>
     I'm an experienced software engineer who constantly seeks out innovative solutions to everyday problems.
      In my five years in this industry, I've honed my analytical thinking and collaboration skills, and I love working with a team. I've also had the opportunity to serve as the software engineer lead for three projects with First Technology.
    </Paragraph>
    <Title level={2}>Skills</Title>
    <Paragraph>
      <ul>
        <li>
          <Link>C# Asp.core</Link>
        </li>
        <li>
          <Link>Angular</Link>
        </li>
        <li>
          <Link >Javascript</Link>
        </li>
        <li>
          <Link >Node.js</Link>
        </li>
        <li>
          <Link >Networking protocols (UDP,TCP,MODBUS,SNMP,FTP,OPC,HTTP,etc)</Link>
        </li>
        <li>
          <Link >Linux , Windows, GCP</Link>
        </li>
      </ul>
    </Paragraph>
    <Title level={3}>My Squad</Title>
    <Paragraph></Paragraph>
    <Avatar.Group
      maxCount={2}
      size="large"
      maxStyle={{
        color: '#f56a00',
        backgroundColor: '#fde3cf',
      }}
    >
      <Avatar src="https://scontent.fsdv3-1.fna.fbcdn.net/v/t39.30808-6/241356868_4643833708962878_2012053507440258729_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=404gOkO2GYIAX-Ao1w5&_nc_ht=scontent.fsdv3-1.fna&oh=00_AT8cTDao6WJQJu-Nb7KK0n4PSFCwp8Lrd7OMwj8oRs_UiA&oe=61BC023A" />
      <Avatar
        style={{
          backgroundColor: '#f56a00',
        }}
      >
        GH
      </Avatar>
      <Avatar
        style={{
          backgroundColor: '#1890ff',
        }}
      >
        RM
      </Avatar>
      <Avatar
        style={{
          backgroundColor: '#00abf5',
        }}
      >
        SP
      </Avatar>
      <Avatar
        style={{
          backgroundColor: '#87d068',
        }}
      >
        MB
      </Avatar>
      <Avatar
        style={{
          backgroundColor: '#e100f4',
        }}
      >
        RT
      </Avatar>
    
     
    </Avatar.Group>
    </Typography>
  </Row>
  </div>
  );
};

 export default PersonalSettings;