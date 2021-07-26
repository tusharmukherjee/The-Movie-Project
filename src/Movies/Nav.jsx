import { Link } from "react-router-dom";
import { useState } from "react";

const Nav = () => {

    const [toggle, setToggle] = useState(false);
    const [subToggle, setSubToggle] = useState(false);
    const [optToggle, setOptToggle] = useState(false);
    const [getSearch, setGetSearch] = useState("");

    let navStyle = {};
    let subDrop = {};

    if(toggle && optToggle){
        navStyle = {
            height : '0rem',
            padding : '0rem'
        }
        setOptToggle(false);
        setToggle(false)
    }
    else if(toggle && subToggle && !optToggle){
        navStyle = {
            height : '20rem',
            padding : '20px 0px'
        }
    }
    else if(toggle && !subToggle && !optToggle){
        navStyle = {
            height : '13rem',
            padding : '20px 0px'
        }
    }


    if(subToggle){
        subDrop = {
            display : 'flex',
            flexDirection : 'column'
        }
    }
    else{
        subDrop = {
            display : 'none'
        }
    }

    function getQuery(event){
        setGetSearch(event.target.value);
    }
    
    
    function gotQuery(event){
        event.preventDefault();  
    }


    return (
        <>
        
      {/* ----update---- */}

      <nav>
        <div className="container">
            <Link to="/">
            <div className="logo">TM-Project</div>
            </Link>
            <div className="search-box">
                <form onSubmit={gotQuery}  className="example" spellCheck="false">
                    <input type="text" placeholder="Search Movies..." name="search" value={getSearch} onChange={getQuery} autoComplete="off"/>
                    <Link to = {`/info/${getSearch}`}>
                        <button className="border-btn" type="submit"><i className="fa fa-search"></i></button>
                    </Link>
                    
                </form>
            </div>
            <div className="options">
                <Link to="/">
                <div className="option">Home</div>
                </Link>
                <div className="dropdwn">
                <div className="option projects">Categories</div>
                <div className="dropdwn-content">
                    <Link to = {`/popular/${1}`}>
                    <div>Popular</div>
                    </Link>
                    <Link to ={`/toprated/${1}`}>
                    <div>Top Rated</div>
                    </Link>
                    <Link to={`/upcoming/${1}`}>
                    <div>Up Coming</div>
                    </Link>
                </div>
                </div>
                <div className="option"><a href="#contact" className="option">Contacts</a></div>
            </div>

            <div className = {toggle ? `box cross` : `box`} onClick={() => setToggle(!toggle)}>
                <div className="one"></div>
                <div className="two"></div>
                <div className="three"></div>
            </div>
        </div>
    </nav>

    <div id="mySidenav" className="sidenav" style={navStyle}>
        <div className="search-block">
                <form className="search-b" onSubmit={gotQuery} spellCheck="false">
                    <input type="text" placeholder="Search Movies..." name="search" value={getSearch} onChange={getQuery} autoComplete="off"/>
                    <Link to = {`/info/${getSearch}`}>
                    <button type="submit" onClick={() => setOptToggle(!optToggle)}><i className="fa fa-search"></i></button>
                    </Link>
                </form>
        </div>
        <Link to="/">
        <div className = "a-side" onClick={() => setOptToggle(!optToggle)}>Home</div>
        </Link>
        <div className = "a-side" id="sub-btn" onClick={ () => setSubToggle(!subToggle)}>Categories</div>
        <div id="dropdwn-container" style={subDrop}>
            <Link to="/popular/1">
            <div className="sub-side" onClick={() => setOptToggle(!optToggle)}>Popular</div>
            </Link>
            <Link to = "/toprated/1">
            <div className="sub-side" onClick={() => setOptToggle(!optToggle)}>Top Rated</div>
            </Link>
            <Link to = "/upcoming/1">
            <div className="sub-side" onClick={() => setOptToggle(!optToggle)}>Up Coming</div>
            </Link>
        </div>
        <div className = "a-side" onClick={() => setOptToggle(!optToggle)}><a href="#contact" className = "b-contact">Contacts</a></div>
    </div>
        </>
    )
}

export default Nav
