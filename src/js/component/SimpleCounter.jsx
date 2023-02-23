import React, { useEffect, useState } from "react";
import Proptypes from 'prop-types';
import styles from "./SimpleCounter.css"
import propTypes from "prop-types";

export const SimpleCounter = (props) => {
    return (
        <div className="bigCounter">
            <div className="calendarIcon"></div>
            <div className="four">{props.digitFour % 10}</div>
            <div className="three">{props.digitThree % 10}</div>
            <div className="two">{props.digitTwo % 10}</div>
            <div className="one">{props.digitOne % 10}</div>           
        </div>
    )

    SimpleCounter.prototypes = {
        digitFour: Proptypes.number,
        digitThree: Proptypes.number,
        digitTwo: Proptypes.number,
        digitOne: Proptypes.number,
    };

    let counterOne = 0;
    let counterTwo = 0;
    let counterThree = 0;
    let counterFour = 0;

    setInterval(() => {
        const four = Math.floor(counterFour/1000);
        const three = Math.floor(counterThree/100);
        const two = Math.floor(counterTwo/10);
        const one = Math.floor(counterOne/1);
        counter++;

    }, 1000);
}

