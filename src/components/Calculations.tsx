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
    <div className="card w-full bg-neutral p-2 flex justify-center shadow-md">
      <p className="card-title text-secondary text-2xl px-4 py-4">Calculations</p>
      <p className="text-primary px-4 py-0">
          Here you can find different options to enhance the energy performance of your house compared. 
          The estimates are calculated based on the facts you have provided. You can check and modify your information on your profile.
      </p>
      <div className="card-body overflow-x-auto px-4 py-4">
        
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
