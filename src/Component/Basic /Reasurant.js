import React from 'react'
import './style.css';
import menu from './ManuApi.js';

function Reasurant() {
    const mystyle = { color: "red" }; //or write style={{color:"red"}} in span breakfast line
    return (
        <div className="card-container">
            <div className="card">
                <div className="card-body">
                    <span className="card-number">1</span>
                    <span className="card-author" style={mystyle}>Breakfast</span>
                    <h1 className="card-title">Maggi</h1>
                    <span className="card-description">
                        I love maggi Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dolorum sequi incidunt explicabo sed voluptas consectetur
                        voluptatibus labore enim accusamus fugit?
                        
                    </span>
                    <div className="card-read">Read</div>
                </div>
                <img src="{Image}" alt="image" className='card-media' />
                <div className="card-tag-subtle">Order Now</div>
            </div>
        </div>
    )
}

export default Reasurant
