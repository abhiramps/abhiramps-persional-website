import './App.css';
import Profile from './portfolioContainer/Home/Profile';
import { BrowserRouter, Route } from 'react-router-dom'
import AboutMe from './portfolioContainer/AboutME/AboutMe';
import ContactMe from './portfolioContainer/ContactMe/ContactMe';
import Resume from './portfolioContainer/Resume/Resume';
import HireMe from './portfolioContainer/HireMe/HireMe'
import Layout from './Layout/Layout';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Route exact path='/' component={Profile}/>
          <Route exact path='/profile' component={Profile}/>
          <Route exact path='/about' component={AboutMe}/>
          <Route exact path='/contact' component={ContactMe}/>
          <Route exact path='/resume' component={Resume}/>
          <Route exact path='/hireme' component={HireMe}/>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
