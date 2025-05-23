import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Works from './pages/Works';
import Footer from './components/Footer';


const App =()=> {
    
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/works" element={<Works />} />
            </Routes>
            <Footer/>
        </Router>
        
    );
}
export default App;
