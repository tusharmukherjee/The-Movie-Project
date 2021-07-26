import React from 'react';
import { Link } from 'react-router-dom';

const Content = ({curElem}) => {

    const imgApi = "https://image.tmdb.org/t/p/w500";

    return (
        <>
            <div className="hover-effect">
                <img src={imgApi + curElem.poster_path} alt={curElem.original_title} className="poster" loading="lazy"/>
                <div className="hover-text">
                    <h3 className="heading">{curElem.original_title}<br/>
                        <span className="rating"><i className="fas fa-star"></i>{" " + curElem.vote_average}</span> 
                        <span className="rating2"><i className="fas fa-user"></i>{" " + curElem.vote_count}</span>
                    </h3>
                    {(curElem.overview.length > 80) ? (<p className="description">{curElem.overview.slice(0,80) + "..."}</p>) : (<p className="description">{curElem.overview + "..."}</p>)}
                    <Link to={`/description/${curElem.id}`}>
                    <button className="read-more">Read More</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Content
