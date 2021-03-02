import React from 'react'
import {BrowserRouter,Route,Switch,Redirect} from 'react-router-dom';
import LandingPage from './Component/LandingPage';
import CForm from './Component/CForm';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LandingPage}/>
        <Route path="/form" exact component={CForm}/>
        <Redirect from='/form' to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
