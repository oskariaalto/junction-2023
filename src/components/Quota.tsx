import UserProfile from "./UserProfile";
import Calculations from "./Calculations";
import React from "react";
import { CalculatedInfo } from "../types";

interface CalculationsTableProps {
  calculatedValues: Array<CalculatedInfo>;
}

const CalculationsTable: React.FC<CalculationsTableProps> = ({
  calculatedValues,
}) => {
  return (
    <div className="flex p-2 gap-3 justify-center h-screen">
      <div className="w-3/4 m-auto">
        <Calculations calculatedValues={calculatedValues} />
      </div>
    </div>
  );
};

export default CalculationsTable;
