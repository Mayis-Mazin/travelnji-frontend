import React from 'react';
import Map from "./components/map"
import StickyFooter from "./components/contact"
import SlideShow from './components/slideshow'
import Bags from './components/Bags'
import Bottels from './components/Bottels'

import contact from './components/contact'

import { BrowserRouter as Router, Route } from 'react-router-dom'
import ButtonAppBar from './components/MenuAppBar'
import MenuAppBar from './components/MenuAppBar';
import GridContainer from './components/GridContainer';

function App() {
  return (
    <Router>
    
    <div >
    <MenuAppBar/>
    <Route path="/" exact component={Map} />
    <Route path="/Bags" exact component={Bags} />
    <Route path="/Bottels" exact component={Bottels} />
    <Route path="/" exact component={contact} />

    <Route path="/contact" exact component={contact} />
        <Route path="/SlideShow" exact component={SlideShow} />





    </div>
    </Router>

    )
  }


export default App