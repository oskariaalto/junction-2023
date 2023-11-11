import React from "react";
import { OfferResponse } from "../types";

interface OfferProps {
  offer: OfferResponse;
}

const Offer: React.FC<OfferProps> = ({ offer }) => {
  console.log(offer);
  const company = offer.company;
  return (
    <div className="flex justify-center p-2 h-screen">
      <div className="p-2.5 w-5/6 m-auto flec justify-left">
        <div className="text-secondary font-bold text-2xl py-4 px-6">
          {offer.name} offer from {company.name}
        </div>

        <div className="flex justify-center gap-2 w-full py-4">
          <div className="card bg-neutral justify-left flex w-full">
            <p className="card-title pt-4 px-6 text-secondary text-lg">
              Business info:
            </p>
            <div className="card-body px-6 pb-6">
              <div className="">
                <p className="text-xs text-secondary">Company</p>
                <div className=" text-sm text-primary w-full bg-base100 py-1 px-1.5 rounded-xl">
                  {company.name}
                </div>
              </div>

              <div className="">
                <p className="text-xs text-secondary">Company webcite</p>
                <div className=" text-sm text-primary w-full bg-base100 py-1 px-1.5 rounded-xl">
                  <a href={company.url}>{company.url}</a>
                </div>
              </div>

              <div className="">
                <p className="text-xs text-secondary">Contact person</p>
                <div className=" text-sm text-primary w-full bg-base100 py-1 px-1.5 rounded-xl">
                  {company.contact_person.name}
                </div>
              </div>

              <div className="">
                <p className="text-xs text-secondary">E-mail</p>
                <div className=" text-sm text-primary w-full bg-base100 py-1 px-1.5 rounded-xl">
                  {company.contact_person.email}
                </div>
              </div>

              <div className="">
                <p className="text-xs text-secondary">Phone</p>
                <div className=" text-sm text-primary w-full bg-base100 py-1 px-1.5 rounded-xl">
                  {company.contact_person.phone}
                </div>
              </div>
            </div>
          </div>

          <div className="card bg-neutral flex justify-left w-full">
            <p className="card-title pt-4 px-6 text-secondary text-lg">
              Quouta:
            </p>
            <div className="card-body px-6 pb-6">
              <div className="">
                <p className="text-xs text-secondary">Price</p>
                <div className=" text-sm text-primary w-full bg-base100 py-1 px-1.5 rounded-xl">
                  {offer.offer.price}
                </div>
              </div>

              <div className="">
                <p className="text-xs text-secondary">Offered product</p>
                <div className=" text-sm text-primary w-full bg-base100 py-1 px-1.5 rounded-xl">
                  {offer.offer.product}
                </div>
              </div>

              <div className="">
                <p className="text-xs text-secondary">Possible timeframe</p>
                <div className=" text-sm text-primary w-full bg-base100 py-1 px-1.5 rounded-xl">
                  {offer.offer.name}
                </div>
              </div>

              <div className="">
                <p className="text-xs text-secondary">Annual savings</p>
                <div className=" text-sm text-primary w-full bg-base100 py-1 px-1.5 rounded-xl">
                  {offer.offer.annual_savings}
                </div>
              </div>

              <div className="">
                <p className="text-xs text-secondary">Annual CO2 savings</p>
                <div className=" text-sm text-primary w-full bg-base100 py-1 px-1.5 rounded-xl">
                  {offer.offer.annual_emission_savings}
                </div>
              </div>

              <div className="">
                <p className="text-xs text-secondary">
                  Estimated payback period
                </p>
                <div className=" text-sm text-primary w-full bg-base100 py-1 px-1.5 rounded-xl">
                  {offer.offer.estimated_payback_time}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card bg-neutral flex justify-left w-full">
          <div className="px-6 py-4 w-full">
            <p className="text-secondary text-lg">Sent/recieved messages</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
