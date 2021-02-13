import React,{useState,useEffect} from 'react'
import {CgNotes} from 'react-icons/cg';
import {FaFacebook} from 'react-icons/fa';
import {FaInstagram,FaUserCircle,FaBars} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import {FiShoppingBag} from 'react-icons/fi';
import { connect } from "react-redux";
import './Header.css'

const Header = ({ cart }) => {
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
      let count = 0;
      cart.forEach((item) => {
        count += item.qty;
      });
  
      setCartCount(count);
    }, [cart, cartCount]);
    return (
        <div>
            <div className='header-wrapper'>
                <ul>
                    <li>call: (+880)1234567890</li>
                    <li><FaFacebook/></li>
                    <li><FaInstagram/></li>
                    <li><span className='note'><CgNotes/></span>how to order</li>
                </ul>
            </div>
            <div  className='logo-wrapper'>
                <div className='logo-wrapper-image'>
                    <img src='https://www.banglameds.com.bd/skin/frontend/rwd/bm/images/s-logo.jpg' alt='logo'/>
                </div>
                <div className='header-title-input'>
                    <p className='logo-wrapper-title'>আপনার ঔষধ খুঁজুন, অর্ডার করুন এবং দ্রুত ডেলিভারী নিন . . .</p>
                    <input placeholder='search medicines/produtcs here...'/>
                </div>
                <button className='header-logo-btn'>search</button>
                <div>
                <Link to='/cart'>
                    <p className='cartlogo'>Cart</p>
                <span className="cartcount">{cartCount}</span>
                    <span className='footer-logos'><FiShoppingBag/></span>
                    </Link>
                </div>
                <span className='logo-wrapper-man-logo'><FaUserCircle/></span>
                <p className='logo-wrapper-signin'>sign in/register</p>
            </div>
            <div className='covid-wrapper'>
                <ul>
                    <li><FaBars/></li>
                    <li>cOVID 19</li>
                    <li> health store</li>
                    <li>baby & mom</li>
                    <li>female hygiene</li>
                    <li>beauty care</li>
                    <li>diabetic</li>
                    <li>sexual wellbeing</li>
                    <li>FAQ</li>
                    <li>Log in</li>
                </ul>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
      cart: state.shop.cart,
    };
  };
  
  export default connect(mapStateToProps)(Header);
