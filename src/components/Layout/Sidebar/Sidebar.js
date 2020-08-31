import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import { faHome, faCalendar, faUser, faDatabase, faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './Sidebar.scss';

const Sidebar = (props) => {

    return (
        <Fragment>
            <div className="sidebar">
                <div className="brand">
                    <img src={require("../../../assets/trns-logo.png")} alt="logo" className="logo" />
                    <p className="brand-name">Gavi</p>
                </div>
                <div className="menu-items">
                    <ul className="sidebar-list-items">
                        <Link to="/dashboard">
                            <li className="sidebar-list-item">

                                <div>
                                    <FontAwesomeIcon icon={faHome} className="link-icon" /><span className="link-text">Dashboard</span>
                                </div>

                            </li>
                        </Link>
                        <Link to="/Charts">
                            <li className="sidebar-list-item" >

                                <div>
                                    <FontAwesomeIcon icon={faCalendar} className="link-icon" /><span className="link-text">Charts</span>
                                </div>

                            </li>
                        </Link>
                        <Link to="/history">
                            <li className="sidebar-list-item">

                                <div>
                                    <FontAwesomeIcon icon={faUser} className="link-icon" /><span className="link-text">History</span>
                                </div>

                            </li>
                        </Link>
                        {/* <li className="sidebar-list-item">
                            <div>
                                <FontAwesomeIcon icon={faDatabase} className="link-icon" /><span className="link-text">link</span>
                            </div>
                        </li>
                        <li className="sidebar-list-item">
                            <div>
                                <FontAwesomeIcon icon={faCircle} className="link-icon" /><span className="link-text">link</span>
                            </div>
                        </li> */}
                    </ul>
                </div>
            </div>
        </Fragment>
    );
}

export default Sidebar;