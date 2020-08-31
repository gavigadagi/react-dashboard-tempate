import React, { Fragment } from 'react';

import './Footer.scss';

const Footer = (props) => {
    return(
        <Fragment>
            <div className="footer">
            {/* <h2>Footer component</h2> */}
            <p className="copyright">&copy; Copyright 2020</p>
            </div>
        </Fragment>
    )
}

export default Footer;

