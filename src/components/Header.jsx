import React from 'react'

export default function Header() {
    return (
        <div>
            <div>
                <h1 className='logotext'>BarkPark</h1>
            </div>
            <nav classname='navbar'>
            <ul>
                <li><a>About Us</a></li>
                <li><a>Schedule Your Visit</a></li>
                <li><a>FAQ</a></li>
            </ul>
         </nav>
        </div>
        
    )
}