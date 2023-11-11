import React, { useContext } from "react";
import { CalculatedResponse } from "../types";
import { DataContext } from "../context/DataContext";
import { Link } from "react-router-dom";

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

const Calculations = () => {
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
    <div className="card w-full bg-neutral p-2 flex justify-center shadow-md">
      <p className="card-title text-secondary text-2xl px-4 py-4">
        Calculations
      </p>
      <p className="text-primary px-4 py-0">
        Here you can find different options to enhance the energy performance of
        your house compared. The estimates are calculated based on the facts you
        have provided. You can check and modify your information on your
        profile.
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
        <Link to="/" className="btn btn-primary" onClick={handleClick}>
          Get quotas
        </Link>
      </div>
    </div>
  );
};

export default Calculations;
