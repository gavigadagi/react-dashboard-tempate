import React, { Fragment, useState, useEffect } from 'react';

import { faUser, faSignOutAlt, faBuilding, faHeadset, faSearch  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Tiles from './../../Shared/Tiles/Tiles';

import './History.scss';

const History = (props) => {

    const [data, setData] = useState([
        {
            id: 1,
        },
        {
            id: 2,
        },
        {
            id: 3,
        },
        {
            id: 4,
        },
        {
            id: 5,
        },
        {
            id: 6,
        }
    ]);
    return (
        <Fragment>
            <h1>History Page</h1>
            <Tiles data={data} />
        </Fragment>
    );
}

export default History;