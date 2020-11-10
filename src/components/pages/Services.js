import React from 'react'
import '../../App.css'
import '../../styles/Services.css'
import ServicesTable from '../ServicesTable'
export default function Services() {
    return (
    <div>
        <div className='services'>
            <h1>What We Do</h1>
            <p>At TRVL, we excel at helping you get your vacation planned. Not just any vacation, but exceptional vacations filled with inspiring and life-enriching experiences.</p>
        
        </div>
        <ServicesTable/>
    </div>
        )
}