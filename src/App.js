import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Popular from "./Movies/Popular";
import Nav from "./Movies/Nav";
import Home from "./Movies/Home";
import UpComing from "./Movies/UpComing";
import TopRated from "./Movies/TopRated";
import MoreInfo from "./Movies/MoreInfo";
import SearchList from "./SearchComp/SearchList";
import Footer from "./Movies/Footer";

import "./styles/footer.css";
import "./styles/home.css";
import "./styles/hovercard.css";
import "./styles/hovercardres.css";
import "./styles/loadingstyle.css";
import "./styles/nav.css";
import "./styles/PaginationUi.css";
import "./styles/readmore.css";
import "./styles/sidebar.css";

function App() {

  return (
    <Router>
      <>
      <Nav />
      <Switch>
        <Route exact path ="/" component={Home}/>
        <Route exact path = "/description/:id" component={MoreInfo}/>
        <Route exact path = "/info/:search" component={SearchList}/>
        <Route exact path = "/popular/:numberpage" component={Popular}/>
        <Route exact path ="/upcoming/:numberpage" component={UpComing}/>
        <Route exact path ="/toprated/:numberpage" component={TopRated}/>
      </Switch>
      <Footer/>
      </>
    </Router>
  );
}

export default App;
