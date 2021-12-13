
import React from 'react';
 
import 'antd/dist/antd.css';
import { Form, Input, Button, Checkbox } from 'antd';
import PersonalSettings from './PersonalSettings';
import { PageHeader } from 'antd';
export class Personal extends React.Component {

    constructor(props)
    {
        super(props)

        this.state = {
            'pageTitle':'Personal',
            'pageSubTitle':'Personal Information'
        }
    }


    handleUsernameChange = (event) =>{
        this.setState({
            username : event.target.value,
            displayUsername : event.target.value
        })
    }


render()
{
    return (
            <div>
            <PageHeader
            className="site-page-header"
            onBack={() => null}
            title={this.state.pageTitle}
            subTitle={this.state.pageSubTitle}
            />
         
               <PersonalSettings />
            </div>
    )
}

};