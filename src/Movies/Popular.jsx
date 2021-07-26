import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Content from './Content';
import Pagination from './Pagination';
import PrevNext from './PrevNext';
import Loading from '../Loading';


const Popular = () => {
    let change = useParams();


    const [popularData, setPopularData] = useState([]);

    const [tPage, setTotalPage] = useState([]);
    const [loading, setLoading] = useState(false);


    useEffect(() => {

            setLoading(true);
            const getPopData =  async () => {
            
            let totalPage = 0;
            

            const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.React_App_API_KEY}&language=en-US&page=${change.numberpage}`);
            const popularData = await res.json();
    
            if(popularData.total_results > 200){
                totalPage = 10;
            }
            else{
                let maxPage = Math.floor(popularData.total_results/20);
                let minPage = popularData.total_results - (maxPage*20);
                (minPage > 0) ? (totalPage = maxPage + 1) : (totalPage = maxPage)
            }
    
            let ar = [];
            
            for(let i = 1; i <= totalPage; i++){
            ar.push(i);
            }
    
            setTotalPage(ar);
    
            setPopularData(popularData.results);
            setPopularData(prevObj => prevObj);

            setLoading(false);
            
        }
        
        getPopData();
    }, [change.numberpage]);

    return (
        <>
        <section className="content-head">
        {(loading)

        ?
        
        (<Loading/>)

        :
        
        (<></>)
        }
        <div className="grid">
            {popularData.map((curElem) => (
                <>
                    <Content curElem = {curElem} key={curElem.id}/>
                </>
            ))}
        </div>
        <div className="pagin-container" >
            {(window.screen.width < 650)? (
                <PrevNext catName={"popular"}/>
            ):(
                tPage.map((value, index) => (
                    <Pagination catName={"popular"} key={index}  pgno = {value} />
                ))
            )}
                
        </div>
        </section>
</>

    )
}


export default Popular
