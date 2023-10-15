import { Route, Routes } from 'react-router-dom';
import Main from './Pages/Main';
import Navbar from './components/Navbar';
import Login from './Pages/Login';
import Admin from './Pages/Admin';
import { useState } from 'react';
import PlaceHolder from './Pages/PlaceHolder';
function App() {
  const [language, setLanguage] = useState();
  const [unApprovedUnits, setUnApprovedUnits] = useState();

  return (
    <div
      className={`font-Urbanist pb-20 ${
        language === 'araic' ? 'direction' : ''
      }`}
    >
      <Routes>
        <Route index element={<Login />} />
        <Route
          element={
            <Navbar
              unApprovedUnits={unApprovedUnits}
              setLanguage={setLanguage}
            />
          }
        >
          <Route path="/chalet" element={<Main language={language} />} />
          <Route path="/farm" element={<Main language={language} />} />
          <Route path="/house" element={<Main language={language} />} />
          <Route
            path="/admin"
            element={
              <Admin
                language={language}
                setUnApprovedUnits={setUnApprovedUnits}
              />
            }
          />
          <Route path="/placeholder" element={<PlaceHolder />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
