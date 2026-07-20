import "./Weather.css"
import React, { useState, useEffect, useRef } from 'react'
import cloud from "./assets/cloud.png";
import { WiDayCloudy } from "react-icons/wi";
import { FaLocationDot } from "react-icons/fa6";
import { TbTemperatureCelsius } from "react-icons/tb";
import { TbTemperatureFahrenheit } from "react-icons/tb";
import { WiDegrees } from "react-icons/wi";
function Weather() {
    const [temp, settemp] = useState("c");

    return (
        <>
            <section className="hero">
                <div className="main-content-box">

                    <div className="cont1">
                        <div className="logo-box"><WiDayCloudy size={35} /> AL-MOSAM</div>
                        <div className="info1">
                            <button className="cur-loc" > <FaLocationDot size={13} /> Current Location</button>
                            <div className="temp">
                                <button onClick={() => settemp("c")} className={temp === "c" ? "btnbg" : "none"} ><TbTemperatureCelsius size={20} /></button>
                                <button onClick={() => settemp("f")} className={temp === "f" ? "btnbg" : "none"} ><TbTemperatureFahrenheit size={20} /></button></div>
                        </div>
                    </div>


                    <div className="input-box">
                        <div className="inp-search-box">
                            <input type="text" placeholder="Search City..." /> <button>SEARCH</button>
                        </div>
                    </div>

                    <div className="main-wtr-info">
                        <div className="box1">
                            <div className="cloud-status">
                               <img src={cloud} alt="" srcset="" />
                            </div>
                            <div className="temp-info">
                                <h1>28°</h1>
                                <p>partly cloudy</p>
                                <br />
                                <p>new delhi, IN</p>
                                <p>Friday 20 july | 10:30pm</p>
                            </div>
                        </div>
                        
                     </div>
                        <div className="box2"></div>

                    <div className="wtr-details"></div>

                    <div className="last-cont"></div>
                </div>
            </section>
        </>
    );
}
export default Weather