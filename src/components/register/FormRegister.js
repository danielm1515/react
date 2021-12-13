
import React from 'react';
 
import 'antd/dist/antd.css';
 
 

export class FormRegister extends React.Component {

    constructor(props)
    {
        super(props)

        this.state = {
            'username':'',
            'displayUsername':''
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
        <form>
            <div>
             <input 
             type="text"
             value={this.state.username} 
             onChange={this.handleUsernameChange} 
             
             />
             <button >Send</button>
             <h5>{this.state.displayUsername}</h5>
            </div>
        </form>
    )
}

};