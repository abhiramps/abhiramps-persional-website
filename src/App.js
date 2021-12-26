import './App.scss';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Main from './components/Main';
import NavBar from './components/NavBar';
import Resume from './components/Resume';


function App() {
  return (
    <div >
      <NavBar />
      <Main />
      <About />
      <Resume />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
