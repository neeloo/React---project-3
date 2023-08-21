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
    "All",
];

    //console.log(uniquelist)

const Reasurant = () => {

    const [menudata, setdata] = useState(menu);
    // console.log(menudata)
    const[menulist,setlist]=useState(uniquelist);


    const filterItem = (category) => {

        if(category=== "All"){
            setdata(menu)
            return ;
        }
        const list = menu.filter((curElem) => {
            return curElem.category === category;
        })
        setdata(list);

    }

    return (
        <>
           <Navbar filterItem={filterItem} menulist={menulist}/>
            <MenuCard menudata={menudata} />

        </>
    )



}

export default Reasurant
