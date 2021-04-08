import React from 'react';

const Toolbar = () => {

    return (
        <div className='toolbar'>
            <div className='toolbarButtons'>
                <button>Home</button>
                <button>Profile</button>
                <button>Challenges</button>
                <button>Members</button>
                <button>Add A Challenge</button>
            </div>
        </div>
    )
};

const GuestToolbar = () => {

    return (
        <div className='toolbar'>
            <div className='toolbarButtons'>
                <button>Sign In</button>
                <button>Create Account</button>
                <button>Challenges</button>
                <button>Members</button>
            </div>
        </div>
    )
};

const UserToolbar = () => {

    return (
        <div className='toolbar'>
            <div className='toolbarButtons'>
                <button>Updates</button>
                <button>Your Challenges</button>
                <button>Up Next</button>
                <button>Likes</button>
                <button>Network</button>
            </div>
        </div>
    )
};

export { Toolbar, GuestToolbar, UserToolbar };