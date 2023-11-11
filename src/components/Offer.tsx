import React from "react";
import { OfferResponse } from "../types";

interface OfferProps {
  offer: OfferResponse;
}

const Offer: React.FC<OfferProps> = ({ offer }) => {
  console.log(offer);
  const company = offer.company;
  const messages = offer.messages;
  return (
    <div className="flex justify-center p-2 h-screen">
      <div className="p-2.5 w-5/6 m-auto">
        <div className="text-secondary font-bold text-lg md:text-2xl py-4 px-6">
          {offer.name} offer from {company.name}
        </div>

        <div className="gap-2 w-full py-4 justify-center flex">
          <div className="card bg-neutral justify-left flex w-full shadow-xl">
            <p className="card-title pt-4 px-6 text-secondary text-lg">
              Business info:
            </p>
            <div className="card-body px-6 pb-6">
              <div className="">
                <p className="text-sm text-secondary">Company</p>
                <div className=" text-lg text-primary w-full bg-base100 py-0.5 px-1.5 rounded-xl">
                  {company.name}
                </div>
              </div>

              <div className="">
                <p className="text-sm text-secondary">Company website</p>
                <div className=" text-lg text-primary w-full bg-base100 py-1 px-1.5 rounded-xl">
                  <a href={company.url}>{company.url}</a>
                </div>
              </div>

              <div className="">
                <p className="text-sm text-secondary">Contact person</p>
                <div className=" text-lg text-primary w-full bg-base100 py-1 px-1.5 rounded-xl">
                  {company.contact_person.name}
                </div>
              </div>

              <div className="">
                <p className="text-sm text-secondary">E-mail</p>
                <div className=" text-lg text-primary w-full bg-base100 py-1 px-1.5 rounded-xl">
                  {company.contact_person.email}
                </div>
              </div>

              <div className="">
                <p className="text-sm text-secondary">Phone</p>
                <div className=" text-lg text-primary w-full bg-base100 py-1 px-1.5 rounded-xl">
                  {company.contact_person.phone}
                </div>
              </div>
            </div>
          </div>

          <div className="card bg-neutral flex justify-left w-full shadow-xl">
            <p className="card-title pt-4 px-6 text-secondary text-lg">
              Quouta:
            </p>
            <div className="card-body px-6 pb-6">
              <div className="">
                <p className="text-sm text-secondary">Price</p>
                <div className=" text-lg text-primary w-full bg-base100 py-1 px-1.5 rounded-xl">
                  {offer.offer.price}
                </div>
              </div>

              <div className="">
                <p className="text-sm text-secondary">Offered product</p>
                <div className=" text-lg text-primary w-full bg-base100 py-1 px-1.5 rounded-xl">
                  {offer.offer.product}
                </div>
              </div>

              <div className="">
                <p className="text-sm text-secondary">Possible timeframe</p>
                <div className=" text-lg text-primary w-full bg-base100 py-1 px-1.5 rounded-xl">
                  {offer.offer.name}
                </div>
              </div>

              <div className="">
                <p className="text-sm text-secondary">Annual savings</p>
                <div className=" text-lg text-primary w-full bg-base100 py-1 px-1.5 rounded-xl">
                  {offer.offer.annual_savings}
                </div>
              </div>

              <div className="">
                <p className="text-sm text-secondary">Annual CO2 savings</p>
                <div className=" text-lg text-primary w-full bg-base100 py-1 px-1.5 rounded-xl">
                  {offer.offer.annual_emission_savings}
                </div>
              </div>

              <div className="">
                <p className="text-sm text-secondary">
                  Estimated payback period
                </p>
                <div className=" text-lg text-primary w-full bg-base100 py-1 px-1.5 rounded-xl">
                  {offer.offer.estimated_payback_time}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card bg-neutral w-full h-52 overflow-y-auto shadow-xl">
          <div className="p-4 w-full">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`w-full mb-2 ${
                  message.user === "root@root.fi"
                    ? "items-start text-left"
                    : "items-end text-right"
                }`}
              >
                <div
                  className={`inline-block max-w-md p-3 rounded-lg ${
                    message.user === "root@root.fi"
                      ? "bg-blue-100"
                      : "bg-gray-100"
                  }`}
                >
                  <p className="font-bold text-secondary text-sm">
                    {message.user}
                  </p>
                  <p className="text-xs text-primary">{message.message}</p>
                  {/* Include timestamp if available */}
                  {/* <p className="text-xs text-gray-600">Time: {message.timestamp}</p> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
