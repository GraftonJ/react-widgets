import React, { useState, useEffect, useRef } from 'react'

const Dropdown = ({ options, label, selected, onSelectedChange }) => {
    const [open, setOpen] = useState(false)
    const ref = useRef();

    useEffect(() => {
        document.body.addEventListener('click', (event) => {
            console.log('BODY event', event);
            if (ref.current.contains(event.target)) {
                console.log('Contains ref, returning early');
                return
            }
            setOpen(false)
        },
        { capture: true }
        )
    }, []);
    const renderOptions = options.map(option => {
        if(option.value === selected.value) {
            return null;
        }
        return (
            <div
                key={option.value}
                className="item"
                onClick={() => {
                    onSelectedChange(option)
                }}
            >
                {option.label}
            </div>
        )
    })
    
    return (
        <div ref={ref} className="ui form">
            <div className="field">
                <label className="label">{label}</label>
                <div
                className={`ui selection dropdown ${open ? 'visible active' : ''}`}
                onClick={(e) => {
                    console.log('Clicked Item. OPEN: ', open);
                    setOpen(!open)
                }}
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