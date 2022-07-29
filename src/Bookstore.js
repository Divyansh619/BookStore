import React, { useState } from "react";
import { data } from "./Data";
import classes from "./Bookstore.module.css";
import Modal from './Modal'

const Bookstore = () => {
    const [show, setShow] = useState(false);

    const [value, setValue] = useState(data);
    const [desc, setDesc] = useState('');

    const changeHandler = (e) => {
        if (e.target.value === "All") {
            setValue(data)
        }
        else if (e.target.value === '300 or more') {
            const itemToShow = data.filter((items) => items.Price >= 300);
            setValue(itemToShow);
        }
        else {
            const itemsToShow = data.filter((item) => item.Price < 300);
            setValue(itemsToShow);
        }
    }



    return (
        <>
            {show && <Modal setShow={setShow} desc={desc} />}
            <div>
                Filter range :
                <select onChange={(e) => changeHandler(e)}>
                    {<option value={"All"}>{"All"}</option>}
                    {<option value={"300 or more"} >{"300 or more"}</option>}
                    {<option value={"less then 300"}>{"less then 300"}</option>}

                </select>
            </div>
            <div className={classes.wrapper}>
                {value.map((item) => {
                    return (
                        <div className={classes.boxcontainer}>
                            <div className={classes.idcontainer}>{item.Id}</div>
                            <div className={classes.covercontainer}>
                                <img src={item.Image} className={classes.coverimage} />
                            </div>
                            <div className={classes.infocontainer}>
                                <h4 className={classes.infoname}>{item.Name}</h4>
                                <button className={classes.btn} onClick={() => { setShow(true); setDesc(item) }}>Buy</button>
                                <div>Rs : {item.Price}</div>
                                <div className={classes.authorcontainer}>{item.Author}</div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default Bookstore;
