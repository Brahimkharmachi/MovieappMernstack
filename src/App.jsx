import React from 'react'
import"./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Headerss from './Components/Header/Headers';
import Homees from './Components/Home/Homes';
import Footerrs from './Components/Footer/Footers';
import Seriies from './Components/Pages/Serie/Series';


function App() {
  return (
    <Router>
         <Headerss />
        <Switch>
          <Route exact path="/">
            <Homees />
          </Route>
          <Route path="/series">
            <Seriies />
          </Route>
        </Switch>
         <Footerrs />
    </Router>
  )
}

export default App
