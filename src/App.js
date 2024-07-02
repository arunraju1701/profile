import "./App.css";
 import ThreeDSlider from "./components/ThreeDSlider";
 import AnimatedCardComponent from "./components/AnimatedCardComponent"
 import GlassEffect from "./components/GlassEffect"
import FoldableCard from "./components/FoldableCard";
function App() {
  return (
    <div className="App">
       <GlassEffect />
      <AnimatedCardComponent /> 
       <ThreeDSlider/> 
       <FoldableCard/>
    </div>
  );
}

export default App;
