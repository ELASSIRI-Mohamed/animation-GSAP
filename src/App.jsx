import gsap from 'gsap';
import { ScrollTrigger,SplitText } from 'gsap/all';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger,SplitText);

const App = () => {
  return (
    <min>
      <Navbar />
      <Hero/>
      <div className='h-dvh bg-black'/>
    </min>
  );
};

export default App;
