import gsap from 'gsap';
import { ScrollTrigger,SplitText } from 'gsap/all';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger,SplitText);

const App = () => {
  return (
    <div className="flex-center">
      <h1 className="text-4xl text-indigo-300">Hello from GSAP</h1>
    </div>
  );
};

export default App;
