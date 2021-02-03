import React from 'react'
import './App.css';

const Footer = ({getActiveItems, getCompletedItems, getAllItems, clearCompletedItems}) => {
    return <div className="footerContainer">
        <div className="buttonsContainer">
            <button className="footerButton" onClick={() => getAllItems()}>All</button>
            <button className="footerButton" onClick={() => getActiveItems()}>Active</button>
            <button className="footerButton" onClick={() => getCompletedItems()}>Completed</button>
        </div>
        <button className={"lastButton delLastButton"} onClick={() => clearCompletedItems()}>Clear completed</button>
    </div>
}

export default Footer;