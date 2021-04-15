import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return ( 
        <div className="navbar is-primary">
            <div className="navbar-brand">
                <Link to="/" className="navbar-item">
                    <img src="" alt="logo"/>
                </Link>
            </div>
        </div>
     );
}
 
export default Header;