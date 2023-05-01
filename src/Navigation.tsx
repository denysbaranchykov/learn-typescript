import React from 'react';
import {Link} from "react-router-dom";

const Navigation = () => {
    return (
        <div style={{height: 50, width: '100vw',
            background: 'yellow'}}>
            <nav>
                <span> React 2023</span>
                <span>
                <Link to='/' style={{margin: 20}}> Products </Link>
                <Link to='/about'> About </Link>
                </span>

            </nav>
        </div>
    );
};

export default Navigation;