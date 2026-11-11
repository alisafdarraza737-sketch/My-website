import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Services from './services';
import About from './About';
import Contact from './contact';
function App() {

    return (
        <>


        <BrowserRouter>

        <Link to="/contact">Contact</Link>
        <Link to="/services">Services</Link>
        <Link to="/about">About</Link >
        <Routes>
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />

        </Routes>
        </BrowserRouter>
        </>
     )
    }

    export default App




