import "./Weather.css"
import { GoHomeFill } from "react-icons/go";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
function Weather(){
    return(
        <>
       <section className="hero">
        <div className="main-content-box">

            <div className="dash1">

                <div className="wtrlogo">weather logo</div>

                <div className="option-box">
                    <div className="options"><GoHomeFill size={20}/>DASHBOARD</div>

                    <div className="options"><MdOutlineDateRange size={20}/>FORECAST</div>

                    <div className="options"><FaMapMarkerAlt size={20}/>MAP</div>

                    <div className="options"><FaRegHeart size={18}/>FAVORITE</div>
                    
                    <div className="options"><IoSettingsSharp size={20}/>SETTING</div>
                </div>

                <div className="premium"></div>

            </div>

            <div className="dash2"></div>
        </div>
       </section>
        </>
    );
}
export default Weather