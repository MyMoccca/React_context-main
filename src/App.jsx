import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProverbsPage from '../components/ProverbsPage';
import SettingsPage from '../components/SettingsPage';
import { LanguagesContextProvider } from '../contexts/LanguagesContext';

function App() {
  //To be instanciate in the languageContext that you should do

  return (
    <LanguagesContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<ProverbsPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </Router>
    </LanguagesContextProvider>
  );
}

export default App;
