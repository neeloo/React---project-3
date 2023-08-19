import React, { useState } from 'react'
import './style.css';
import menu from './ManuApi.js';
import MenuCard from './MenuCard';


const Reasurant=()=> {

    const [menudata, setdata] = useState(menu);
    console.log(menudata)

    const filterItem =(category)=>{
        const list=menu.filter((curElem)=>{
             return curElem.category===category;
        })
        setdata(list);

    }

    return (
        <>
        <nav className="navbar">
            <div className="btn-group">
                <button className="btn-group__item" onClick={()=>filterItem("breakfast")}>Breakfast</button>
                <button className="btn-group__item"onClick={()=>filterItem("lunch")}>lunch</button>
                <button className="btn-group__item"onClick={()=>filterItem("evening")}>Evening</button>
                <button className="btn-group__item"onClick={()=>filterItem("dinner")}>Dinner</button>
                <button className="btn-group__item"onClick={()=>setdata(menu)}>All</button>
            </div>
        </nav>
            <MenuCard menudata={menudata} />

        </>
    )



}

export default Reasurant
