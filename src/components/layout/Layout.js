import React from 'react';
 
import 'antd/dist/antd.css';
import {
    BrowserRouter,
    Routes,
    Route,
    Link
  } from "react-router-dom";

 

import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  SettingFilled,
  MessageOutlined
} from '@ant-design/icons';
 
import {Personal} from '../personal/Personal';
import { Avatar,Badge } from 'antd';
import {Videos} from '../videos/videos'
 
const { Header, Sider, Content } = Layout;

export class AppLayout extends React.Component {
  
  constructor(props)
  {
    super(props);
    // var localStorageObject =localStorage.getItem("AppLayout");
    // if(localStorageObject==null)
    // {
    //   var localStorageObject = {
    //     collapsed :false,
    //     logoImageURL : 'https://scontent.fsdv3-1.fna.fbcdn.net/v/t39.30808-6/241356868_4643833708962878_2012053507440258729_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=404gOkO2GYIAX-Ao1w5&_nc_ht=scontent.fsdv3-1.fna&oh=00_AT8cTDao6WJQJu-Nb7KK0n4PSFCwp8Lrd7OMwj8oRs_UiA&oe=61BC023A'
    //   }
    //   localStorage.setItem("AppLayout",JSON.stringify(localStorageObject));
    // }
    
    //  var refAppLayout = JSON.parse(localStorage.getItem("AppLayout"));
    this.state = {
      collapsed :false,
      logoImageURL : 'https://scontent.fsdv3-1.fna.fbcdn.net/v/t39.30808-6/241356868_4643833708962878_2012053507440258729_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=404gOkO2GYIAX-Ao1w5&_nc_ht=scontent.fsdv3-1.fna&oh=00_AT8cTDao6WJQJu-Nb7KK0n4PSFCwp8Lrd7OMwj8oRs_UiA&oe=61BC023A'
    };

  }

  
 
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
    // var refAppLayout = JSON.parse(localStorage.getItem("AppLayout"));
    // refAppLayout.collapsed = !this.state.collapsed;
    // localStorage.setItem("AppLayout",JSON.stringify(refAppLayout));
    // message.success('Collapsed state is '+!this.state.collapsed);
  };

  render() {
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
        <div style={{ display: 'inline-flex', justifyContent: 'center', alignItems: 'center' ,width: '100%',marginBottom:'15px',marginTop:'15px'}}>
        <Badge count={1} size='small'> 
        <Avatar size="large" icon={<UserOutlined />} src={this.state.logoImageURL} />
        </Badge>
        </div>
       
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<UserOutlined /> } >
              Personal
            </Menu.Item>
            <Menu.Item key="2"  icon={<VideoCameraOutlined />}>
              Videos
              
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              Files
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })}


        {React.createElement(MessageOutlined, {
                                className: 'trigger',
                                style:{float:'right',fontSize:'30px'},
                                onClick: this.toggle,
                              })}

          {React.createElement(SettingFilled, {
              className: 'trigger',
              style:{float:'right',fontSize:'30px'},
              width:100,
              onClick: this.toggle,
              
            })}
           
       
           
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
         <BrowserRouter>
            <Routes>
            <Route path="/" element={<Personal />} />
            <Route path="/videos" element={<Videos />} />
            </Routes>
        </BrowserRouter>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

 