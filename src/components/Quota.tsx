import UserData from "./UserData";
import Calculations from "./Calculations";
import React from "react";
import { CalculatedInfo } from "../types";
import { useLocation } from "react-router-dom";

const sampleUserData = {
  name: "John Doe",
  houseSqm: 150,
  currentHeating: "Oil",
  street: "123 Main St",
  postalCode: "12345",
  city: "Helsinki",
  occupants: 3,
  budget: 10000,
  urgency: 1, // Assuming 1 represents low urgency
  description: "200 neliöinen iso talo keskellä metsää\nhyvin vanha",
};

interface CalculationsTableProps {
  calculatedValues: Array<CalculatedInfo>;
}

const CalculationsTable: React.FC<CalculationsTableProps> = ({
  calculatedValues,
}) => {
  const location = useLocation();
  console.log(location.state);
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
