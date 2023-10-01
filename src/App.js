import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/home';
import Works from './pages/works';
import Contact from './pages/contact';
import Service from './pages/service';
import Info from './pages/info';
import Nav from './components/Nav';
import Header from './components/Header';
import TopLeftImg from './components/TopLeftImage';





function App() {
  return (
    <div >
      <BrowserRouter>
        <Nav />
        <Header />
        <TopLeftImg />
        
        <div className="pages">
          <Routes>
            <Route 
              path="/" 
              element={  <Home /> } 
            />
            <Route 
              path="/info" 
              element={<Info />} 
            />
            <Route 
              path="/service" 
              element={<Service />} 
            />
            <Route 
              path="/works" 
              element={<Works />} 
            />
            <Route 
              path="/contact" 
              element={<Contact />} 
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
