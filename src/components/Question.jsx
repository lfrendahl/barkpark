import React from 'react'

export default function Question(props) {
    return (
        <>
        <h2>{props.question}</h2>
        <h3>{props.answer}</h3>
        </>
    )
}