import './App.css'
import Nav from '../src/components/NavBar/Nav'
import Header from '../src/components/HeroSection/Header'
import Testimonials from '../src/components/Testimonials/Testimonials'
import Footer from '../src/components/Footer/Footer'
import Specials from '../src/components/Specials/Specials'

function App() {
  return <>
    <Nav></Nav>
    <Header></Header>
    <Specials></Specials>
    <Testimonials></Testimonials>
    <Footer></Footer>
  </>
}

export default App
