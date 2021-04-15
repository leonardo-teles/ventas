import React from 'react'

import Header from './Header';
import Menu from './Menu';

const Layout = () => {
    return ( 
        <>  
            <Header /> 
            <div className="container">
                <div className="columns">
                    <div className="column is-one-quarter">
                        <Menu />
                    </div>
                    <div className="column">
                    </div>
                </div>
            </div>

        </>
     );
}
 
export default Layout;