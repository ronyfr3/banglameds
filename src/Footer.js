import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='banglaincrease'>
                <img src='https://www.banglameds.com.bd/skin/frontend/rwd/bm/images/s-logo.jpg' alt='logo'/>
               <ul>
                   <li>BanglaMeds is an online pharmacy aimed</li>
                   <li>increase the comfort and convenience of</li>
                   <li>people wanting to order medicines online.</li>
               </ul>
            </div>
            <div className='infoabout'>
                <ul>
                    <li className="infofooter">Information</li>
                    <li>About Us</li>
                    <li>Delivery Options</li>
                    <li>Terms and Conditions</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className='contactapartment'>
            <ul>
                    <li className='contactus'>Contact Us</li>
                    <li>Apartment: 1A, House: 12, Road: 10,</li>
                    <li>Sec: 6, Uttara, Dhaka, Bangladesh</li>
                    <li>+880 9638 120 130</li>
                    <li>sales@banglameds.com.bd</li>
                </ul>
            </div>
            <div className='footerlastpart'>
                <p className='dev'>Developed and maintained with love by Meao Tonima</p>
                <p className='atherate'>© 2018- 2020 BanglaMeds. All Rights Reserved!</p>
            </div>
        </div>
    )
}

export default Footer
