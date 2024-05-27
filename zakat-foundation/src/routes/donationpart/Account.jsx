import React from 'react'
import { EditOutlined } from '@ant-design/icons';
import "./styles/login.css"
import BarChart from './Chart';
import { Link } from 'react-router-dom/dist';
import { useState } from 'react';
import { Modal } from 'antd';
// import React from 'react';
const { TextArea } = Input;
import { Button, Checkbox, Form, Input } from 'antd';
import Topheader from '../../components/Topheader';
// import React from 'react';
import { Carousel } from 'antd';
// import { Carousel } from 'antd';

const contentStyle = {
    height: '160px',
    color: 'black',
    textAlign: 'center',
    background: 'white',
};

export const Carosal = () => (
    <Carousel autoplay  dotPosition="" dotStyle={{ display: 'none' }} style={{ listStyle: 'none', overflow: 'hidden' }}>
        <div>
            <p style={contentStyle}>কে আছে, যে আল্লাহকে উত্তম ঋণ দেবে,ফলে তিনি তার জন্য বহুগুণে বাড়িয়ে দেবেন? সূরা আল বাকারাঃ ২৪৫ </p>
        </div>
        <div>
            <p style={contentStyle}>কে আছে, যে আল্লাহকে উত্তম ঋণ দেবে,ফলে তিনি তার জন্য বহুগুণে বাড়িয়ে দেবেন? সূরা আল বাকারাঃ ২৪৫ </p>
        </div>
    </Carousel>
);
const onFinish = (values) => {
    console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};
