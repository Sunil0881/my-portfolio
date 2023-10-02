import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import Home from './pages/home';
import Works from './pages/works';
import Contact from './pages/contact';
import Service from './pages/service';
import Info from './pages/info';
import Nav from './components/Nav';
import Header from './components/Header';
import TopLeftImg from './components/TopLeftImage';
import Circle from './components/Circle';






function App() {
  return (
    <div >
      <BrowserRouter>
    
        <Nav />
        <Header />
        <TopLeftImg />
        <Circle />
        
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
