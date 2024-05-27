import React from 'react'
import { newsdata } from './newssingledata'
import Topheader from '../components/Topheader'
import ModalImage from "react-modal-image";

const NewsSinglepage = () => {
    return (
        <>

            <Topheader />
            <div className='heading'>
                <h1>News</h1>
            </div>
        <div className='main_news_cont'>
            <div className='news_single'>
                {newsdata.map((ele) => {
                    return <div>
                        <h1>{ele.title}</h1>
                        <p style={{marginTop:"10px",fontSize:"15px"}}>{ ele.date}</p>
                        <ModalImage
                            small={ele.image}
                            large={ele.image}
                            alt="Image preview"
                        />

                    
                        <p>{ele.details}</p>
                    </div>
                })}
            </div>
            </div>
        </>
    )
}

export default NewsSinglepage
