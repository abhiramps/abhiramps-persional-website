import './App.scss';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Main from './components/Main';
import NavBar from './components/NavBar';
import Resume from './components/Resume';
import Works from './components/Works';



function App() {
  return (
   <>
      <NavBar />
      <Main />
      <About />
      <Resume />
      <Works/>
      <Contact />
      <Footer />

   </>
  );
}

export default App;
