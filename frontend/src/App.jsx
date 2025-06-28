import { Button } from "../src/components/ui/button";
import About from "./components/About";
import Body from "./components/Body";
import Contect from "./components/Contect";
import Mylatest from "./components/Mylatest-Work";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div  className="px-2 my-2 bg-black text-white">
      <div className="h-screen ">
        <div className="flex flex-col h-[100%]">
          <section className="h-[7%]">
            <Navbar />
          </section>
          <section className="flex-1">
            <Body />
          </section>
        </div>
      </div>

      <About />
      <Mylatest />
      <Contect />
    </div>
  );
}

export default App;
