import React, { useState } from "react";
import { HC_ChallengeCard30, HC_ChallengeCard60 } from '../components/HC_ChallengeCard'
import WelcomeBack from '../components/WelcomeBack';

function Dashboard() {
    return (
        <div>
            <h1>Your Daily Challenges </h1>
            <WelcomeBack />

            <div className='allCards'>
            <HC_ChallengeCard30 />
            <HC_ChallengeCard60 />
            </div>
        </div>
    )
}

export default Dashboard;