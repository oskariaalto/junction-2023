import React, { useContext } from "react";
import { CalculatedInfo, CalculatedResponse } from "../types";
import { DataContext } from "../context/DataContext";

interface CalculationsProps {
  calculatedValues: Array<CalculatedInfo>;
}

interface CalculatedColumnProps {
  calculatedData: CalculatedResponse;
  onCheckboxChange: (isChecked: boolean, index: number) => void;
  index: number;
}
const TableColumn: React.FC<CalculatedColumnProps> = ({
  calculatedData,
  onCheckboxChange,
  index,
}) => {
  const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    onCheckboxChange(event.target.checked, index);
  };
  return (
    <tr>
      <td>
        <input
          type="checkbox"
          className="checkbox checkbox-primary"
          checked={calculatedData.selected}
          onChange={handleCheck}
        />
      </td>
      <td>
        {calculatedData.name === "heatpump"
          ? "Heat Pump"
          : calculatedData.name === "geothermal"
          ? "Geothermal Heat"
          : "Water Heat Pump"}
      </td>
      <td>{calculatedData.price}</td>
      <td>{calculatedData.total_savings}</td>
      <td>{calculatedData.total_co2_reduction}</td>
    </tr>
  );
};

const Calculations: React.FC<CalculationsProps> = () => {
  const { state, dispatch } = useContext(DataContext);
  //console.log(state.calculatedData);
  const handleCheckboxChange = (isChecked: boolean, index: number) => {
    dispatch({
      type: "UPDATE_CALCULATED_DATA",
      payload: { boolValue: isChecked, index, type: "selected" },
    });
  };
  const handleClick = () => {};

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
            {state.calculatedData.map((calculatedData, index) => (
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
        <button className="btn btn-primary" onClick={handleClick}>
          Get quotas
        </button>
      </div>
    </div>
  );
};

export default Calculations;
