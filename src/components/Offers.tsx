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
    <div className="flex justify-center pt-2">
      <div className="card w-5/6 bg-neutral p-3">
        <div className="card-title text-secondary">{solution.name}</div>
        <div className="card-body">
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
