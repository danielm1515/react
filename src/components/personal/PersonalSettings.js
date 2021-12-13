import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';
import { Form, Input, Button, Checkbox,DatePicker } from 'antd';
import { Divider } from 'antd';


const PersonalSettings = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  function onChange(date, dateString) {
    console.log(date, dateString);
  }

  return (
    <div style={{padding:'15px'}}>
      <Divider/>
    <Row>
   <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Firstname"
        name="firstname"
        rules={[
          {
            required: true,
            message: 'Please input your firstname!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Lastname"
        name="lastname"
        rules={[
          {
            required: true,
            message: 'Please input your lastname!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
         label="Birthday"
         name="birthday"
         rules={[
           {
             required: true,
             message: 'Please input your birthday!',
           }]}
      >
       <DatePicker onChange={onChange} />
      </Form.Item>


      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        {/* <Button type="primary" htmlType="submit">
          Submit
        </Button> */}
      </Form.Item>
    </Form>
  </Row>
  <Divider/>
  <Row>
  
  </Row>
  </div>
  );
};

 export default PersonalSettings;