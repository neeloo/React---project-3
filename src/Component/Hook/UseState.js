import React,{useState} from 'react';
import './style.css';

const UseState = () => {

    const [mynum,setnum]=useState(0);
    // console.log(mynum);
    return (
        <>
            <div className="center_div">
                <p>{mynum}</p>
                <div className="button2" onClick={()=>setnum(mynum +1)}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    INCR
                </div>
                <div className="button2" onClick={()=>mynum > 0 ? setnum(mynum-1):setnum(0)}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    DECR
                </div>
            </div>


        </>
    )
}

export default UseState;