import React, { useState } from "react";
import "./style.css";

const ToDo = () => {
    const [inputdata, setinput] = useState("");
    const [items, setitems] = useState([]);
    const addItem = () => {
        if (!inputdata) {
            alert("plz fill data");
        } else {
            setitems([...items, inputdata]);
        }
    }

    return (
        <>
            <div className="main-div">
                <div className="child-div">
                    <figure>
                        <img src="./Image/todo.svg" alt="todologo" />
                        <figcaption>Add Your List Here </figcaption>
                    </figure>
                    <div className="addItems">
                        <input type="text" placeholder="addItem" className="form-control"
                            value={inputdata} onChange={(e) => setinput(e.target.value)}
                        />
                        <i className="fa fa-plus add-btn" onClick={addItem}></i>
                    </div>

                    {/* show our items */}
                    <div className="showItems">
                        {items.map((curElem, index) => {
                            return (
                                <div className="eachItem">
                                    <h3>{curElem}</h3>
                                    <div className="todo-btn">
                                        <i className="far fa-edit add-btn"></i>
                                        <i className="far fa-trash-alt add-btn"></i>

                                    </div>
                                </div>
                            )
                        })}

                    </div>

                    {/* remove all button */}
                    <div className="showItem">
                        <button className="btn effect04" data-sm-link-text="Remove All">
                            <span>CHECK LIST</span>
                        </button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default ToDo;