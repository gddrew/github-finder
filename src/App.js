import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navabar from './components/layout/Navbar';

function App() {
  return (
    <Router>
      <div className='flex flex-col justify-between h-screen'>
        <Navabar />
        <main>Content</main>
      </div>
    </Router>
  );
}

export default App;
