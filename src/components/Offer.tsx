import React from "react";
import { OfferInfo } from "../types";

interface OfferProps {
  offer: OfferInfo;
}

const Offer: React.FC<OfferProps> = ({ offer }) => {
  console.log(offer);
  return (
    <div className="flex justify-center p-2">
      <div className="card bg-neutral p-2.5 w-5/6">
        <div className="card-title text-secondary text-2xl">
          {offer.company}
        </div>
        <div className="card-body flex w-full">
          <div className=" w-1/2">
            <p className="text-secondary text-lg">Business info:</p>
            <div className="card-body">
              <div className="">
                <p className="text-xs text-secondary">Company</p>
                <div className=" text-sm text-primary w-full bg-base100 py-1 px-1.5 rounded-xl">
                  {offer.company}
                </div>
              </div>
              <div className="flex gap-2 w-full">
                <div className="">
                  <p className="text-xs text-secondary">Product</p>
                  <div className=" text-sm text-primary w-full bg-base100 py-1 px-1.5 rounded-xl">
                    {offer.product}
                  </div>
                </div>
                <div className="">
                  <p className="text-xs text-secondary">Price</p>
                  <div className=" text-sm text-primary w-full bg-base100 py-1 px-1.5 rounded-xl">
                    {offer.price}
                  </div>
                </div>
              </div>

              <div className="">
                <p className="text-xs text-secondary">Timeframe</p>
                <div className=" text-sm text-primary w-full bg-base100 py-1 px-1.5 rounded-xl">
                  {offer.company}
                </div>
              </div>
              <div className="block">
                <p className="text-xs text-secondary">
                  Current heating solution
                </p>
                <div className=" text-sm text-primary w-full bg-base100 py-1 px-1.5 rounded-xl">
                  {offer.company}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
