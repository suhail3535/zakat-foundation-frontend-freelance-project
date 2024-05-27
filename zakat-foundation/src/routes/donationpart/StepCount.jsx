import React, { useState } from 'react';
import { Button, Steps, theme } from 'antd';
import { Stepper1, Stepper2 } from './Stepper';
// import './styles/donation.css'; // Import the CSS file

const steps = [
    {
        title: '',
        content: <Stepper1 />,
    },
    {
        title: '',
        content: <Stepper2 style={{ border: "1px solid green" }} />,
    },
];

const StepCount = ({ onStepChange }) => {
    const { token } = theme.useToken();
    const [current, setCurrent] = useState(0);

    const next = () => {
        setCurrent(current + 1);
        onStepChange(current + 1); // Pass the updated step index to the parent component
    };

    const handleTabClick = (index) => {
        setCurrent(index);
        onStepChange(index); // Pass the updated step index to the parent component
    };

    const handleDivClick = (index) => {
        setCurrent(index);
        onStepChange(index); // Pass the updated step index to the parent component
    };

    return (
        <>
            <div className='prev_next'>
                <div onClick={() => handleDivClick(0)}>1</div>
                <div onClick={() => handleDivClick(1)}>2</div>
            </div>
            <Steps current={current} ant-steps-horizontal items={steps} id="step_counter" onChange={handleTabClick} />
            <div className="content_container" style={{ color: token.colorTextTertiary, backgroundColor: "white", borderRadius: token.borderRadiusLG, border: `1px dashed ${token.colorBorder}` }}>
                {steps[current].content}
            </div>
            <div className="button-container">
                {current < steps.length - 1 && (
                    <Button type='primary' style={{ backgroundColor: "#008e48",marginTop:"30px" }} onClick={next}>
                        Go to Next Step
                    </Button>
                )}
            </div>
        </>
    );
};

export default StepCount;
