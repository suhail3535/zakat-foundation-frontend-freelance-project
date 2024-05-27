import React from 'react';
import { SlCalender } from "react-icons/sl";
import { Button, Form, Input, Space } from 'antd';
import { zakatLabel, zakatcal2 } from "./data";
// import "./styles/donation.css"
const SubmitButton = ({ form, children }) => {
    const [submittable, setSubmittable] = React.useState(false);


    const values = Form.useWatch([], form);
    React.useEffect(() => {
        form
            .validateFields({
                validateOnly: true,
            })
            .then(() => setSubmittable(true))
            .catch(() => setSubmittable(false));
    }, [form, values]);
    return (
        <Button type="primary" htmlType="submit" disabled={!submittable}>
            {children}
        </Button>
    );
};
export const Stepper1 = () => {
    const [form] = Form.useForm();
    return (
        <div className='steppe_div_1'>

            <div id="top_head_as">
                <h5>Zakatable Assets (A)</h5>

                <p>[Value of assets to be added as Zakat]</p>

            </div>

            <Form form={form} name="validateOnly" layout="vertical" autoComplete="off">

                <Form.Item
                    name="Zakat"
                    label="Zakat Year (Date on which you calculate Zakat every year):"
                    rules={[
                        {
                            required: true,

                        },
                    ]}
                >
                    <Space.Compact style={{ width: "100%" }}>
                        <Input
                            className='input_1'

                            suffix={<SlCalender className="calendar-icon" style={{ color: "gray", marginRight: "30px", fontSize: "20px" }} />}

                            required
                        />
                        <Input
                            // style={{
                            //     width: '90%',
                            // }}
                            className='input_2'

                            defaultValue="14 Ramadan 1445"
                            required

                        />
                    </Space.Compact>
                </Form.Item>
                <Form.Item label="1. Current selling price of total gold you own:" tooltip="
We can calculate the estimated value by taking 80% of the market value. You can visit the Bajus website to know the current market price of gold and silver in Bangladesh.">
                    <Space.Compact style={{ width: "100%" }}>
                        <Input

                            className='input_1'

                            defaultValue="(Taka) ৳"
                            required

                        />
                        <Input

                            className='input_2'

                            required
                            type="number"

                        />
                    </Space.Compact>
                </Form.Item>
                <Form.Item label="2. Current selling price of total silver you own:" tooltip="
We can calculate the estimated value by taking 80% of the market value. You can visit the Bajus website to know the current market price of gold and silver in Bangladesh.">
                    <Space.Compact style={{ width: "100%" }}>
                        <Input

                            defaultValue="(Taka) ৳"
                            required
                            className='input_1'


                        />
                        <Input
                            className='input_2'


                            required
                            type="number"
                        />
                    </Space.Compact>
                </Form.Item>

                {zakatLabel.map((ele) => {
                    return <Form.Item label={`${ele.id} ${ele.label}`} >
                        <Space.Compact style={{ width: "100%" }}>
                            <Input
                                className='input_1'
                                defaultValue="(Taka) ৳"
                                required

                            />
                            <Input
                                className='input_2'


                                required
                                type="number"
                            />
                        </Space.Compact>
                    </Form.Item>
                })}
            </Form>
        </div>
    );
};
export const Stepper2 = () => {
    const [form] = Form.useForm();
    return (
        <>
            <div className='steppe_div_2'>
                <div id="top_head_as">
                    <h5>Assets Deductible from Zakat (B)

                    </h5>

                    <p>[Value of wealth to be deducted as Zakat]</p>

                </div>

                <Form form={form} name="validateOnly" layout="vertical" autoComplete="off" >



                    {zakatcal2.map((ele) => {
                        return <Form.Item label={`${ele.id} ${ele.label}`} >
                            <Space.Compact style={{ width: "100%" }}>
                                <Input
                                    className='input_1'
                                    defaultValue="(Taka) ৳"
                                    required

                                />
                                <Input
                                    className='input_2'


                                    required
                                    type="number"
                                />
                            </Space.Compact>
                        </Form.Item>
                    })}
                </Form>


            </div >

        </>
    );
};

