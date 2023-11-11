import UserProfile from "./UserProfile";
import React, { useState } from "react";
import { HeatingSolutionOffers } from "../types";

interface OfferCardProps {
  offerInfo: HeatingSolutionOffers;
}

interface HomeComponentProps {
  offers: HeatingSolutionOffers[];
}

const OfferCard: React.FC<OfferCardProps> = ({ offerInfo }) => {
  return (
    <div className="card collapse-arrow shadow-lg bg-neutral w-full p-3">
      <div className="card-title text-secondary w-full flex justify-between">
        <span className="text-xl">{offerInfo.name}</span>
        <span className="text-xl">
          {offerInfo.offers.filter((offer) => offer.received).length}
          {" / "}
          {offerInfo.offers.length}
        </span>
      </div>
    </div>
  );
};

const Home: React.FC<HomeComponentProps> = ({ offers }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="flex justify-center h-screen">
      <div className="w-2/3 m-auto">
        <div className="container mx-auto p-4">
          <div className="flex flex-col items-center text-8xl font-bold m-6">
            GYP
          </div>
          <div className="flex flex-col items-center m-6">
            <h1 className="text-3xl font-bold">Offers</h1>
          </div>
          <div className="flex justify-center">
            {offers.map((offer, index) => (
              <OfferCard key={index} offerInfo={offer} />
            ))}
          </div>
          <div className="container mx-auto p-4 flex flex-col items-center">
            {!show && (
              <button
                className="btn btn-secondary"
                onClick={() => setShow(!show)}
              >
                New Offer
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
