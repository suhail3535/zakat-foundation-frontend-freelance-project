import React from 'react'
import Topheader from '../../components/Topheader'
import './styles/termPocily.css'; // Import the CSS file
import { policy } from "./data";


const Privacy = () => {
  return (
    <div>
          <Topheader />
          <div className='heading'>
              <h4 className='privacy'>Privacy Policy</h4>
          </div>
      <div style={{ backgroundColor: "#f5f5f5" }}>
        <div className='termcondions'>
          {policy.map((ele) => {
            return <div className='termcon'>
              <h2 className='title_term'>{ele.title}</h2>
              <p className='descrip'>{ele.description}</p>

            </div>
          })}
        </div>

      </div>

    </div>
  )
}

export default Privacy
