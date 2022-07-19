import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';



const Home = () => {
    const [poster, setPoster] = useState();
    const [backdrop, setBackdrop] = useState();

    const [prevPop, setPrevPop] = useState([]);
    const [prevTop, setPrevTop] = useState([]);
    const [prevUC, setPrevUC] = useState([]);
    const [tdData, setTdData] = useState([]);


    

    useEffect(() => {

        console.log(process.env);

        const getTrendData =  async () => {

            
            const res = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.React_App_API_KEY}`);
            const trendData = await res.json();



            const resPop = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.React_App_API_KEY}&language=en-US&page=1`);
            const popularData = await resPop.json();

            const resTop = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.React_App_API_KEY}&language=en-US&page=1`);
            const topData = await resTop.json();

            const resUC = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.React_App_API_KEY}&language=en-US&page=1`);
            const UCData = await resUC.json();


        
            let test = [];
            test.push(trendData.results[Math.floor(Math.random() * 19)]);

        
            setTdData(test[0]);
            setPrevPop(popularData.results);
            setPrevTop(topData.results)
            setPrevUC(UCData.results)
            
            setPoster(test[0].poster_path);
            setBackdrop(test[0].backdrop_path)

    
        }
        getTrendData();       
    }, [])


    return (
        <div className="home">
        <div className="head-center">
            <h1 className="heading-home">{tdData.original_title}</h1>
        </div>
        <div className="frame">
            {(window.screen.width <= 600) ? (<img className="image-home" src={`https://image.tmdb.org/t/p/w500${poster}` } alt="back-img"  loading="lazy"/>) : (<img className="image-home" src={`https://image.tmdb.org/t/p/w1280${backdrop}` } alt="back-img"  loading="lazy"/>)}
        </div>
        <section className="disp-cont">
            <div className="disp-head">
                <div className="sub-head"> Popular Movies</div>
                    <div className="sub-head"><Link to="/popular/1" className="seoul">See All&nbsp;<i className="fas fa-angle-right"></i></Link></div>
                </div>
            <div className="mov-content">
                {prevPop.map((value, index) =>
                    <Link to={`/description/${value.id}`} key={index}>
                        <img className="movies" src={`https://image.tmdb.org/t/p/w300${value.poster_path}`} alt={value.original_title} loading="lazy"/>
                    </Link>
                )}
            </div>
        </section>

        <section className="disp-cont">
            <div className="disp-head less-marg">
                <div className="sub-head"> Top Rated Movies</div>
                    <div className="sub-head"><Link to = "/toprated/1" className="seoul">See All&nbsp;<i className="fas fa-angle-right"></i></Link></div>
                </div>
            <div className="mov-content less-marg">
                {prevTop.map((value, index) =>
                    <Link to={`/description/${value.id}`} key={index}>
                        <img className="movies" src={`https://image.tmdb.org/t/p/w300${value.poster_path}`} alt={value.original_title} loading="lazy"/>
                    </Link>
                )}
            </div>
        </section>
        
        <section className="disp-cont">
            <div className="disp-head less-marg">
                <div className="sub-head"> Up Coming Movies</div>
                <div className="sub-head"><Link to = "/upcoming/1" className="seoul">See All&nbsp;<i className="fas fa-angle-right"></i></Link></div>
            </div>
            <div className="mov-content last-marg">
                {prevUC.map((value, index) =>
                <Link to={`/description/${value.id}`} key={index}>
                    <img className="movies" src={`https://image.tmdb.org/t/p/w300${value.poster_path}`} alt={value.original_title} loading="lazy"/>
                </Link>
                )}
            </div>
        </section>
        {/* <Footer/> */}
        </div>
    )
}

export default Home
