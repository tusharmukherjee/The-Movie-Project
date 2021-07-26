import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Content from '../Movies/Content';
import Loading from '../Loading';

const SearchList = () => {

    const [loading, setLoading] = useState(false)
    let changeUrl = useParams();
    const [searchedArray, setSearchedArray] = useState([]);
    

    useEffect(() => {

        async function searchList(){
            setLoading(true);
            const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=ca4f0e06f77f6da6442d2c72a619303b&language=en-US&query=${changeUrl.search}&page=1&include_adult=false`);
            const movieDataList = await res.json();
            setSearchedArray(movieDataList.results);
            setLoading(false);
        }

        searchList();
    }, [changeUrl.search]);




    return (
        <section className="content-head">
            {(loading)
        ?
        
        (<Loading/>)
            
        :
        (<></>)
        }
        <div className="grid">
            {searchedArray.map((curElem) => (
                <Content curElem = {curElem} key ={curElem.id}/>
            ))}
        </div>
        </section>
    )
}

export default SearchList
