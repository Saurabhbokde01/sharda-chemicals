import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Footer from './Components/Footer/Footer'
import "./App.css"
import Information from './Components/Information/Information'
import Projects from './Components/Projects/Projects'
import '@fortawesome/fontawesome-free/css/all.min.css';


const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Home/>
      <Information/>
      <Projects/>
      <Footer/>
    </div>
  )
}

export default App
