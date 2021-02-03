import React, { useState } from 'react'
import Footer from "./Footer";
import SelectSection from "./SelectSection";
import './App.css';

const App = () => {
    const [inputValue, setInputValue] = useState("");
    const [selectSectionCount, setSelectSectionCount] = useState([]);

    const setRadioCheckedFunc = (index) => {
        if (selectSectionCount.length) {
           const newList = [...selectSectionCount];
            newList[index].checked = !newList[index].checked;
            localStorage.setItem('newList', JSON.stringify(newList))
            setSelectSectionCount(newList);
        }
    }

    const buttonEnter = () => {
        if (inputValue) {
            const newItem = selectSectionCount.concat([{
                value: inputValue,
                checked: false
            }])
            localStorage.setItem('newItem', JSON.stringify(newItem))
            localStorage.setItem('newList', JSON.stringify(newItem))
            setSelectSectionCount(newItem)
            setInputValue("")
        }
    }

    const clearCompletedItems = () => {
        if(selectSectionCount) {
            const activeItems =  JSON.parse(localStorage.getItem('newList'));
            const activeItem = activeItems.filter(item => item.checked === false);
            localStorage.setItem('newList', JSON.stringify(activeItem))
            setSelectSectionCount(activeItem);
        }
    }

    const getCompletedItems = () => {
        if(selectSectionCount) {
            const completedItems = JSON.parse(localStorage.getItem('newList'));
            const completedItem = completedItems.filter(item => item.checked === true)
            setSelectSectionCount(completedItem);
        }
    }

    const getActiveItems = () => {
        if(selectSectionCount) {
            const activeItems =  JSON.parse(localStorage.getItem('newList'));
            const activeItem = activeItems.filter(item => item.checked === false)
            setSelectSectionCount(activeItem);
        }
    }

    const getAllItems = () => {
        const allItems = localStorage.getItem('newList')
        setSelectSectionCount(JSON.parse(allItems))
    }



    return (
        <div  className="body">
            <div className="container">
                <h1 className="title">todos</h1>
                <div className="header">

                    <form action="" className="inputForm">
                        <input
                            type="text"
                            placeholder="What needs to be done?"
                            className="todoInput"
                            value={inputValue}
                            onChange={(e) => {setInputValue(e.target.value)}}
                        />
                    </form>
                    <button className="enterButton" onClick={() => buttonEnter()}>Enter</button>
                </div>
                {
                    selectSectionCount?.map((item, index) => {
                        return  <SelectSection item={item} index={index} setRadioCheckedFunc={setRadioCheckedFunc} key={index}/>
                    })
                }
                <Footer getActiveItems={getActiveItems} getCompletedItems={getCompletedItems} getAllItems={getAllItems} clearCompletedItems={clearCompletedItems}/>
            </div>
        </div>
    );
}

export default App;
