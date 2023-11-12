import React from "react";
import { OfferResponse } from "../types";

interface OfferProps {
  offer: OfferResponse;
}

const Offer: React.FC<OfferProps> = ({ offer }) => {
  const [messagesAreOpen, setMessagesAreOpen] = React.useState<boolean>(false);

  // console.log(offer);
  const company = offer.company;
  const messages = offer.messages;
  return (
    <div className="flex justify-center p-2 h-screen">
      <div className="p-2.5 w-5/6 m-auto max-w-3xl">
        <div className="gap-2 w-full py-4 justify-center flex">
          <div className="card bg-neutral w-full shadow-xl p-6">
            <div className="justify-between flex flex-row">
              <div className="">
                <p className="card-title text-secondary text-5xl">
                  {company.name}
                </p>
                <div className="text-lg text-primary w-full bg-base100 pt-4 rounded-xl">
                  <a href={company.url}>{company.url}</a>
                </div>
              </div>

              <div className="relative flex items-center flex-col mr-8">
                <img
                  className="w-52 h-52 rounded-full shadow-xl"
                  src={"/src/assets/photo.png"}
                  />
                <div className="text-3xl py-1 bolded">{company.contact_person.name}</div>
                <div className="">{company.contact_person.email}</div>
                <div className="">{company.contact_person.phone}</div>

                <div className="absolute top-36 -left-[420px] w-96 h-32 bg-white p-4 rounded-xl rounded-tr-none shadow-xl" style={{ transform: 'rotate(-2deg)', transformOrigin: "top right" }}> {/* Adjust positioning as needed */}
                  <p className="text-secondary text-xl">"Here's our fantastic offer!"</p>
                  <div className="text-primary">
                    We are offering you a {offer.offer.product} for just {offer.offer.price}! This is a 1000 kWh heat pump, will be profitable in just {offer.offer.estimated_payback_time} years!
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center pb-2">
              <button
                className="px-2 py-1 rounded-full border-2 border-primary text-black hover:border-black"
                onClick={() => setMessagesAreOpen(!messagesAreOpen)}
                >
                {messagesAreOpen ? "CLOSE" : "OPEN"} MESSAGES
              </button>
            </div>

            {messagesAreOpen && (
              <div className="h-52 overflow-y-auto">
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
              )}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
