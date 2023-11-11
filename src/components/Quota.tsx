import UserData from "./UserData";
import Calculations from "./Calculations";
import React from "react";
import { UserInputInfo, CalculatedInfo } from "../types";

const sampleUserData: UserInputInfo = {
  name: "John Doe",
  houseSqm: 150,
  currentHeating: "Oil",
  address: "123 Main St, City, Country",
  occupants: 3,
  budget: 10000,
  urgency: 1, // Assuming 1 represents low urgency
  description: "Mahtava",
};

interface CalculationsTableProps {
  calculatedValues: Array<CalculatedInfo>;
}

const CalculationsTable: React.FC<CalculationsTableProps> = ({
  calculatedValues,
}) => {
  return (
    <div className="flex p-2 gap-3">
      <div className="w-1/4">
        <UserData userInfo={sampleUserData} />
      </div>
      <div className="w-3/4">
        <Calculations calculatedValues={calculatedValues} />
      </div>
    </div>
  );
};

export default CalculationsTable;
