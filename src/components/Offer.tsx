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
          Offer from {offer.company}
        </div>

        <div className="flex gap-2 w-full">

          <div className="card-body flex w-2/5">
            <p className="text-secondary text-lg">Business info:</p>
            <div className="card-body">

              <div className="">
                <p className="text-xs text-secondary">Company</p>
                <div className=" text-sm text-primary w-full bg-base100 py-1 px-1.5 rounded-xl">
                  {offer.company}
                </div>
              </div>

              <div className="">
                <p className="text-xs text-secondary">Contact person</p>
                <div className=" text-sm text-primary w-full bg-base100 py-1 px-1.5 rounded-xl">
                  {offer.emailConversation}
                </div>
              </div>

              <div className="">
                <p className="text-xs text-secondary">E-mail</p>
                <div className=" text-sm text-primary w-full bg-base100 py-1 px-1.5 rounded-xl">
                  {offer.emailConversation}
                </div>
              </div>

              <div className="">
                <p className="text-xs text-secondary">Phone</p>
                <div className=" text-sm text-primary w-full bg-base100 py-1 px-1.5 rounded-xl">
                  {offer.emailConversation}
                </div>
              </div>

            </div>
          </div>

          <div className="card-body flex w-2/5">
            <p className="text-secondary text-lg">Quouta:</p>
            <div className="card-body">

              <div className="">
                <p className="text-xs text-secondary">Price</p>
                <div className=" text-sm text-primary w-full bg-base100 py-1 px-1.5 rounded-xl">
                  {offer.price}
                </div>
              </div>

              <div className="">
                <p className="text-xs text-secondary">Offered product</p>
                <div className=" text-sm text-primary w-full bg-base100 py-1 px-1.5 rounded-xl">
                  {offer.product}
                </div>
              </div>

              <div className="">
                <p className="text-xs text-secondary">Possible timeframe</p>
                <div className=" text-sm text-primary w-full bg-base100 py-1 px-1.5 rounded-xl">
                  {offer.company}
                </div>
              </div>

              <div className="">
                <p className="text-xs text-secondary">Annual savings</p>
                <div className=" text-sm text-primary w-full bg-base100 py-1 px-1.5 rounded-xl">
                  {offer.annualSavings}
                </div>
              </div>

              <div className="">
                <p className="text-xs text-secondary">Annual CO2 savings</p>
                <div className=" text-sm text-primary w-full bg-base100 py-1 px-1.5 rounded-xl">
                  {offer.CO2Savings}
                </div>
              </div>

              <div className="">
                <p className="text-xs text-secondary">Estimated payback period</p>
                <div className=" text-sm text-primary w-full bg-base100 py-1 px-1.5 rounded-xl">
                  {offer.paybackTime}
                </div>
              </div>

            </div>
          </div>

        </div>

        <div className="card-body flex w-full">
          <div className=" w-full">
            <p className="text-secondary text-lg">Sent/recieved messages</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Offer;
