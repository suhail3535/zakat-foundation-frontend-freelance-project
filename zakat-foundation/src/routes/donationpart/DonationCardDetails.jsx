import React, { useState } from 'react'
// import "../donationpart/styles/donation.css"
import Topheader from '../../components/Topheader';
import { Link } from 'react-router-dom/dist';
const DonationCardDetails = () => {
    const [formData, setFormData] = useState({
        donationAmount: '',
        donorName: '',
        phoneOrEmail: '',
    });
    const [formErrors, setFormErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        setFormErrors({
            ...formErrors,
            [name]: value ? '' : `Please enter ${name} field`,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = {};
        if (!formData.donationAmount) {
            errors.donationAmount = 'Please enter donation amount';
        }
        if (!formData.donorName) {
            errors.donorName = 'Please enter donor name';
        }
        if (!formData.phoneOrEmail) {
            errors.phoneOrEmail = 'Please enter phone/email';
        }
        setFormErrors(errors);
        if (Object.keys(errors).length === 0) {
            // Handle form submission
            alert("submit")
            console.log('Form submitted successfully:', formData);
        }
    };
    return (
        <>
            <Topheader />
            <div className='donation_card_details_container'>
                <div className='heading'>
                    <h1>Zakat Found</h1>
                </div>
                <div className='main_container'>
                    <div className='details_div'>
                        <div className="iframe_card">
                            <iframe


                                src="https://www.youtube.com/embed/wKV4pZrep6E?si=oKozGxOT-e67fPsI"
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowfullscreen
                            ></iframe>
                        </div>
                        <div className='title'>
                            <p>“And establish prayer and give Zakat, and whatever good you put  forward for yourselves – you will find it with Allah.”
                            </p>
                            <p>(Surah Al-Baqarah - 2:110)</p>
                        </div>
                        <div className='title_part_two'>
                            <p>
                                Let’s create smile together:
                            </p>
                            Zakat is one of the five fundamental pillars of Islam. Zakat is the right of the poor. The Quran declares severe punishment for non-payment of Zakat. The primary objective of Zakat is the permanent eradication of poverty. Zakat plays a significant role in eliminating economic inequality from the society. As-Sunnah Foundation has been contributing to alleviating poverty in the country through Zakat since its inception. To be a partner in societal change, you can donate a portion of your Zakat to the As-Sunnah Foundation Zakat Fund.

                            Since inception, we have been providing humanitarian and sustainable assistance throughout the country.

                            <p> Sectors we prioritize for Zakat distribution: </p>

                            <p>1-Self-reliance project</p>
                            <p> 2-Scholarships for training unemployed and unskilled (Zakat eligible) men and women
                            </p>

                            3-    Besides,Zakat suitable sectors under the supervision of the As-Sunnah Foundation

                        </div>
                    </div>
                    <div className='bank_details_div'>
                        <div className='bank_title_part_two'>
                            <h4>Zakat Found</h4>
                            <p>Just as Zakat is one of the fundamental pillars of Islam, it is also a humanitarian act of worship. Zakat plays the most significant role in eliminating economic inequality. Your Zakat can help move the wheels of a stagnant family.</p>
                            <Link to={"/cal_zakat"}> <button>
                                Calculate your Zakat Easly from Here
                            </button></Link>
                            <p>As Sunnah Foundation Zakat Bank Account</p>
                        </div>
                        <div className='bank_ac'>
                            <div className='bank_logo'>
                                <img src="https://assunnahfoundation.org/static/media/bank-icon-1.a7bdd015.svg" alt="" /></div>
                            <div className='ac_number'>
                                <p>
                                    Account Name : As sunnah Foundation Zakat Fund
                                    Account Number : 20503100100160806 <br />
                                    Bank : Islami Bank Bangladesh PLC.
                                    Branch : Badda, Dhaka
                                    Routing Number : 125260341 <br />
                                    Swift Code : IBBLBDDH
                                </p>
                            </div>
                        </div>
                        <div className='bank_ac'>
                            <div className='bank_logo'>
                                <img src="https://assunnahfoundation.org/static/media/bank-icon-2.297358dd.svg" alt="" /></div>
                            <div className='ac_number'>
                                <p>
                                    Account Name : As sunnah Foundation Zakat Fund
                                    Account Number : 07511100103026
                                    Bank : Exim Bank Ltd.
                                    Branch : Satarkul, Badda, Dhaka.
                                    Routing Number : 100264025

                                </p>
                            </div>
                        </div>
                        {/* <------------Amountdiv----------> */}
                        <div className='amount_btn_div'>
                            <button><span>100 ৳</span></button>
                            <button><span>1000 ৳</span></button>
                            <button><span>5000 ৳</span></button>
                            <button><span>1000 ৳</span></button>
                            <button><span>50000 ৳</span></button>
                            <button><span>Other</span></button>

                        </div>

                        <div className='form_div'>
                            <input type="checkbox" /> <label htmlFor="">Any Donation Amount</label>
                            <form className='form'>
                                <div id="first_input">
                                    <label htmlFor="donationAmount">Donation Amount: <span style={{ color: "red", fontSize: "20px", }}>*</span></label>
                                    <input
                                        type="text"
                                        name="donationAmount"
                                        value={formData.donationAmount}
                                        onChange={handleInputChange}
                                    />
                                    {formErrors.donationAmount && <div className="error">{formErrors.donationAmount}</div>}
                                </div>
                                <div className='donar'>
                                    <label htmlFor="donorName">Donor Name:<span style={{ color: "red", fontSize: "20px", }}>*</span></label>
                                    <input
                                        type="text"
                                        name="donorName"
                                        value={formData.donorName}
                                        onChange={handleInputChange}
                                    />
                                    {formErrors.donorName && <div className="error">{formErrors.donorName}</div>}
                                </div>
                                <div className='donar'>
                                    <label htmlFor="phoneOrEmail">Phone/Email: <span style={{ color: "red", fontSize: "20px", }}>*</span></label>
                                    <input
                                        type="text"
                                        name="phoneOrEmail"
                                        value={formData.phoneOrEmail}
                                        onChange={handleInputChange}
                                    />
                                    {formErrors.phoneOrEmail && <div className="error">{formErrors.phoneOrEmail}</div>}
                                </div>
                                <div className='next_btn'>
                                    <button onClick={handleSubmit} >Next</button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DonationCardDetails
