import React from 'react'

export default function Image(props) {
    return (
        <div className={props.location}>
            <img className='img-hero' src={props.src}></img>
        </div>
    )
}