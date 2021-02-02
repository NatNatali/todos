import React, {useState} from 'react'
import './App.css';

const SelectSection = ({setRadioCheckedFunc, item, index}) => {
    const [xButtonVisibility, setXButtonVisibility] = useState(false);
    return <div className="selectDiv"
        onMouseEnter={() => {
            setXButtonVisibility(true);
        }}
        onMouseLeave={() => {
            setXButtonVisibility(false)
        }}
    >
        <input type="radio" className="checkbox" checked={item.checked} readOnly onClick={() => setRadioCheckedFunc(index)}/>
        <label htmlFor="" className={!item.checked ? "checkboxLabel" : "delCheckboxLabel"} >{item.value}</label>
        <button className={!xButtonVisibility ? "xButton" : "xButtonHover"}>X</button>
    </div>
}

export default SelectSection;
