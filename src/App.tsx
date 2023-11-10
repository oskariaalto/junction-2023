import Quota from "./components/Quota";
import Home from "./components/Home";

const App = () => {
  document.body.setAttribute("data-theme", "forest");
  return (
    <>
      <div className="w-full">
        <Home />
      </div>
    </>
  );
};

export default App;
