import React, { Fragment, useState } from 'react';

import { faUser, faEdit, faTimes, faEye  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './Tile.scss';

const Tile = (props) => {

    return (
        <Fragment>
            <div className="tile">
                <section className="tile-left-section">
                    <div className="icon"><FontAwesomeIcon icon={faUser} /></div>
                    <p>Right Section</p>
                </section>
                <section className="tile-body">
                    <div className="tile-header">
                        <div className="header-text">Tile Header</div>
                        <div className="header-actions">
                            <FontAwesomeIcon icon={faEye} />
                            <FontAwesomeIcon icon={faEdit} />
                            <FontAwesomeIcon icon={faTimes} />
                        </div>
                    </div>
                    <div className="tile-content">Main Content</div>
                    <div className="tile-footer">Tile Footer</div>
                </section>
            </div>
        </Fragment>
    );
}

export default Tile;