import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Homee from './componets/home/index';
import NoPage from './coman/404';
import AashtowareProject from './componets/Solutions/aashtowareProject';
import BidExpress from './componets/Products/bidExpress';
import Industry from './componets/Resources/industry';
import Company from './componets/About/company';
import Contact from './componets/Contact';
import Support from './componets/Support';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Homee />} />
          <Route path="/aashtowareProject" element={<AashtowareProject />} />
          <Route path="/bidExpress" element={<BidExpress />} />
          <Route path="/industry" element={<Industry />} />
          <Route path="/company" element={<Company />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/support" element={<Support />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
