import React, { useState } from 'react';
import Topheader from '../../components/Topheader';
// import "../donationpart/styles/donation.css";
import StepCount from './StepCount';
import { Stepper1, Stepper2 } from './Stepper';
import { Link } from 'react-router-dom/dist';

const ZakatCal = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleStepChange = (current) => {
    setCurrentStep(current);
  };

  return (
    <div>
      <Topheader />
      <div className='heading'>
        <h4>Zakat Calculator</h4>
      </div>

      <div className='top_section_div'>
        <div style={{ backgroundColor: "white", paddingTop: "10px" }}>
          <h4>Calculate your Zakat easily</h4>
          <p>To calculate your Zakat, please fill in the relevant boxes carefully and consistently; only fill in with understanding something. It will not be possible to calculate the actual Zakat. You can contact our helpline if you need help understanding something.</p>
          <p className='resource'>Resources you do not have any questions that do not apply to you do not need to be filled in, i.e., leave them completely blank.</p>
          <h3>Nisab of Zakat = 73,500 Tk</h3>
          <p id="span" style={{ marginTop: "15px", fontSize: "20px" }}>(Prescribed by IFA Consultancy - Last Updated March 2024)</p>

          <StepCount onStepChange={handleStepChange} />
          {currentStep === 1 && ( // Show the calculation div only when the current step is 1
            <div className='zakata_calculation_cont'>
              <div className='next_zakat_page'>
                <div className='first_cal_div'>
                  <p>The amount of your total Zakatable assets as per the first list is subtracted from the amount of the total deductible debt as per the second list. Then one fortieth of the remaining wealth or 2.5% is charged as your Zakat.</p>
                </div>
                <div className='first_cal_div2'>
                  <div> <p>Zakatable Assets (A):</p>  <p>৳ 0 (Taka) </p>  </div>
                  <div><p>Assets Deductible from Zakat (B):</p>  <p>৳ 0 (Taka) </p> </div>
                  <p className='you_do'>You do not have the Nisab amount of assets (Tk 73,500) to pay Zakat.</p>
                </div>
              </div>
              <div className='donate_a_portion'>
                <Link to={"/"}><button className='donate_a_portion_button'>Donate a portion of your Zakat to As-Sunnah Foundation</button></Link>
              </div>
              <div className='zkat_info'>
                <p>As-Sunnah Foundation spends Zakat on:</p>
                <a href="">1. Self-reliance project</a><br /><br />
                <a href="">2. Scholarships for training unemployed and unskilled (Zakat entitled) men and women</a>
                <p>3. In addition, the sectors suitable for zakat are under the implementation of As-Sunnah Foundation

                </p>
              </div>
            </div>
          )}

          <div className='stepper_div'>
            <div className='content_div_zakat1'>
              <p className='ptag'>Warning:</p>
              <p>Zakat is an obligatory act of worship. It is the duty of every zakat payer to calculate Zakat correctly and accurately. This website is only an aid in Zakat calculation. It does not guarantee final accurate calculations. Because it is necessary to provide the correct information and input for the final precise calculation, if the calculation of Zakat is incorrect due to providing wrong information, it will be solely borne by the user of this service. As-Sunnah Foundation will not accept responsibility for any errors in this regard. Our advice is that after first calculating the Zakat through this calculator, to ensure its accuracy, the user should consult an experienced Mufti Sahib to verify the calculation. In this case, the person can also ensure the accuracy of his Zakat calculation by taking the Zakat Calculation Service of IFA Consultancy.</p>
            </div>
            <div className='content_div_zakat2'>
              <p>Some important points about this form:</p>
              <ul>
                <li>No information on this form is stored or monitored.</li>
                <li>This form will suffice for personal and limited business accounts inshallah. However, those whose circumstances are different (e.g., multiple, large-scale businesses) are advised to calculate Zakat directly under the supervision of a reliable scholar.</li>
                <li>You can take a print after filling out the form to keep it with you. If you don't have a printer, save it as a PDF by going to the print option.</li>
                <li>Finally, it is best to have a scholar review the printed or PDF form.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ZakatCal;
