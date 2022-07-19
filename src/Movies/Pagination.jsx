import React from 'react'
import { Link } from 'react-router-dom';

const Pagination = ({catName, pgno}) => {

    return (
            <Link to = {`/${catName}/${pgno}`} className="page-box">
                <div >{pgno}</div>
            </Link> 
            )
    }

export default Pagination
