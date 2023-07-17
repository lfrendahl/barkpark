import React from 'react'
import CustomScheduleButton from './CustomScheduleButton'

export default function Header() {
    return (
        <div>
            <nav classname='navbar'>
                <div className='nav-left'>
                    <h1 className='logotext'>BarkPark</h1>
                </div>
                <ul className='nav-right'>
                    <li><a>About Us</a></li>
                    <li><a>FAQ</a></li>
                    <li><CustomScheduleButton /></li>
                </ul>
         </nav>
        </div>
        
    )
}