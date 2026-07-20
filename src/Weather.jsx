import "./Weather.css"
import { WiDayCloudy } from "react-icons/wi";
function Weather() {
    return (
        <>
            <section className="hero">
                <div className="main-content-box">

                    <div className="cont1">
                        <div className="logo-box"><WiDayCloudy size={35} /> AL-MOSAM</div>
                        <div className="info1">
                            <button>current location</button>
                            <div className="temp"><button>C</button><button>F</button></div>
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