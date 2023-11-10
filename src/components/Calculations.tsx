import React, { useState } from "react";
import { CalculatedInfo } from "../types";

interface CalculationsProps {
  calculatedValues: Array<CalculatedInfo>;
}

interface CalculatedColumnProps {
  calculatedData: CalculatedInfo;
  onCheckboxChange: (isChecked: boolean, index: number) => void;
  index: number;
}

const TableColumn: React.FC<CalculatedColumnProps> = ({
  calculatedData,
  onCheckboxChange,
  index,
}) => {
  const [selected, setSelected] = useState(false);
  const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(event.target.checked);
    onCheckboxChange(event.target.checked, index);
  };
  return (
    <tr>
      <td>
        <input
          type="checkbox"
          className="checkbox checkbox-primary"
          checked={selected}
          onChange={handleCheck}
        />
      </td>
      <td>{calculatedData.heatingSolution}</td>
      <td>{calculatedData.averagePrice}</td>
      <td>{calculatedData.annualSavings}</td>
      <td>{calculatedData.CO2Savings}</td>
    </tr>
  );
};

const Calculations: React.FC<CalculationsProps> = ({ calculatedValues }) => {
  const [selected, setSelected] = useState(
    new Array(calculatedValues.length).fill(false)
  );

  const handleCheckboxChange = (isChecked: boolean, index: number) => {
    const newSelected = [...selected];
    newSelected[index] = isChecked;
    setSelected(newSelected);
    console.log(newSelected);
  };

  return (
    <div className="card w-full bg-neutral p-2">
      <p className="card-title text-accent text-2xl px-4 py-3">Calculations</p>
      <div className="card-body overflow-x-auto">
        <table className="table w-full text-primary">
          <thead>
            <tr className="text-secondary">
              <th>Selected</th>
              <th>Heating method</th>
              <th>Average price</th>
              <th>Annual cost savings</th>
              <th>Annual CO2 emissions savings</th>
            </tr>
          </thead>
          <tbody>
            {calculatedValues.map((calculatedData, index) => (
              <TableColumn
                key={index}
                index={index}
                calculatedData={calculatedData}
                onCheckboxChange={handleCheckboxChange}
              />
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-end pr-3">
        <button className="btn btn-primary">Get quotas</button>
      </div>
    </div>
  );
};

export default Calculations;
