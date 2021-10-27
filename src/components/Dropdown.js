import React, { useState, useEffect } from 'react'

const Dropdown = ({ options, label, selected, onSelectedChange }) => {
    const [open, setOpen] = useState(false)
    const renderOptions = options.map(option => {
        if(option.value === selected.value) {
            return null;
        }
        return (
            <div
                key={option.value}
                className="item"
                onClick={() => onSelectedChange(option)}
            >
                {option.label}
            </div>
        )
    })
    return (
        <div className="ui form">
            <div className="field">
                <label className="label">{label}</label>
                <div
                className={`ui selection dropdown ${open ? 'visible active' : ''}`}
                onClick={() => setOpen(!open)}
                >
                    <i className="dropdown icon" />
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${open ? 'visible transition' : ''}`}>
                        {renderOptions}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dropdown;