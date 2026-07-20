import "./Weather.css"
import React, { useState, useEffect, useRef } from 'react'
import cloud from "./assets/cloud.png";
import { WiDayCloudy } from "react-icons/wi";
import { FaLocationDot } from "react-icons/fa6";
import { TbTemperatureCelsius } from "react-icons/tb";
import { TbTemperatureFahrenheit } from "react-icons/tb";
import { WiDegrees } from "react-icons/wi";
import { CiTempHigh } from "react-icons/ci";
import { IoWaterOutline } from "react-icons/io5";
import { FaWind } from "react-icons/fa";
import { ImMeter } from "react-icons/im";
import { FiEye } from "react-icons/fi";
import { LuSun } from "react-icons/lu";






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

                        <div className="divider"></div>

                        <div className="box2">
                            <div className="miniboxes">
                                <div className="icon"><CiTempHigh className="ic" size={45} color="#FDB813" /></div>
                                <div><p>Feels Like</p> <h4>30°</h4></div>
                            </div>
                            <div className="miniboxes">
                                <div className="icon"><IoWaterOutline className="ic" size={35} color="#38BDF8" /></div>
                                <div><p>Humidity</p> <h4>62%</h4></div>
                            </div>
                            <div className="miniboxes">
                                <div className="icon"><FaWind className="ic" size={35} color="#60A5FA" /></div>
                                <div><p>Wind Speed</p> <h4>14km/h</h4></div>
                            </div>
                            <div className="miniboxes">
                                <div className="icon"><ImMeter className="ic" size={30} color="#8B5CF6" /></div>
                                <div><p>Pressure</p> <h4>1008 hPa</h4></div>
                            </div>
                            <div className="miniboxes">
                                <div className="icon"><FiEye className="ic" size={35} color="#A855F7"/></div>
                                <div><p>Visibility</p> <h4>10km</h4></div>
                            </div>
                            <div className="miniboxes">
                                <div className="icon"><LuSun className="ic" size={35} color="FBBF24" /></div>
                                <div><p>UV INDEX</p> <h4>6 High</h4></div>
                            </div>

                        </div>

                    </div>


                    <div className="wtr-details"></div>

                    <div className="last-cont"></div>
                </div>
            </section>
        </>
    );
}
export default Weather