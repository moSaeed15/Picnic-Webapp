import { Route, Routes } from 'react-router-dom';
import Main from './Pages/Main';
import Navbar from './components/Navbar';
import Login from './Pages/Login';
import Admin from './Pages/Admin';
function App() {
  return (
    <div className="font-Urbanist pb-20">
      <Routes>
        <Route index element={<Login />} />
        <Route element={<Navbar />}>
          <Route path="/chalet" element={<Main />} />
          <Route path="/farm" element={<Main />} />
          <Route path="/house" element={<Main />} />
          <Route path="/admin" element={<Admin />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
