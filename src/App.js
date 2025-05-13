import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Homepage from './components/Homepage/Homepage';
import KnowUs from './components/KnowUs';
import Connect from './components/Connect';
import Events from './components/Events';
import Dream from './components/Dream';

function App() {
  // Set basename based on environment
  // In development, serve from root. In production, use the subdirectory.
  const basename = process.env.NODE_ENV === 'production' ? '/smokey-dreamz' : '/';

  return (
    <BrowserRouter basename={basename}>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/know-us" element={<KnowUs />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="/events" element={<Events />} />
          <Route path="/dream" element={<Dream />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
