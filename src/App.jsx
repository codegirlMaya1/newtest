import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import SearchComponent from './components/SearchComponent';
import './index.css'; 

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/search" element={<SearchComponent />} />
        <Route path="/" element={<h1>Welcome to the App</h1>} />
      </Routes>
    </Router>
  );
};

export default App;