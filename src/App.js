
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Movie from './Pages/Movie';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Movie" element={<Movie />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
