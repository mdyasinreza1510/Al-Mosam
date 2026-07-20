import "./Weather.css"
import React ,{ useState, useEffect, useRef } from 'react'
import { WiDayCloudy } from "react-icons/wi";
import { FaLocationDot } from "react-icons/fa6";
import { TbTemperatureCelsius } from "react-icons/tb";
import { TbTemperatureFahrenheit } from "react-icons/tb";
function Weather() {
    const [temp,settemp]=useState("c");
    
    return (
        <>
            <section className="hero">
                <div className="main-content-box">

                    <div className="cont1">
                        <div className="logo-box"><WiDayCloudy size={35} /> AL-MOSAM</div>
                        <div className="info1">
                            <button className="cur-loc" > <FaLocationDot size={13}/> Current Location</button>
                            <div className="temp">
                                <button onClick={()=>settemp("c")} className={temp==="c"? "btnbg":"none"} ><TbTemperatureCelsius size={20}/></button>
                                <button onClick={()=>settemp("f")} className={temp==="f"?"btnbg":"none"} ><TbTemperatureFahrenheit size={20}/></button></div>
                        </div>
                    </div>

                    <div className="input-box">input,search</div>

                    <div className="main-wtr-info"></div>

                    <div className="wtr-details"></div>

                    <div className="last-cont"></div>
                </div>
            </section>
        </>
    );
}
export default Weather