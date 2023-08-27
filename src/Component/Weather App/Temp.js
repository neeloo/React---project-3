import React from 'react'
import './style.css'

const Temp = () => {
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
                    //value={searchValue}
                    // onChange={(e) => setSearchValue(e.target.value)}
                    />

                    <button
                        className="searchButton"
                        type="button"
                    //onClick={getWeatherInfo}
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
                </div>
            </article>

            {/* <Weathercard {...tempInfo} /> */}
        </>
    )
}

export default Temp