import React from "react";
import { HeatingSolutionOffers, OfferInfo } from "../types";

interface QuotaTableProps {
  solution: HeatingSolutionOffers;
}

interface QuotaTableRowProps {
  offer: OfferInfo;
}

const QuotaTableRow: React.FC<QuotaTableRowProps> = ({ offer }) => {
  return (
    <tr className="text-primary ">
      <td>{offer.company}</td>
      <td>{offer.price}</td>
      <td>{offer.CO2Savings}</td>
      <td>{offer.annualSavings}</td>
      <td>{offer.paybackTime}</td>
    </tr>
  );
};

const QuotaTable: React.FC<QuotaTableProps> = ({ solution }) => {
  console.log(solution);
  return (
    <div className="flex justify-center h-screen">
      <div className="card w-5/6 bg-neutral p-3 m-auto flex justify-left">
        <div className="card-title text-secondary py-4 px-6">{solution.name}</div>
        <p className="text-primary px-6 py-0">
          Here we have concluded the offers we have got form the category {solution.name}s. You can also access the induvidual offers by clicking them.
        </p>
        <div className="card-body p-4">
          <table className="table w-full">
            <thead className="text-secondary">
              <tr>
                <th>Company</th>
                <th>Price</th>
                <th>CO2</th>
                <th>Annual Savings</th>
                <th>Payback time</th>
              </tr>
            </thead>
            <tbody>
              {solution.offers.map((offer) => (
                <QuotaTableRow key={offer.company} offer={offer} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default QuotaTable;
