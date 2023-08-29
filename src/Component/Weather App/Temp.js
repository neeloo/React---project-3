import React, { useEffect, useState } from 'react'
import './style.css'

const Temp = () => {

    const [searchValue, setSearchValue] = useState("pune");
    const getWeatherInfo = async () => {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid={WriteYourAPIKey}`;
            const res = await fetch();
            const data = await res.json();

        } catch (error) {
            console.log(error)
        }

    };

    useEffect(() => {
        getWeatherInfo();
    }, [])

    return (
        <>
            <div className="wrap">
                <div className="search">
                    <input
                        type="search"
                        placeholder="search..."
                        autoFocus
                        id="search"
                        className="searchTerm"
                        value={searchValue}
                        // onChange={(e) => setSearchValue(e.target.value)}
                        onChange={(e) => setSearchValue(e.target.value)}
                    />

                    <button
                        className="searchButton"
                        type="button"
                        onClick={getWeatherInfo}
                    >
                        Search
                    </button>
                </div>
            </div>

            {/* our temp card */}
            <article className='widget'>
                <div className="weatherIcon">
                    <i className={"wi  wi-day-sunny"}></i>
                </div>
                <div className="weatherInfo">
                    <div className="Temprecture">
                        <span>25.5deg</span>
                    </div>
                    <div className="description">
                        <div className="weatherCondition">sunny</div>
                        <div className="place">pune,India</div>
                    </div>
                </div>
                <div className="data">{new Date().toLocaleString()}</div>

                {/* our 4 cloum section */}
                <div className="extra-temp">
                    <div className="temp-info-minmax">
                        <div className="two-sided-section">
                            <p><i className={" wi  wi-sunset"}></i>
                            </p>
                            <p className="extra-info-leftside">
                                19:19 PM <br />
                                Sunset
                            </p>
                        </div>

                        <div className="two-sided-section">
                            <p><i className={" wi  wi-humidity"}></i>
                            </p>
                            <p className="extra-info-leftside">
                                19:19 PM <br />
                                humidity
                            </p>
                        </div>
                    </div>
                    <div className="weather-extra-info">
                        <div className="two-sided-section">
                            <p>
                                <i className={"wi wi-rain"}></i>
                            </p>
                            <p className="extra-info-leftside">
                                {/* {pressure}  */}
                                <br />
                                Pressure
                            </p>
                        </div>

                        <div className="two-sided-section">
                            <p>
                                <i className={"wi wi-strong-wind"}></i>
                            </p>
                            <p className="extra-info-leftside">
                                {/* {speed}  */}
                                <br />
                                Speed
                            </p>
                        </div>
                    </div>
                </div>
            </article>

            {/* <Weathercard {...tempInfo} /> */}
        </>
    )
}

export default Temp