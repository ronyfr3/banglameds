import React from 'react'
import Footer from '../Footer'
import Banner from './Header/Banner/Banner'
import Allprodutcs from './products/Allprodutcs'
import OverTheCounterProducts from './products/OverTheCounterProducts'
import WhyChoose from './products/WhyChoose'
import UploadPrescription from './products/UploadPrescription'
import CovidProducts from './products/covid-19 products/CovidProducts'

const MedicalStore = () => {
    return (
        <div>
            <Banner/>
            <CovidProducts/>
            <Allprodutcs/>
            <UploadPrescription/>
            <WhyChoose/>
            <OverTheCounterProducts/>
            <Footer/>
        </div>
    )
}

export default MedicalStore
