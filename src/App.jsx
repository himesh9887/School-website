import { BrowserRouter as Router } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollProgress from './components/common/ScrollProgress';
import BackToTop from './components/common/BackToTop';
import ScrollToTop from './components/common/ScrollToTop';
import AppRoutes from './routes/AppRoutes';

function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'light';
    const storedTheme = window.localStorage.getItem('school-theme');
    if (storedTheme === 'light' || storedTheme === 'dark') return storedTheme;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    window.localStorage.setItem('school-theme', theme);
  }, [theme]);

  return (
    <Router>
      <div className={`site-shell min-h-screen ${theme === 'dark' ? 'theme-dark' : 'theme-light'}`}>
        <ScrollToTop />
        <ScrollProgress />
        <Navbar theme={theme} setTheme={setTheme} />
        <AppRoutes />
        <Footer theme={theme} />
        <BackToTop />
      </div>
    </Router>
  );
}

export default App;
