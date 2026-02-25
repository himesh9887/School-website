import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollProgress from './components/common/ScrollProgress';
import BackToTop from './components/common/BackToTop';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <ScrollProgress />
        <Navbar />
        <AppRoutes />
        <Footer />
        <BackToTop />
      </div>
    </Router>
  );
}

export default App;
