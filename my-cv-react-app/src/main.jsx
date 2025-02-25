import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import App from './App.jsx';
import Landing from './components/Landing.jsx';
import Preview from './components/Preview.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/first" element={<App />} />
        <Route path="/preview" element={<Preview/>} />
      </Routes>
    </Router>
  </StrictMode>
);
