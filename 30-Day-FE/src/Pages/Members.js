import React from 'react';

function Members() {

    return (
        <div>
            <h1>Members</h1>
            <form>
                <button type='submit'>Search</button>
                <input 
                    type='text'
                    name='search'
                    placeholder="Enter a memeber's username"
                />
            </form>
        </div>
    )
};

export default Members;