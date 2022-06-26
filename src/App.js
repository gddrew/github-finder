import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navabar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

function App() {
  return (
    <Router>
      <div className='flex flex-col justify-between h-screen'>
        <Navabar />

        <main className='container mx-auto px-3 pb-12'>Content</main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
