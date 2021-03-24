import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ChallengeCard from './ChallengeCard';

const testState = {}

const ChallengeLists = () => {
    const [challenges, setChallenges] = useState([])

    return (
        <div className='challenge'>
            {challenges.map((challenge, index) => {
                return (
                    <ChallengeCard 
                    key={index}
                    title={challenge.title}
                    duration={challenge.duration}
                    start_date={challenge.start_date}

                    />
                )
            })}
        </div>
    )
}