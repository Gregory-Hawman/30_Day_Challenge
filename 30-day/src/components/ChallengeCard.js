import React from 'react';
import moment from 'moment.js'


const ChallengeCard = (props) => {
    return (
        <div>
            <h1>`{props.duration} Day {props.title} Challenge`</h1>
            <div>
                <p>Day</p>
                <p>Date</p>
                <p>Complete</p>
                <p>Notes</p>
            </div>
            <div>

            </div>
        </div>
    )
}