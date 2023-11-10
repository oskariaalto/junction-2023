import UserData from "./UserData";
import { UserInputInfo } from "../types";

const sampleUserData: UserInputInfo = {
  name: "John Doe",
  houseSqm: 150,
  currentHeating: 2, // Assuming 2 represents a certain type of heating system
  address: "123 Main St, City, Country",
  occupants: 3,
  budget: 10000,
  urgency: 1, // Assuming 1 represents low urgency
};

const QuotaTable = () => {
  return (
    <div className="flex p-2 gap-3">
      <div className="w-3/12">
        <UserData userInfo={sampleUserData} />
      </div>
      <div className="card w-full bg-white">
        <p className="card-title text-black text-2xl px-4 py-3">Calculations</p>
        <div className="card-body overflow-x-auto">
          <table className="table w-full text-black">
            <thead>
              <tr className="text-black">
                <th>Selected</th>
                <th>Heating method</th>
                <th>Average price</th>
                <th>Annual cost savings</th>
                <th>Annual CO2 emissions savings</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default QuotaTable;
