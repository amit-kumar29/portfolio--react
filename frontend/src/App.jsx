import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from 'react-router-dom';
import RootLayout from './Layout/RootLayout';
import './App.css';
import Home from './components/home/Home';
import About from './components/about/About';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />}/>
        <Route path="about" element={<About />}/>
        <Route path="services" element={<Services />}/>
        <Route path="portfolio" element={<Portfolio />}/>
        <Route path="contact" element={<Contact />}/>
      </Route>
    )
  )


  return (
    <RouterProvider router={router}/>
  )
}

export default App
