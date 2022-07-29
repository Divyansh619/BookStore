import React, { useState } from "react";
import classes from "./Modal.module.css";

const Modal = (props) => {
    const Backdrop = () => {
        return (
            <div className={classes.backdrop} onClick={() => props.setShow(false)} />
        );
    };

    console.log(props.desc);
    return (
        <div>
            <Backdrop />
            <div className={classes.modal}>
                <div className={classes.title}> {props.desc.Name}</div>
                <div>
                    <div className={classes.desc}>{props.desc.Description}</div>
                </div>
                <div className={classes.btncontainer}>
                    <div><button className={classes.btnone}>Add to cart</button></div>
                    <div><button className={classes.btntwo} onClick={() => props.setShow(false)}>Cancel</button></div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
