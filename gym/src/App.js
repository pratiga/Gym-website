import './App.css';
//import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Programs from './components/programs/programs';
import Reasons from './components/reasons/reasons';
import Plans from './components/Plans/plans';
import Testimonials from './components/Testimonials/Testimonials';
import Join from './components/Join/join'
import Footer from './components/Footer/footer';
function App() {
  return (
    <div className="App">
      <Hero />
      <Programs />
      <Reasons />
      <Plans />
      <Testimonials />
      <Join />
      <Footer/>
      
    </div>
  );
}

export default App;
