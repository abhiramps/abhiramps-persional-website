import './App.css';
import Profile from './portfolioContainer/Home/Profile';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AboutMe from './portfolioContainer/AboutME/AboutMe';
import ContactMe from './portfolioContainer/ContactMe/ContactMe';
import Resume from './portfolioContainer/Resume/Resume';
import HireMe from './portfolioContainer/HireMe/HireMe'
import NavBar from './portfolioContainer/NavBar/NavBar';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <NavBar></NavBar>
            <Profile></Profile>
          </Route>
          <Route exact path='/profile'>
            <NavBar></NavBar>
            <Profile></Profile>
          </Route>
          <Route exact path='/about'>
            <NavBar></NavBar>
            <AboutMe></AboutMe>
          </Route>
          <Route exact path='/contact'>
            <NavBar></NavBar>
            <ContactMe></ContactMe>
          </Route>
          <Route exact path='/resume'>
            <NavBar></NavBar>
            <Resume></Resume>
          </Route>
          <Route exact path='/hireme'>
            {/* <NavBar></NavBar> */}
            <HireMe></HireMe>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
