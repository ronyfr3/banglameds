import React from 'react'
import {connect} from 'react-redux';
import { Link } from "react-router-dom";
import {loadCurrentItem} from '../../redux/Shopping/shopping-actions';
import './CovidSlider.css'

const SLiderImage = ({products,loadCurrentItem}) => {
    return (
        <div className='wraperisvjskvjh'>
            <Link to={`/product/${products.id}`}>
             {
               products.map((item)=>{
                const {image,id,title,price} = item
                   return(
                       <div key={id} className="covid-products" onClick={() => loadCurrentItem(item)}>
                          <div className='covid-image'>
                              <img src={image} alt={title}/>
                          </div>
                          <p className='covidtitle'>{title}</p>
                          <p className='covidprice'>৳ {price}</p>
                       </div>
                   )
               })
           }
           </Link>
        </div>
    )
}


  const mapStateToProps = (state) => {
    return {
      products: state.shop.products,
    };
  };
  const mapDispatchToProps = (dispatch) => {
    return {
      loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
    };
  };
  
  export default connect(mapStateToProps,mapDispatchToProps)(SLiderImage);