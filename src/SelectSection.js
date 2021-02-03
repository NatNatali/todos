import React from 'react'
import './App.css';

const SelectSection = ({setRadioCheckedFunc, item, index}) => {
    return <div className="selectDiv">
        <input type="radio" className="checkbox" checked={item.checked} readOnly onClick={() => setRadioCheckedFunc(index)}/>
        <label htmlFor="" className={!item.checked ? "checkboxLabel" : "delCheckboxLabel"} >{item.value}</label>
    </div>
}

export default SelectSection;
