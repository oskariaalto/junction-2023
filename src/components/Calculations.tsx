import React, { useContext } from "react";
import { CalculatedResponse } from "../types";
import { DataContext } from "../context/DataContext";
import { useNavigate } from "react-router-dom";
import { updateSeletedUnits } from "../controllers/quota";

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
    <tr className="text-base">
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
      <td>{calculatedData.average_price} €</td>
      <td>{calculatedData.total_savings} €/y</td>
      <td>{calculatedData.total_co2_reduction} CO<sub>2</sub>/y</td>
    </tr>
  );
};

const Calculations = () => {
  const { state, dispatch } = useContext(DataContext);
  const navigate = useNavigate();

  const summary = state.intelligentSummary || "";
  //console.log(state.calculatedData);
  const handleCheckboxChange = (isChecked: boolean, index: number) => {
    dispatch({
      type: "UPDATE_CALCULATED_DATA",
      payload: { boolValue: isChecked, index, type: "selected" },
    });
  };
  const handleClick = async () => {
    console.log(state);
    await updateSeletedUnits(
      state.queryId,
      state.calculatedData
        .filter((offer) => offer.selected)
        .map((offer: CalculatedResponse) => offer.id)
    );
    navigate("/");
  };

  return (
    <div className="card w-full bg-neutral flex justify-center shadow-md p-6">
      <div className="card-title text-secondary text-5xl">
        Calculations.
      </div>
      {state.calculatedData.length !== 0 && (
        <p className="text-primary pt-4">
          {summary.length > 0
            ? summary
            : "Here you can find different options to enhance the energy performance of your house compared. The estimates are calculated based on the facts you have provided."}{" "}
          You can check and modify your information on your profile.
        </p>
      )}
      <div className="h-2/3">
        {state.calculatedData.length === 0 ? (
          <div className="flex justify-center h-full items-center">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        ) : (
          <>
            <div className="card-body overflow-x-auto py-4 px-0">
              <table className="table w-full text-primary">
                <thead>
                  <tr className="text-secondary text-base">
                    <th>Selected</th>
                    <th>Heating method</th>
                    <th>Average price</th>
                    <th>Annual cost savings</th>
                    <th>Annual CO<sub>2</sub> emissions savings</th>
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
            <div className="flex justify-center">
              <button className="btn btn-secondary" onClick={handleClick}>
                Get quotas
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Calculations;
