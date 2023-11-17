import { Route, Routes } from 'react-router-dom';
import Main from './Pages/Main';
import Navbar from './components/Navbar';
import Login from './Pages/Login';
import Admin from './Pages/Admin';
import { useState } from 'react';
import PlaceHolder from './Pages/PlaceHolder';
import { ToastProvider } from './ToastProvider';
import Manage from './Pages/Manage';

function App() {
  const [language, setLanguage] = useState(
    localStorage.getItem('lang') ? localStorage.getItem('lang') : 'en'
  );

  return (
    <div
      className={`font-Urbanist pb-20 ${language === 'ar' ? 'direction' : ''} `}
    >
      <ToastProvider>
        <Routes>
          <Route index element={<Login />} />
          <Route
            element={<Navbar setLanguage={setLanguage} language={language} />}
          >
            <Route path="/chalet" element={<Main language={language} />} />
            <Route path="/farm" element={<Main language={language} />} />
            <Route path="/house" element={<Main language={language} />} />
            <Route path="/manage" element={<Manage language={language} />} />
            <Route path="/admin" element={<Admin language={language} />} />
            <Route
              path="/placeholder"
              element={<PlaceHolder language={language} />}
            />
          </Route>
        </Routes>
      </ToastProvider>
    </div>
  );
}

export default App;
