import React, { Fragment, useState } from 'react';

import { faUser, faSignOutAlt, faBuilding, faHeadset, faSearch  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Tile from './Tile/Tile';

import './Tiles.scss';

const Tiles = ({data}) => {

    return (
        <Fragment>
            <div className="tiles">
                {
                    data.map(item => {
                        return <Tile key={item.id} data={item} />
                    })
                }
            </div>
        </Fragment>
    );
}

export default Tiles;