import './App.css'
import Login from './Modules/Login/Pages/Login';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'; 

function App() {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div>
      <Login/>
    </div>
  )
}

export default App
