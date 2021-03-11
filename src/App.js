import React from 'react'
import {BrowserRouter,Route,Switch,Redirect} from 'react-router-dom';
import LandingPage from './Component/LandingPage';
import CForm from './Component/CForm';
import Details from './Component/Details';
import NoMatch from './Component/NoMatch';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LandingPage}/>
        <Route path="/form" exact component={CForm}/>
        <Route path="/details/:id"  component={Details}/>
        <Redirect from='/form' to="/" />
        <Route component={NoMatch} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
