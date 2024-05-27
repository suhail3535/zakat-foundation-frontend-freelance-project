import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { data } from "../routes/donationpart/data";

export default function Header () {
  const [donationType, setDonationType] = useState("");
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");
  const [donationTypeError, setDonationTypeError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [amountError, setAmountError] = useState("");
  const [sliderIndex, setSliderIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    afterChange: (current) => {
      setSliderIndex(current);
    },
  };

  const handleDonate = (e) => {
    e.preventDefault();

    if (!donationType) {
      setDonationTypeError("Please select a donation type.");
    } else {
      setDonationTypeError("");
    }

    if (!email) {
      setEmailError("Please enter your email.");
    } else {
      setEmailError("");
    }

    if (!amount) {
      setAmountError("Please enter the donation amount.");
    } else {
      setAmountError("");
    }

    if (donationType && email && amount) {
      // Proceed with donation logic
      console.log("Donation submitted:", donationType, email, amount);
      // Add your donation submission logic here
    }
  };

  return (
    <header>
      <div className="donateForm">
        <form onSubmit={handleDonate}>
          <div className="custom-dropdown">
            <select
              name=""

              value={donationType}
              onChange={(e) => {
                setDonationType(e.target.value);
                setDonationTypeError(""); // Clear error when changing value
              }}
            >
              <option value="">Select Donation</option>
              {data.map((ele, index) => (
                <option key={index} value={ele.heading}>
                  {ele.heading}
                </option>
              ))}
            </select>
            {donationTypeError && <div style={{ color: "red", marginTop: "10px", marginLeft: "15px", fontSize: "15px" }}>{donationTypeError}</div>}
          </div>
          <div className="input_boxes">
            <input

              type="text"
              placeholder="Phone / Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailError(""); // Clear error when changing value
              }}
            />
            {emailError && <div style={{ color: "red", marginTop: "10px", marginLeft: "15px", fontSize: "15px" }}>{emailError}</div>} </div>
          <div className="input_boxes">
            <input
              type="number"
              placeholder="Donation Amount"
              value={amount}
              onChange={(e) => {
                setAmount(e.target.value);
                setAmountError(""); // Clear error when changing value
              }}
            />

            {amountError && <div style={{ color: "red", marginTop: "10px", marginLeft: "15px", fontSize: "15px" }}>{amountError}</div>}
          </div>

          <div className="donate_btn_div">

        <button type="submit" style={{ cursor: "pointer" }}>
            Donate
            </button>
          </div>
        </form>
      </div>
      <div className="headerImage">
        <Slider {...settings}>
          <div>
            <img src="/images/head/one.png" alt="headerImage" />
          </div>
          <div>
            <img src="/images/head/two.png" alt="headerImage" />
          </div>
          <div>
            <img src="/images/head/three.png" alt="headerImage" />
          </div>
          <div>
            <img src="/images/head/four.png" alt="headerImage" />
          </div>
          <div>
            <img src="/images/head/five.png" alt="headerImage" />
          </div>
          <div>
            <img src="/images/head/six.png" alt="headerImage" />
          </div>
          <div>
            <img src="/images/head/seven.png" alt="headerImage" />
          </div>
          <div>
            <img src="/images/head/eight.png" alt="headerImage" />
          </div>
        </Slider>
        <div style={{ textAlign: "center", marginTop: "10px" }}>
          {/* Currehhhhnt Slide: {sliderIndex + 1} */}
        </div>
      </div>
    </header>
  );
}
