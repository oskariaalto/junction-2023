import LoadingSpinner from "./LoadingSpinner";
import React, { useState, useEffect } from "react";
import { HeatingSolutionOffers } from "../types";
import { Link } from "react-router-dom";

interface OfferCardProps {
  offerInfo: HeatingSolutionOffers;
}

interface HomeComponentProps {
  offers: HeatingSolutionOffers[];
}

const OfferCard: React.FC<OfferCardProps> = ({ offerInfo }) => {
  return (
    <Link to={`offers/${offerInfo.id}/outstanding`} className="w-full">
      <div className="card collapse-arrow shadow-lg bg-neutral w-full p-3">
        <div className="card-title text-secondary w-full flex justify-between">
          <span className="text-xl">{offerInfo.company_name}</span>
          <span className="text-xl">
            {offerInfo.answers.answered}
            {" / "}
            {offerInfo.answers.total}
          </span>
        </div>
      </div>
    </Link>
  );
};

const Home: React.FC<HomeComponentProps> = ({ offers }) => {
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Simulate loading data or other actions
    setTimeout(() => {
      setIsLoading(false);
    }, 200); // Simulate a 2-second loading time
  }, []);
  return (
    <div>
    {isLoading ? (
        <div className="h-screen w-screen flex justify-center items-center">
        <LoadingSpinner />
        </div>
      ) : (
    <div className="flex justify-center h-screen">
      <div className="w-2/3 m-auto">
        <div className="container mx-auto p-4">
          <div className="flex flex-col items-center text-8xl font-bold m-6">
            GYP
          </div>
          <div className="flex flex-col items-center m-6">
            <h1 className="text-3xl font-bold">Offers</h1>
          </div>
          {offers.map((offer, index) => (
            <div key={index} className="flex justify-center p-2">
              <OfferCard offerInfo={offer} />
            </div>
          ))}
          <div className="container mx-auto p-4 flex flex-col items-center">
            <Link
              to="/newoffer"
              className="btn btn-secondary"
              onClick={() => setShow(!show)}
            >
              New Offer
            </Link>
          </div>
        </div>
      </div>
    </div>
      )}
    </div>
      
  );
};

export default Home;
