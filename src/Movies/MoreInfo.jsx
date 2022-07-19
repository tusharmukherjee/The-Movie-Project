import React, {useEffect, useState} from 'react';
import Loading from '../Loading';

const MoreInfo = ({match}) => {

    const [getMovieDetails, setGetMovieDetails] = useState([]);
    const [getLink, setGetLink] = useState([]);
    const [loading, setLoading] = useState(false);

    

    useEffect(() => {

        const getMovieData =  async () => {
            setLoading(true);

            

            const res = await fetch(`https://api.themoviedb.org/3/movie/${match.params.id}?api_key=${process.env.React_App_API_KEY}&language=en-US`);
            const data = await res.json();
    
            setGetMovieDetails(data);
            setLoading(false);
            
        }
    
        const getMovieLink =  async () => {
                const res = await fetch(`https://api.themoviedb.org/3/movie/${match.params.id}/videos?api_key=${process.env.React_App_API_KEY}&language=en-US`);
                const movieData = await res.json();
                setGetLink(movieData.results[0]);
        }

        getMovieData();
        getMovieLink();
    }, [match]);

    const imgApi = `https://image.tmdb.org/t/p/w1280${getMovieDetails.backdrop_path}`;
    let backImage;

    if(window.screen.width <= 815){
        backImage = {
            backgroundImage: `url(${imgApi})`
        }
    }
    else{
        backImage = {
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1)), url(${imgApi})`
        }
    }

    return (
        <>
        <div className="back-image" style={backImage}></div>
        <section className="full-info">
            <div className="text-box">
            <div className="upper-box">
                <h1 className="head-read">{getMovieDetails.original_title}</h1>
                <div className="spans">
                    <div className="vote-average"><i className="fas fa-star"></i>&nbsp; {getMovieDetails.vote_average}</div>
                    <div className="duration"><i className="fas fa-clock"></i>&nbsp; {getMovieDetails.runtime} Min.</div>
                    <div className="release-date">{getMovieDetails.release_date}</div><br />
                    {(getLink == null) ? (null) : (<a href={`https://www.youtube.com/watch?v=${getLink.key}`}><button className="trailer">Watch Trailer &nbsp;<i className="fas fa-play"></i></button></a>)}
                    
                </div>
            </div>
            {   (loading)
                ?
        
                (<Loading/>)
            
                :
                (<p className="full-description">{getMovieDetails.overview}</p>)}
            </div>
        </section>
        </>
    )
}

export default MoreInfo
