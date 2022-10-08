import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
  Outlet
} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Col, Container } from 'react-bootstrap';
import Home from './pages/Home';
import SinglePost from './pages/SinglePost';

import NavBar from './components/Navbar/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Helmet } from "react-helmet";
import SideContent from './components/SideContent';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import Policy from './pages/Policy';
import About from './pages/AboutUs';
import { useState } from 'react';



function App() {
  const [search , setSearch] = useState('')

  const [category , setCategory ] = useState('')

  return (
    <Router>
      <NavBar search={search} setSearch={setSearch} />
      <Container className='row d-flex m-auto'>
        <Col lg='8'>
          <Routes>
            <Route exact path="/" element={<Home search={search} />} />
            <Route exact path="/singlePost">
              <Route path=":postId/:namePost" element={<SinglePost />} />
            </Route>
            <Route exact path="/productos" element={<h1>productos</h1>} />
            <Route exact path="/singleCategory" element={<h1>categorias</h1>} />
            <Route exact path="/contacto" element={<Contact />} />
            <Route exact path="/politicas" element={<Policy />} />
            <Route exact path="/nosotros" element={<About />} />
          </Routes>
        </Col>
        <Col lg='4' >
          <SideContent />
        </Col>
      </Container>
      <Footer />
      <ToastContainer />
    </Router>
  );
}

export default App;
