import React from "react";
import { Route, Switch } from 'react-router-dom';

import { NavBar } from './navbar';
import Home from './pages/home';
import NewFeed from './pages/newFeeds';
// import AboutMe from './pages/aboutMe';
// import Contact from './pages/contact';
import CatsGallery from './pages/catsGallery';
import Community from './pages/community';

export const Routes = () => {
    return (
        <div>
            <Switch>
                {/* <Route exact path='/' component={Home}/> */}
                <Route exact path='/' component={NewFeed}/>
                <Route exact path='/community' component={Community}/>
                {/* <Route exact path='/aboutme' component={AboutMe} /> */}
                {/* <Route exact path='/contact' component={Contact} /> */}
                <Route exact path='/catsGallery' component={CatsGallery}/>
            </Switch>
        </div>
    )
}