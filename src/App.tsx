import Quota from "./components/Quota";

const App = () => {
  document.body.setAttribute("data-theme", "forest");
  return (
    <>
      <div className="w-full">
        <Quota />
      </div>
    </>
  );
};

export default App;
