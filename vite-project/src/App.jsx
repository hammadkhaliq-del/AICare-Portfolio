import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import About from './Pages/About';
import IntroSection from './Pages/IntroSection';
import Products from './Pages/Products';
import Contact from './Pages/Contact';
import Team from './Pages/Team';
import NotFound404 from './Pages/NotFound404';

// ScrollToTop component that works app-wide
function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

function App() {
  const location = useLocation();
  const is404Page = location.pathname !== '/' && 
                    location.pathname !== '/about' && 
                    location.pathname !== '/products' && 
                    location.pathname !== '/contact' && 
                    location.pathname !== '/team';

  return (
    <div className="bg-white">
      {/* ScrollToTop component to ensure all navigation starts at the top */}
      <ScrollToTop />
      
      {/* Only render Header if not on 404 page */}
      {!is404Page && <Header />}
      
      <main>
        <Routes>
          <Route path="/" element={<IntroSection />} />
          <Route path="/about" element={<About />} />
          <Route path='/products' element={<Products />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/team' element={<Team />} />
          
          {/* 404 catch-all route */}
          <Route path="*" element={<NotFound404 />} />
        </Routes>
      </main>
      
      {/* Only render Footer if not on 404 page */}
      {!is404Page && <Footer />}
    </div>
  );
}

export default App;