import React from 'react'
import ScheduleButton from './ScheduleButton'

export default function Header() {
    return (
        <div>
            <div>
                <h1 className='logotext'>BarkPark</h1>
            </div>
            <nav classname='navbar'>
            <ul>
                <li><a>About Us</a></li>
                <li><ScheduleButton /></li>
                <li><a>FAQ</a></li>
            </ul>
         </nav>
        </div>
        
    )
}