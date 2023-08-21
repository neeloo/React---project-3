import React from 'react';
import './style.css';

const UseEffect = () => {

  const [mynum, setnum] = React.useState(0);
  return (
    <>
      <div className="center_div">
        <p>{mynum}</p>
        <div className="button2" onClick={() => setnum(mynum + 1)}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCR
        </div>

      </div>

    </>
  )
}

export default UseEffect