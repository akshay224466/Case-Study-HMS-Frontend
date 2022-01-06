import React from 'react'
import './SidebarOption.css'


function SidebarOption({Icon ,title }) {
    return (
        <div className='sidebar__option'>
            <Icon></Icon>
            <span>{title}</span>
        </div>
    )
}

export default SidebarOption
