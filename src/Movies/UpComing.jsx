import React, {useState, useEffect} from 'react';
import Content from './Content';
import { useParams } from 'react-router-dom';
import Pagination from './Pagination';
import PrevNext from './PrevNext';
import Loading from '../Loading';

const UpComing = () => {
    let change = useParams();
    const [ucItem, setUCItem] = useState([]);
    const [tPage, setTotalPage] = useState([]);
    const [loading, setLoading] = useState(false);
 

    useEffect(() => {

        setLoading(true);

        const getUpComeData =  async () => {

            let totalPage = 0;
        
            const res = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.React_App_API_KEY}&language=en-US&page=${change.numberpage}`);
            const UCData = await res.json();
    
            if(UCData.total_results > 200){
                totalPage = 10;
            }
            else{
                let maxPage = Math.floor(UCData.total_results/20);
                let minPage = UCData.total_results - (maxPage*20);
                (minPage > 0) ? (totalPage = maxPage + 1) : (totalPage = maxPage)
            }
    
            let ar = [];
                
            for(let i = 1; i <= totalPage; i++){
            ar.push(i);
            }
            setTotalPage(ar);
    
            setUCItem(UCData.results);
            setUCItem(prevObj => prevObj);

            setLoading(false);
            
        }

        getUpComeData();
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
            {ucItem.map((curElem) => (
                <Content curElem = {curElem} key ={curElem.id}/>
            ))}
        </div>
        <div className="pagin-container" >
        {(window.screen.width < 650)? (
                <PrevNext catName={"upcoming"}/>
            ):(
                tPage.map((value, index) => (
                    <Pagination catName={"upcoming"} key={index + 1}  pgno = {value} />
                ))
            )}
        </div>
        </section>
        </>
    )
}

export default UpComing
