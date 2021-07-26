import React, {useState, useEffect} from 'react'
import Content from './Content';
import { useParams } from 'react-router-dom';
import Pagination from './Pagination';
import PrevNext from './PrevNext';
import Loading from '../Loading';

const TopRated = () => {
    let change = useParams();
    const [trItem, setTRItem] = useState([]);
    const [tPage, setTotalPage] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        setLoading(true);
        

        const getComicData =  async () => {

            let totalPage = 0;

            const res = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.React_App_API_KEY}&language=en-US&page=${change.numberpage}`);
            const comicData = await res.json();
    
            if(comicData.total_results > 200){
                totalPage = 10;
            }
            else{
                let maxPage = Math.floor(comicData.total_results/20);
                let minPage = comicData.total_results - (maxPage*20);
                (minPage > 0) ? (totalPage = maxPage + 1) : (totalPage = maxPage)
            }
    
            let ar = [];
                
            for(let i = 1; i <= totalPage; i++){
            ar.push(i);
            }
    
            setTotalPage(ar);
    
            setTRItem(comicData.results);
            setTRItem(prevObj => prevObj);

            setLoading(false);
            
        }

        getComicData();
    },[ change.numberpage]);

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
            {
            trItem.map((curElem) => (
                <Content curElem = {curElem} key ={curElem.id}/>
            ))
            }
        </div>
        <div className="pagin-container" >
        {(window.screen.width < 650)? (
                <PrevNext catName={"toprated"}/>
            ):(
                tPage.map((value, index) => (
                    <Pagination catName={"toprated"} key={index + 1}  pgno = {value} />
                ))
            )}
        </div>
        </section>
            
        </>
    )
}

export default TopRated
