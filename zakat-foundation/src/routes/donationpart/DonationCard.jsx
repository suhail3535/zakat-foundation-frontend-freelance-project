import React from 'react';
// import '../donationpart/styles/donation.css'; // Import your CSS file for styling
import { Link } from 'react-router-dom/dist';

const DonationCard = ({ image, heading, desc }) => {
    return (
        <Link style={{ textDecoration: "none" }} to={"/donation_cart"}>
            <div className="card">
            <div className="image">
                <img src={image} alt="Card" />
            </div>
            <div className="content">
                <p>{heading}</p>
                <div className="description">
                    <p>{desc}</p>
                </div>
            </div>
            <div className='donate_div_btn'>
                <button>Donate</button>
            </div>
        </div>
         </Link>
    );
};

export default DonationCard;
