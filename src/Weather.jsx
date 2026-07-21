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
import { BsCloudRain } from "react-icons/bs";
import { BsCloudSnow } from "react-icons/bs";
import { BsClouds } from "react-icons/bs";
import { TbSunWind } from "react-icons/tb";
import { FaRegSun } from "react-icons/fa6";
import { FiSunrise } from "react-icons/fi";
import { FiSunset } from "react-icons/fi";









function Weather() {

    const [city, setcity] = useState("asansol");
    const [citydata, setcitydata] = useState(null);

    const [hourlyForecast,sethourlyForecast]=useState([]);

    const [fc, setfc] = useState([]);

    function handlecity(event) {
        setcity(event.target.value);
    }

    const API_KEY = "413bdd7371264a8b897195740262007";
    const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`;

    const forcast = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=3`


    async function display() {

        const response = await fetch(url);
        const response2 = await fetch(forcast);
        const data2 = await response2.json();
        const data = await response.json();

        setcitydata(data);
        console.log(data2);
        setfc(data2);

    }

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
                            <input onChange={handlecity} type="text" placeholder="Search City..." value={city} /> <button onClick={display}>SEARCH</button>
                        </div>
                    </div>

                    <div className="main-wtr-info">
                        <div className="box1">
                            <div className="cloud-status">
                                <img src={citydata?.current?.condition?.icon} alt="" />
                            </div>
                            <div className="temp-info">
                                <h1>{citydata?.current?.temp_c}°</h1>
                                <p>{citydata?.current?.condition?.text}</p>
                                <br />
                                <p>{citydata?.location?.name}, {citydata?.location?.country}</p>
                                <p>{citydata?.location?.localtime}</p>
                            </div>
                        </div>

                        <div className="divider"></div>

                        <div className="box2">
                            <div className="miniboxes">
                                <div className="icon"><CiTempHigh className="ic" size={45} color="#FDB813" /></div>
                                <div><p>Feels Like</p> <h4>{citydata?.current?.feelslike_c}°</h4></div>
                            </div>
                            <div className="miniboxes">
                                <div className="icon"><IoWaterOutline className="ic" size={35} color="#38BDF8" /></div>
                                <div><p>Humidity</p> <h4>{citydata?.current?.humidity}%</h4></div>
                            </div>
                            <div className="miniboxes">
                                <div className="icon"><FaWind className="ic" size={35} color="#60A5FA" /></div>
                                <div><p>Wind Speed</p> <h4>{citydata?.current?.wind_kph} km/h</h4></div>
                            </div>
                            <div className="miniboxes">
                                <div className="icon"><ImMeter className="ic" size={30} color="#8B5CF6" /></div>
                                <div><p>Pressure</p> <h4>{citydata?.current?.pressure_mb} hPa</h4></div>
                            </div>
                            <div className="miniboxes">
                                <div className="icon"><FiEye className="ic" size={35} color="#A855F7" /></div>
                                <div><p>Visibility</p> <h4>{citydata?.current?.vis_km} km</h4></div>
                            </div>


                            <div className="miniboxes">
                                <div className="icon"><LuSun className="ic" size={35} color="FBBF24" /></div>
                                <div><p>UV INDEX</p> <h4>{citydata?.current?.uv}</h4></div>
                            </div>


                        </div>

                    </div>



                    <div className="wtr-details">


                        <div className="detail-box">
                            <div className="icon"><BsCloudRain className="ic" size={35} color="FBBF24" /></div>
                            <div><p>Rain</p><h4>{citydata?.current?.chance_of_rain
                            }%</h4>
                            </div>
                        </div>



                        <div className="detail-box">
                            <div className="icon"><BsCloudSnow className="ic" size={35} color="38BDF8" /></div>
                            <div><p>Snow</p> <h4>{citydata?.current?.chance_of_snow}%</h4>
                            </div>
                        </div>




                        <div className="detail-box">
                            <div className="icon"><FaRegSun className="ic" size={35} color="#fba524" /></div>
                            <div><p>Heat Index</p> <h4>{citydata?.current?.heatindex_c
                            }°</h4>
                            </div>



                        </div>

                        <div className="detail-box">
                            <div className="icon"><BsClouds className="ic" size={35} color="#24e2fb" /></div>
                            <div><p>Clouds</p> <h4>{citydata?.current?.cloud}%</h4>
                            </div>
                        </div>



                        <div className="detail-box">
                            <div className="icon"><FiSunrise className="ic" size={35} color="#f6df6d" /></div>
                            <div><p>Sun Rise</p> <h4>{fc.forecast.forecastday[0].astro.sunrise}</h4>
                            </div>
                        </div>



                        <div className="detail-box">
                            <div className="icon"><FiSunset className="ic" size={35} color="#f8873d" /></div>
                            <div><p>Sun Set</p> <h4>{fc.forecast.forecastday[0].astro.sunset}</h4>
                            </div>
                        </div>




                    </div>

                    <div className="last-cont">

                        <div className="fc-box1">
                            <div className="fc"></div>
                        </div>




                        <div className="fc-box2"></div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Weather