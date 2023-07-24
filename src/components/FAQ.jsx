import React from 'react'
import Question from './Question'

export default function FAQ() {
    return (
        <div>
            <h2>Frequently Asked Questions</h2>
            <Question question='what'
                      answer='here it is' />
            <Question question='2'
                      answer='also it is' />
        </div>
    )
}