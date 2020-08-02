import React from "react";
import './app.css';
import Header from "../header";
import BeerPage from "../beer-page";
import { Route, Switch } from 'react-router-dom'
import RandBeerPage from "../rand-beer-page";


const App = () => {
    return(

        <div className='app'>
            <Header/>
            <Switch>
                <Route path='/rand' component={RandBeerPage}/>
                <Route path='/' component={BeerPage} exact/>
            </Switch>
        </div>
    )
}

export default App;