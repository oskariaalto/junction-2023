import React from "react";
import { SolutionOffers, SolutionOffer } from "../types";
import { useNavigate } from "react-router-dom";
interface QuotaTableProps {
  solution: SolutionOffers;
}

interface QuotaTableRowProps {
  offer: SolutionOffer;
}

const QuotaTableRow: React.FC<QuotaTableRowProps> = ({ offer }) => {
  const navigate = useNavigate();
  console.log(offer);
  const handleClick = () => {
    navigate(`/offers/${offer.id}`);
  };
  return (
    <tr className="text-primary cursor-pointer" onClick={handleClick}>
      <td>{offer.company.name}</td>
      <td>{offer.company.price}</td>
      <td>{offer.company.annual_emission_savings}</td>
      <td>{offer.company.annual_savings}</td>
      <td>{offer.company.estimated_payback_time}</td>
    </tr>
  );
};

const QuotaTable: React.FC<QuotaTableProps> = ({ solution }) => {
  console.log(solution);
  return (
    <div className="flex justify-center h-screen">
      <div className="card w-5/6 bg-neutral p-3 m-auto flex justify-left shadow-xl">
        <div className="card-title text-secondary py-4 px-6">{"testi"}</div>
        <p className="text-primary px-6 py-0">
          Here we have concluded the offers we have got form the category{" "}
          {solution.name}s. You can also access the induvidual offers by
          clicking them.
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
                <QuotaTableRow key={offer.company.name} offer={offer} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default QuotaTable;
