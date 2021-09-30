import './App.css';
import Profile from './portfolioContainer/Home/Profile';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AboutMe from './portfolioContainer/AboutME/AboutMe';
import ContactMe from './portfolioContainer/ContactMe/ContactMe';
import Resume from './portfolioContainer/Resume/Resume';
import HireMe from './portfolioContainer/HireMe/HireMe'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Profile></Profile>
          </Route>
          <Route exact path='/profile'>
            <Profile></Profile>
          </Route>
          <Route exact path='/about'>
            <AboutMe></AboutMe>
          </Route>
          <Route exact path='/contact'>
            <ContactMe></ContactMe>
          </Route>
          <Route exact path='/resume'>
            <Resume></Resume>
          </Route>
          <Route exact path='/hireme'>
            <HireMe></HireMe>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
