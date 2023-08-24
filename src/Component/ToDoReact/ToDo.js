import React from "react";
import "./style.css";

const ToDo = () => {

    return (
        <>
            <div className="main-div">
                <div className="child-div">
                    <figure>
                        <img src= "./Image/todo.svg"  alt="todologo" />
                        <figcaption>Add Your List Here </figcaption>
                    </figure>
                    <div className="addItem">
                        <input type="text" placeholder="addItem" className="form-control" />
                        <i className="fa fa-plus add-btn"></i>
                    </div>

                </div>
            </div>
        </>
    )
}

export default ToDo;