export const modal1 = () => (
    <Form
        name="basic"
        labelCol={{
            span: 8,
        }}
        wrapperCol={{
            span: 16,
        }}
        style={{
            maxWidth: 600,
        }}
        initialValues={{
            remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
    >
        <Form.Item
            label=" Name"
            name="Name"
            rules={[
                {
                    required: true,
                    message: 'Pleas Enter Name!',

                },
            ]}
        >
            <Input defaultValue="Md Suzaul Islam Sumon" />
        </Form.Item>

        <Form.Item
            label="Address"
            name="Address"
            rules={[
                {
                    required: true,
                    message: 'Please input your Address!',
                },
            ]}
        >
            <TextArea

                // onChange={(e) => setValue(e.target.value)}
                placeholder=""
                autoSize={{
                    minRows: 3,
                    maxRows: 5,
                }}
            />
        </Form.Item>



        <Form.Item
            wrapperCol={{
                offset: 8,
                span: 16,
            }}
        >
            <Button type="primary" htmlType="submit">
                Submit
            </Button>
        </Form.Item>
    </Form>
);

export const Cards = () => {
    let cards = [


        {
            image: "/images/card/three.png",
            title: "zakat fund",
            content:
                "Just as Zakat is one of the fundamental pillars of Islam, it is also a humanitarian act of worship. Zakat plays the most significant role in eliminating economic inequality.",
            btn: "Give Zakat"
        },

        {
            image: "/images/card/five.png",
            title: "Monthly donation fund",
            btn: "Monthly Donation",
            content:
                "The monthly donor member of the As-Sunnah Foundation is a permanent donor of the organization.  ",
        },
        {
            image: "/images/card/six.png",
            title: "orphan fund",
            btn: "Take care of Orphan",

            content:
                "Taking care of the orphans in the hope of Allah's pleasure and reward is an important act of worship to Allah and it is also one of the best sectors of charity.",
        },
        {
            image: "https://cdn.assunnahfoundation.org/donation/flood.jpg",
            title: "Flood Emergency",
            btn: "Donate",
            content:
                " the As-Sunnah Foundation carries out relief activities in the flood-hit districts of the country and takes the initiative to stand by the needy and helpless people.",
        },
    ];
    return (
        <section className="">


            <div className="mainCardSec1">
                {cards.map((e, index) => {
                    return (
                        <div key={index} className="cards1">
                            <img src={e.image} alt={e.title} />
                            <h3>{e.title}</h3>
                            <p className="">{e.content}</p>
                            <Link to={"/donation_cart"}><button>{e.btn}</button></Link>
                        </div>
                    );
                })}
            </div>


        </section>
    );
}


import { Slider, Switch } from 'antd';
export const Notification = () => {
    const [disabled, setDisabled] = useState(false);

    const handleSwitchChange = (checked) => {
        setDisabled(checked);
    };



    return (
        <>
            <Switch
                checked={disabled}
                onChange={handleSwitchChange}
                style={{ backgroundColor: disabled ? 'blue' : 'gray' }}
            />
        </>
    );
};


const Account = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalOpen2, setIsModalOpen2] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const showModal2 = () => {
        setIsModalOpen2(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const handleOk2 = () => {
        setIsModalOpen2(false);
    };
    const handleCancel2 = () => {
        setIsModalOpen2(false);
    };
    return (
        <>
            <Topheader />

        <div style={{ background: "rgb(245, 245, 245)" }}>
            <div className='proile_link'>
                <div className='pro'>
                <p>Profile</p>
                <p>Donation</p>
                <p>Donation Projects</p>
                </div>
            </div>
            <div className='parent_login_div'>
                <div className='child_content_container'>
                    <div className='profile_div'>
                        <div className='profile_div1'>
                            <div className='login_logo'>

                                <div><img src="https://cdn.assunnahfoundation.org/user/pattern.png" alt="" /></div>
                                <div className='icon_logo'><EditOutlined className='edit_icon' onClick={showModal}></EditOutlined></div>


                            </div>
                            <h2>Md Suzaul Islam Sumon
                            </h2>
                            <div className='donation_div_card'>
                                <div>
                                    <h4>
                                        Last Donation</h4>
                                    <p>
                                        ৳ 10
                                    </p>
                                </div>

                                <div>
                                    <h4>
                                        Total Donation Number
                                    </h4>
                                    <p>
                                        1
                                    </p>
                                </div>
                                <div>
                                    <h4>
                                        Minimum Donation
                                    </h4>
                                    <p>
                                        ৳ 10
                                    </p>
                                </div>
                                <div>
                                    <h4>
                                        Maximum Donation
                                    </h4>
                                    <p>
                                        ৳ 10
                                    </p>
                                </div>
                                <div>
                                    <h4>
                                        Total Donation
                                    </h4>
                                    <p>
                                        ৳ 10
                                    </p>
                                </div>

                            </div>



                        </div>
                        <div className='profile_div2'>
                            <BarChart />
                        </div>
                    </div>
                    <div className='card_details_div'>
                        <div className='details_card_dic'>
                            <p style={{ color: "white" }}>Your current donation</p>
                            <p style={{ color: "white" }}>৳ /প্রতি মাস
                            </p>
                            <div className='donedt'>
                                <Link to={"/donation"}> <div>Donate <span>&#8594;</span></div></Link>
                                <div onClick={showModal2}>Edit<EditOutlined className='edit_icon1' /></div>
                            </div>
                        </div>
                        <div className='details_card_dic2'>

                                <Carosal/>

                        </div>
                        <div className='details_card_dic3'>
                            <p>Your current donation</p>
                            <p>৳ /প্রতি মাস
                            </p>
                            <div className='donedt3'>
                                <Link to={"/donation"}> <div>Donate <span>&#8594;</span></div></Link>
                            </div>
                        </div>

                    </div>
                    <Modal title="Edit Profile" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                        <Form
                            name="basic"
                            labelCol={{
                                span: 8,
                            }}
                            wrapperCol={{
                                span: 16,
                            }}
                            style={{
                                maxWidth: 600,
                            }}
                            initialValues={{
                                remember: true,
                            }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete="off"
                        >
                            <Form.Item
                                label=" Name"
                                name="Name"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Pleas Enter Name!',

                                    },
                                ]}
                            >
                                <Input defaultValue="Md Suzaul Islam Sumon" />
                            </Form.Item>

                            <Form.Item
                                label="Address"
                                name="Address"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Address!',
                                    },
                                ]}
                            >
                                <TextArea
                                    // value={value}
                                    // onChange={(e) => setValue(e.target.value)}
                                    placeholder=""
                                    autoSize={{
                                        minRows: 3,
                                        maxRows: 5,
                                    }}
                                />
                            </Form.Item>



                            <Form.Item
                                wrapperCol={{
                                    offset: 8,
                                    span: 16,
                                }}
                            >
                                <Button type="primary" htmlType="submit">
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>
                        </Modal>
                        <Modal title="Edit Subscription" open={isModalOpen2} onOk={handleOk2} onCancel={handleCancel2}>
                            <Form
                                name="basic"
                                labelCol={{
                                    span: 8,
                                }}
                                wrapperCol={{
                                    span: 16,
                                }}
                                style={{
                                    maxWidth: 600,
                                }}
                                initialValues={{
                                    remember: true,
                                }}
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}
                                autoComplete="off"
                            >
                                <Form.Item
                                    label=" Amount"
                                    name="Amount"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Pleas Enter Amount!',

                                        },
                                    ]}
                                >
                                    <Input defaultValue="" />
                                </Form.Item>

                                <Form.Item
                                    label="Notification"
                                    name="Notification"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your Address!',
                                        },
                                    ]}
                                >

                                    <Notification/>
                                </Form.Item>



                                <Form.Item
                                    wrapperCol={{
                                        offset: 8,
                                        span: 16,
                                    }}
                                >
                                    <Button type="primary" htmlType="submit">
                                        Submit
                                    </Button>
                                </Form.Item>
                            </Form>
                        </Modal>
                    <div className='direction'>
                        <div>
                            <h2>Ongoing projects
                            </h2>
                            <p>Smiles on the faces of helpless people can be the source of your paradise</p>
                        </div>

                        <Link to={"/donation"}>    <p>View all Project <span>&#8594;</span></p> </Link>

                    </div>
                    <div className='card_details_div_2'>
                        <Cards />
                    </div>

                </div>
            </div>
            </div>
        </>
    )
}

export default Account
