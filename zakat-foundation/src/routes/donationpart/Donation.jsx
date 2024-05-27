import React from 'react';
import Topheader from '../../components/Topheader';
// import "../donationpart/styles/donation.css"

import { data } from "./data";
import DonationCard from '../donationpart/DonationCard';

const Donation = () => {
    console.log(data, 9);
    return (
        <div>
            <Topheader />
            <div className='heading'>
                <h1>Together Let's make a change</h1>
            </div>
            <div className='parent_div'>
                <div className='card_container'>
                    {data.map((ele) => {
                        return <DonationCard key={ele.id} {...ele} />
                    })}
                </div>
            </div>

        </div>
    )
}

export default Donation;
