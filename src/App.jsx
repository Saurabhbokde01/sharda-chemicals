import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Footer from './Components/Footer/Footer'
import "./App.css"
import Information from './Components/Information/Information'
import Projects from './Components/Projects/Projects'
import Contact from './Components/Contact/Contact'


const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Home/>
      <Information/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
