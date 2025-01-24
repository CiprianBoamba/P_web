import { BrowserRouter } from 'react-router-dom';
import { Hero } from './components';
// import Hero from './components/Hero';

import './App.css';
import './index.css';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Hero />
        </div>
        about
        <div className="relative z-0">contact</div>
      </div>
    </BrowserRouter>
  );
};

export default App;
