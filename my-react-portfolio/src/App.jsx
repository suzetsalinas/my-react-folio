import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio.jsx';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen ">
        <Header />
        {/* could not get bkgd image to render */}
        <main className="flex-grow container mx-auto px-4 py-8" style={{backgroundImage: "url('../assets/atx.png')", backgroundSize: "cover", backgroundPosition: "center"}}>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;