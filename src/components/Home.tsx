
const Home = () => {
  return (
    <div className="flex flex-col">
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <a href="#" className="text-white text-2xl font-bold">GYP</a>
          </div>
          <div>
            <ul className="flex space-x-4">
              <li><a href="#" className="text-white">Profile</a></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>

    <div className="container mx-auto p-4">
      <div className="flex flex-col items-start">
        <h1 className="text-3xl font-bold">Status</h1>

        
      </div>
      <div className="container mx-auto p-4 flex flex-col items-center">
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full mt-4">
          New Offer
        </button>
      </div>
    </div>
  </div>
);
};

export default Home;

