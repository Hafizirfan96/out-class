import React from 'react'
import phone from "./css/phone.png"
import whatsapp from "./css/whatsapp.png"
export default function HappyBtn() {
  return (
    <div className='wrap-happybtn'>
        <h1>Happy to help you</h1>
        <p> Need more Details? We're a call away</p>
       <div className='happybtn'>
        <div className='happybtn-icon'>
            <img src={phone}/>
            <img src={whatsapp}/>
        </div>
        <div className='happybtn-txt'>
            <p>0307-6882527</p>
            <p>0307-OUTCLAS</p>

        </div>
       </div>
    </div>
  )
}
