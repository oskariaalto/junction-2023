import { Link } from "react-router-dom";
import { BsPerson, BsArrowReturnLeft } from "react-icons/bs";

const Navigation = () => {
  return (
    <>
      <div className="inline-flex justify-end absolute bottom-6 right-6 rounded-full bg-white p-6">
        <Link to="/profile" className="text-secondary">
          <BsPerson size="28" />
        </Link>
      </div>
      <div className="inline-flex justify-end absolute top-6 left-6 p-6">
        <Link to="/" className="text-secondary"> 
          <BsArrowReturnLeft size="28" />
        </Link>
      </div>
      </>
    // <nav className="navbar bg-neutral text-neutral-content ">
    //   <div className="flex w-full px-3">
    //     {/* <div className="w-1/6">
    //       <Link to="/" className="text-secondary text-4xl font-bold">
    //         GYP
    //       </Link>
    //     </div> */}
    //     <div className="flex w-5/6 justify-end">
    //       <Link to="/profile" className="text-secondary">
    //         <BsPerson size="28" />
    //       </Link>
    //     </div>
    //   </div>
    // </nav>
  );
};

export default Navigation;
