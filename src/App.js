import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/footer.jsx';
import Videos from './components/videos.jsx';
import Upload from './components/upload.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/videos' element={<Videos/>} />
        <Route path='/upload' element={<Upload/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
