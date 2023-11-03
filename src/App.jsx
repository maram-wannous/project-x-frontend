import ProjectProfile from './Components/ProjectProfile/ProjectProfile';
// import ProfileInfo from './Components/ProfileInfo/ProfileInfo';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


function App() {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div>
      {/* <ProfileInfo/> */}
      <ProjectProfile/>
    </div>
  )
}

export default App
