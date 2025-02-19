import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Footer from './Components/Footer/Footer'
import "./App.css"
import Information from './Components/Information/Information'

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Home/>
      <Information/>
      <Footer/>
    </div>
  )
}

export default App
