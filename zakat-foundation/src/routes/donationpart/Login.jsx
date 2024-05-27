import React from 'react';
import "./styles/login.css";
import logo from "./styles/login.png"
import { Button, Input } from 'antd';
import { Link } from 'react-router-dom/dist';

const Login = () => {
    return (
        <div className='login_div'>
            <div className='login_form_div'>
                <div className='image_div'>
                    <img src={logo} alt="" />
                </div>
                <div className='input_div'>

                    <div className='input_field'>
                        <Input placeholder="Phone/Email" />;
                    </div>
                    <div className='btn_div' >

                        <Link to={"/account"}><Button type="primary" style={{ backgroundColor: '#008e48', borderColor: 'green' }}>Send OTP</Button>
                     </Link>
                        <Button type="primary" style={{ backgroundColor: 'rgb(245,34,45)', borderColor: 'rgb(245,34,45)' }}>
                            RESET
                        </Button>
                        <Link to={"/"}>     <Button type="primary" style={{ backgroundColor: '#008e48', borderColor: 'green' }}>
                            HOME
                        </Button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;
