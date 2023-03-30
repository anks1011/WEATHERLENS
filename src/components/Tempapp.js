import React, { useEffect, useState } from 'react'
import  './css/style.css';

export default function Tempapp() {
    const [city,setCity]=useState(null);

    const [search,setSearch]=useState(null);
    const onChangeCase =(event)=>{
        setSearch(event.target.value);  
          
    }


    
        const fetchApi= async()=>{
            if(search){
            const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=fb4e4460b48ce7af78eab883fef2c0a4`;
            const response=await fetch(url);
            const resJson = await response.json();
            if(resJson.cod!="404"){
            setCity(resJson);
            }
        }
        }

        const click= ()=>{
            fetchApi();
        }
        
  return (
    <>
     <div className="center">
    <div className="h-100 d-flex align-items-center justify-content-center">
          <br/>
        
          <div style={{background:"#679ad4" ,height:"500px", width:"500px",marginTop:"20px"}}>
          <form className="row g-2 mx-5 my-3 " style={{paddingLeft:"100px"}}>
            <div className="col-auto">
            <input type="text" className="form-control inputField"  placeholder="City" onChange={onChangeCase }/>
            </div>
            <div className="col-auto">  <button className="btn btn-outline-secondary" onClick={click} type="button" id="button-addon2">Button</button></div>
            
        </form>
        <br>
        </br>
        <br/>

        {!city?(<div className='info'>
        <h3 className="col-auto " style={{paddingLeft:"150px",color:"white" }}>Please Enter City!!</h3>
        </div>):
        (<div className='info'>
            <div className="row g-2">
            <h1 className='location col-auto'  style={{paddingLeft:"130px"}}>
            <i className="col-auto fa-solid fa-street-view"></i><b> {city.name}</b>
            
            </h1>
            <h3 className="col-auto " style={{paddingLeft:"110px",color:"white" }}><b>Temperature : {city.main.temp}° cel </b></h3>
            </div  >
            <h4 className='tempmin_max' style={{paddingLeft:"80px ",color:"Yellow"}}>Min :{city.main.temp_min}° cel | Max : {city.main.temp_min}° cel</h4>
            <h4 className='tempmin_max' style={{paddingLeft:"70px",color:"Yellow"}}>Humidity :{city.main.humidity}% | Feel Like : {city.main.feels_like}° cel</h4>

            <br/>
            <h1 className='tempmin_max' style={{text:"center",color:"Yellow",textDecoration: "underline", fontFamily: "Times New Roman"}}>{city.weather[0].description}</h1>
            
         </div>)
}
        </div>
        
            
        </div>
         </div>
 
  

    
    </>
  )
}
