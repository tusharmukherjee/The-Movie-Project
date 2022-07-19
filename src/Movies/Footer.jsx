import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <div className="foot-contain" id="contact">
                <div className="source">
                    <h2 className="source-head">Source:</h2>
                    <h1 className="source-head-main"><a href="https://www.themoviedb.org/" className="foot-link movie-db">The Movie DB</a></h1>
                    <div className="copyright">&copy;&nbsp;2023 by <a href="https://www.linkedin.com/in/tusharmkj/" className="foot-link-copy">Tushar Mukherjee</a>. View project on <a href="https://github.com/TusharMukherjee" className="foot-link-copy">Github</a></div>
                </div>
                <div className="link-contain categories">
                    <h2 className="link-head">Categories</h2>

                    <p className="link-p">
                    <Link to="/popular/1" className="foot-link">
                        Popular
                    </Link>
                    </p>
                    <p className="link-p">
                    <Link to="/toprated/1" className="foot-link">
                        Top Rated
                    </Link>
                    </p>
                    <p className="link-p">
                    <Link to="/upcoming/1" className="foot-link">
                        Up Coming
                    </Link>
                    </p>
                </div>
                <div className="link-contain socials">
                    <h2 className="link-head">Socials</h2>
                    <p className="link-p"><a href="https://www.linkedin.com/in/tusharmkj/" className="foot-link">LinkedIn</a></p>
                    <p className="link-p"><a href="https://twitter.com/tushar_mkj" className="foot-link">Twitter</a></p>
                    <p className="link-p"><a href="https://www.instagram.com/tushar.mkj/" className="foot-link">Instagram</a></p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
