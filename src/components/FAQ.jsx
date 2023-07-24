import React from 'react'
import Question from './Question'

export default function FAQ() {
    return (
        <div>
            <h2>Frequently Asked Questions</h2>
            <Question question='What is included in an appointment?'
                      answer='Each appointment includes the private full use of the half acre park. A water bowl and filling station, shaded area, doggie bags and covered trash can, shared toy bin, and 4 chairs and a table for human use are included. On days that the temperature is higher than 80 degrees a child sized wading pool will also be provided in the shaded area. ' />
            <Question question='How do we get there?'
                      answer='Google maps will take you directly to the parking area. The entrance will be about a 30 foot walk on the right and is clearly marked. Please keep your pup on-leash until they have fully entered the enclosed fence.' />
            <Question question='How many other dogs will be there?'
                      answer='Only the dogs that you bring. Our dog park is private, so you can control the exact number of pups that are playing.' />
            <Question question='How many dogs are allowed per appointment?'
                      answer='3 dogs are included in a regular appointment slot. If you are trying to plan a larger event, like a private pup party please reach out to us for more information at BarkPark@gmail.com.' />
            <Question question='My dog is reactive, is this a good location for them?'
                      answer='Yes! Our set up has a separate entrance and exit, and 10 minutes between appointments to make sure your pup can enter and exit without being triggered. A solid 6 foot fence around the play area also helps minimize distractions.' />
        </div>
    )
}