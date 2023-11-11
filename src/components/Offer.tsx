import React from "react";
import { OfferInfo } from "../types";

interface OfferProps {
  offer: OfferInfo;
}

const Offer: React.FC<OfferProps> = ({ offer }) => {
  return (
    <div className="card">
      <div className="card-title">{offer.company}</div>
    </div>
  );
};

export default Offer;
