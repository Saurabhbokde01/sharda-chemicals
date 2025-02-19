import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Footer from './Components/Footer/Footer'
import "./App.css"

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Home/>
      <About/>
      <Footer/>
    </div>
  )
}

export default App
