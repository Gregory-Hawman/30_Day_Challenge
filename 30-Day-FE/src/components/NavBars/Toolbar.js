import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Dropdown from './Dropdown'
import { ToolbarItems, GuestItems, UserItems } from './HeaderItems'

const Toolbar = () => {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => {
        setClick(!click)
    }
    
    // {item.title === 'Challenges' ? `${item.title} ${<i className='fas fa-caret-down' />}` : item.title}

    return (
        <div className='toolbar'>
            {ToolbarItems.map((item, index) => {
                return (
                    <div key={index}>
                        <Link
                            className={item.className}
                            to={item.path}
                        >
                            {item.title}
                        </Link>
                    </div>
                )
            })}
        </div>
    )
};

const GuestToolbar = () => {

    return (
        <div className='toolbar'>
            {GuestItems.map((item, index) => {
                return (
                    <div key={index}>
                        <Link
                            className={item.className}
                            to={item.path}
                        >
                            {item.title}
                        </Link>
                    </div>
                )
            })}
        </div>
    )
};

const UserToolbar = () => {

    return (
        <div className='toolbar'>
            <div className='toolbarButtons'>
                <Link to='/updates'>Updates</Link>
                <Link to='/your_challenges'>Your Challenges</Link>
                <Link to='/up_next'>Up Next</Link>
                <Link to='/likes'>Likes</Link>
                <Link to='/network'>Network</Link>
            </div>
        </div>
    )
};

export { Toolbar, GuestToolbar, UserToolbar };