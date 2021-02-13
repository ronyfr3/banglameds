import React from 'react'
import './UploadPrescription.css'

const UploadPrescription = () => {
    return (
        <div className='uploadpres'>
            <div className='kcjsabdki'>
               <p className='slkcos'>প্রেসক্রিপশন এর মাধ্যমে অর্ডার করুন</p>
                <ul>
                    <li>১. প্রেসক্রিপশন এর ছবি তুলে অথবা স্ক্যান করে আপলোড করুন।</li>
                    <li>২. আমাদের ফার্মাসিস্ট আপনার প্রেসক্রিপশন পেয়ে আপনার দেয়া</li>
                    <li>ফোন নাম্বারে যোগাযোগ করবে। ( সকাল ১০টা থেকে রাত ১০টা )</li>
                    <li>৩. ফার্মাসিস্ট আপনার সাথে কথা বলে ঔষধ সিলেক্ট করে অর্ডার</li>
                    <li>কনফার্ম করবে।</li>
                    <li>৪. নির্দিষ্ট সময়ে আপনার ঔষধ/পণ্য ডেলিভারী নিন।</li>
                    <li>৫. ঔষধ ডেলিভারীর সময় আপনার প্রেসক্রিপশন প্রদর্শন করুন।</li>
                </ul>
                <button className='btnsdsdjn'>upload prescription</button>
            </div>
            <div className='ckkdczd'>
                <img src='https://www.banglameds.com.bd/media/wysiwyg/upload_pres.jpg' alt='dctr'/>
            </div>
        </div>
    )
}

export default UploadPrescription
