import React,{useState,useEffect} from 'react'
import './Covid.css'

const CovidProducts = () => {
    const [data,setData] = useState([])
    //https://api.covid19api.com/summary
    //https://coronavirus-19-api.herokuapp.com/countries/Bangladesh
    //https://data.covidapi.com/timeseries/countries
    // https://covid2019-api.herokuapp.com/country/Bangladesh
//     fetch("https://covid-193.p.rapidapi.com/statistics", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-key": "395089c821mshf87110cd07f43dep10e097jsn24093ed32c1a",
// 		"x-rapidapi-host": "covid-193.p.rapidapi.com"
// 	}
//data.jsdhcb[37].location
// })
    
       const fetchedData =async()=>{
           try{
               const apidata = await fetch('https://coronavirus-19-api.herokuapp.com/countries/Bangladesh')
            const api_data = await apidata.json()
            setData(api_data)  
           } 
           catch(error){
               console.log(error)
           }
     }
     useEffect(()=>{
         fetchedData()
        },[])
        console.log(data)

    return (
        <div className='covidapidata'>
           <div className='ksjkbsd'>
           <p className='aknojore'>একনজরে বাংলাদেশের করোনা পরিস্থিতি</p>
            <div className='wrpaeerdvis'>
               {
                   data.length===0 ? <p>please wait...</p> :(
                   <div>
                        <div className='traiksd'>
                            <p><span>সক্রিয়: </span> {data.active}</p>
                            <p><span>সর্বমোট শনাক্ত: </span> {data.cases}</p>
                            <p><span>সর্বমোট মৃত্যু: </span> {data.deaths}</p>
                            <p><span>সর্বমোট আরোগ্য: </span> {data.recovered}</p>
                            <p><span>সর্বমোট পরীক্ষা: </span> {data.totalTests}</p>
                            <p><span>নতুন শনাক্ত: </span> {data.todayCases}</p>
                            <p><span>নতুন মৃত্যু: </span> {data.todayDeaths}</p>
                        </div>
                   </div>
                   )
               }
            </div>
           </div>
        </div>
    )
}

export default CovidProducts
