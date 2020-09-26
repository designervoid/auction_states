import React from 'react'
import './DropdownMenu.css'

export default function DropdownMenu(props) {
    const actions = props.actions
    const hook = props.hook
    const dropdownContent = actions.map((el) =>
        <div onClick={() => hook(el.state)}>{el.action}</div>
    );
    return (
        <div className="dropdown">
            <button className="dropbtn">{props.text}</button>
            <div className="dropdown-content">
                {dropdownContent}
            </div>
        </div>
    )
}