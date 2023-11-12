import React from "react";
import { SolutionOffers, SolutionOffer } from "../types";
import { useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface QuotaTableProps {
  solution: SolutionOffers;
}

interface QuotaTableRowProps {
  offer: SolutionOffer;
  bestPrice?: boolean;
  bestEmissionSavings?: boolean;
  bestAnnualSavings?: boolean;
  bestPaybackTime?: boolean;
}

// soft colors for the graph
// TODO: move these to theme or conf file
const colors = [
  "#8884d8",
  "#82ca9d",
  "#ffc658",
  "#ff7300",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#0088FE",
];

const QuotasGraph: React.FC<QuotaTableProps> = ({ solution }) => {
  const payBacks: Record<string, number> = {};

  solution.offers.forEach((offer) => {
    payBacks[offer.company.name as string] =
      offer.company.price / offer.company.annual_savings;
  });

  const maxTimeToBreakEven = Math.ceil(Math.max(...Object.values(payBacks)));
  const data = Array.from({ length: maxTimeToBreakEven + 1 }, (_, i) => {
    const dataPoint: Record<string, number> = { time: i };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    for (const [_, offerDetails] of Object.entries(solution.offers)) {
      dataPoint[offerDetails.company.name] =
        offerDetails.company.annual_savings * i - offerDetails.company.price;
    }
    return dataPoint;
  });

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" label={{ value: "Years", position: "bottom" }} />
        <YAxis
          type="number"
          domain={["dataMin", "dataMax"]}
          label={{ value: "Savings (€)", angle: -90, position: "insideLeft" }}
        />
        <Tooltip />
        <Legend verticalAlign="top" height={36} />
        {Object.keys(solution.offers).map((offername) => (
          <Line
            key={solution.offers[(offername as unknown) as number].company.name}
            type="linear"
            dataKey={
              solution.offers[(offername as unknown) as number].company.name
            }
            stroke={colors[(offername as unknown) as number]}
            activeDot={{ r: 8 }}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
};

const QuotaTableRow: React.FC<QuotaTableRowProps> = ({
  offer,
  bestPrice,
  bestEmissionSavings,
  bestAnnualSavings,
  bestPaybackTime,
}) => {
  const navigate = useNavigate();
  //console.log(offer);
  const handleClick = () => {
    navigate(`/offers/${offer.id}`);
  };
  return (
    <tr className="text-black cursor-pointer text-lg" onClick={handleClick}>
      <td>
        <span className="inline-flex flex-row items-center">
          {offer.company.name}
        </span>
      </td>
      <td>
        <span className="inline-flex flex-row items-center">
          {offer.company.price} €{" "}
          {bestPrice && <FaStar className="inline text-[#FFDF00] ml-1" />}
        </span>
      </td>
      <td>
        <span className="inline-flex flex-row items-center">
          {offer.company.annual_emission_savings} CO<sub>2</sub> kg/y{" "}
          {bestEmissionSavings && <FaStar className="inline text-[#FFDF00] ml-1" />}
        </span>
      </td>
      <td>
        <span className="inline-flex flex-row items-center">
          {offer.company.annual_savings} €{" "}
          {bestAnnualSavings && <FaStar className="inline text-[#FFDF00] ml-1" />}
        </span>
      </td>
      <td>
        <span className="inline-flex flex-row items-center">
          {offer.company.estimated_payback_time} y{" "}
          {bestPaybackTime && <FaStar className="inline text-[#FFDF00] ml-1" />}
        </span>
      </td>
    </tr>
  );
};

const QuotaTable: React.FC<QuotaTableProps> = ({ solution }) => {
  const lowestPrice = Math.min(
    ...solution.offers.map((offer) => offer.company.price)
  );
  const highestEmissionSavings = Math.max(
    ...solution.offers.map((offer) => offer.company.annual_emission_savings)
  );
  const highestAnnualSavings = Math.max(
    ...solution.offers.map((offer) => offer.company.annual_savings)
  );
  const lowestPaybackTime = Math.min(
    ...solution.offers.map((offer) => offer.company.estimated_payback_time)
  );

  return (
    <div className="flex justify-center h-max">
      <div className="card w-5/6 bg-neutral p-3 m-auto flex justify-left ">
        <div className="card-title text-secondary text-5xl">Geothermal.</div>

        <p className="text-primary pt-4">
          Here we have the comparison of geothermal heating contractors, each
          with distinct offerings: Junction Ltd. offers a balanced approach with
          a competitive price and commendable CO2 savings, featuring a
          reasonable payback period under six years. Green Energy Solutions
          commands a higher price but provides substantial annual savings and a
          rapid five-year payback, emphasizing efficiency. SolarTech Inc. sets a
          higher price point yet justifies it with top-tier annual savings,
          resulting in a longer payback time. Lastly, EcoPower Solutions
          proposes a more affordable option in terms of CO2 savings with the
          longest payback duration, highlighting a strategic focus on long-term
          ecological and economic benefits.
        </p>
        <div className="card-body p-0 pt-2">
          <table className="table w-full">
            <thead className="text-secondary text-base">
              <tr>
                <th>Company</th>
                <th>Price</th>
                <th>CO2 Savings</th>
                <th>Annual Savings</th>
                <th>Payback time</th>
              </tr>
            </thead>
            <tbody>
              {solution.offers.map((offer) => (
                <QuotaTableRow
                  key={offer.company.name}
                  offer={offer}
                  bestPrice={offer.company.price === lowestPrice}
                  bestEmissionSavings={
                    offer.company.annual_emission_savings ===
                    highestEmissionSavings
                  }
                  bestAnnualSavings={
                    offer.company.annual_savings === highestAnnualSavings
                  }
                  bestPaybackTime={
                    offer.company.estimated_payback_time === lowestPaybackTime
                  }
                />
              ))}
            </tbody>
          </table>
        </div>
        <QuotasGraph solution={solution} />
      </div>
    </div>
  );
};

export default QuotaTable;
