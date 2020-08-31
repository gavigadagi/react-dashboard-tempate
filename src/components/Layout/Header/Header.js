import React, { Fragment, useState } from 'react';

import { faUser, faSignOutAlt, faBuilding, faHeadset, faSearch  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './Header.scss';

const Header = (props) => {

    const [showDropdown, setShowDropdown] = useState(false);

    const onProfileClick = () => {
        setShowDropdown(!showDropdown)
    }

    return (
        <Fragment>
            <header className="header">
                <div className="right-menu">
                    <form>
                        <FontAwesomeIcon icon={faSearch} />
                        <input type="search" placeholder="Search" />
                    </form>
                </div>

                <div className="avatar" onClick={onProfileClick} >
                    <img src={require("../../../assets/profile.png")} alt="profile" className="profile" />
                    <div className={`profile-overlay ${ !showDropdown ? 'hide' : ''}`}>
                        <div className="item"><FontAwesomeIcon icon={faUser} />Account</div>
                        <div className="item"><FontAwesomeIcon icon={faBuilding} />Organization</div>
                        <div className="item"><FontAwesomeIcon icon={faHeadset} />Support</div>
                        <div className="item"><FontAwesomeIcon icon={faSignOutAlt} />Logout</div>
                    </div>
                </div>

            </header>
        </Fragment>
    );
}

export default Header;