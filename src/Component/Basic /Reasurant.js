import React, { useState } from 'react'
import './style.css';
import menu from './ManuApi.js';
import MenuCard from './MenuCard';
import Navbar from './Navbar';

const uniquelist = [
    ...new Set
    (menu.map((curElem) => {
        return curElem.category;
    })
    ),
];

    console.log(uniquelist)

const Reasurant = () => {

    const [menudata, setdata] = useState(menu);
    console.log(menudata)

    const filterItem = (category) => {
        const list = menu.filter((curElem) => {
            return curElem.category === category;
        })
        setdata(list);

    }

    return (
        <>
           <Navbar filterItem={filterItem}/>
            <MenuCard menudata={menudata} />

        </>
    )



}

export default Reasurant
