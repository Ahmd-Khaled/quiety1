import './App.css';
import Analysis from './components/analysis/Analysis';
import Footer from './components/Footer/Footer';
import Header from './components/header/Header';
import Integration from './components/integration/Integration';
import Navbar from './components/navbar/Navbar';
import Process from './components/process/Process';
import Services from './components/services/Services';
import Support from './components/Support/Support';
import Testimonial from './components/testimonial/Testimonial';
import Values from './components/values/Values';
import Works from './components/works/Works';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Works />
      <Values />
      <Analysis />
      <Services />
      <Process />
      <Integration />
      <Testimonial />
      <Support />
      <Footer />
    </div>
  );
}

export default App;
