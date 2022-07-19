import React from 'react';
import { Link, useParams } from 'react-router-dom';
const PrevNext = ({catName}) => {

    let change = useParams();

    const prevCondition = parseInt(change.numberpage) >=2  && parseInt(change.numberpage)<=10;
    const nextCondition = parseInt(change.numberpage) >=1  && parseInt(change.numberpage)<=9;

    return (
        <>
            {(prevCondition) ? (<Link to = {`/${catName}/${parseInt(change.numberpage) - 1}`}>
                <button className="nav-page" id = "border-right">Previous &nbsp;{change.numberpage}</button> 
            </Link>) : 
                <button className="nav-page disabled" id = "border-right" disabled>Previous&nbsp;{change.numberpage}</button> 
            }
            
            
            {(nextCondition) ? (<Link to = {`/${catName}/${parseInt(change.numberpage) + 1}`}>
                <button className="nav-page"   id = "border-left">Next &nbsp;{change.numberpage}</button> 
            </Link>): 
                <button className="nav-page disabled" id = "border-left" disabled  >Next &nbsp;{change.numberpage}</button> 
            }
        </>
    )
}

export default PrevNext
