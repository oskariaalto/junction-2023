import React, { useContext } from "react";
import { Payload, CalculatedResponse } from "../types";
import { Link } from "react-router-dom";
import { DataContext } from "../context/DataContext";
import { createQuerie } from "../controllers/quota";

interface UserDataProps {
  showSubmitButton: boolean;
}

const UserProfile: React.FC<UserDataProps> = ({ showSubmitButton }) => {
  const { state, dispatch } = useContext(DataContext);
  const handleSubmission = async () => {
    dispatch({
      type: "SET_CALCULATED_DATA",
      payload: { calculatedData: [] },
    });
    const response = await createQuerie(state.userData);
    const query = response.query;
    const data = query.summary.data.map((sum: CalculatedResponse) => ({
      ...sum,
      price: 1000,
      selected: false,
    }));
    dispatch({
      type: "SET_CALCULATED_DATA",
      payload: { calculatedData: data },
    });
    dispatch({
      type: "ADD_INTELLIGENT_SUMMARY",
      payload: { strValue: query.summary.intelligent_summary },
    });
    dispatch({
      type: "SET_Query_ID",
      payload: { numValue: query.id },
    });
    //console.log(state.calculatedData);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
    obj: Payload,
    type: string
  ) => {
    e.preventDefault();
    console.log(obj);
    dispatch({
      type: type,
      payload: obj,
    });
  };
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-1/3 items-center">
        <div className="card bg-neutral w-full p-2 shadow-xl">
          <h1 className="card-title text-secondary font-bold text-3xl px-6 pt-4 flex justify-center">
            Input your data
          </h1>
          <div className="card-body px-4 pb-4">
            <div className="w-full">
              <p className="text-3xs text-secondary">Address</p>
              <input
                type="text"
                placeholder="Your address"
                className="input input-xs text-sm text-primary w-full shadow-sm"
                value={state.userData.street}
                onChange={(e) =>
                  handleChange(
                    e,
                    { strValue: e.target.value, type: "street" },
                    "UPDATE_USER_INFO_STR"
                  )
                }
              />
            </div>
            <div className="flex gap-2 justify-center">
              <div className="w-full">
                <p className="text-3xs text-secondary">Postal code</p>
                <input
                  type="text"
                  placeholder="Postal code"
                  className="input input-xs text-sm text-primary w-full shadow-sm"
                  value={state.userData.postalCode}
                  onChange={(e) =>
                    handleChange(
                      e,
                      { strValue: e.target.value, type: "postalCode" },
                      "UPDATE_USER_INFO_STR"
                    )
                  }
                />
              </div>
              <div className="w-full">
                <p className="text-3xs text-secondary">City</p>
                <input
                  type="text"
                  placeholder="City"
                  className="input input-xs text-sm text-primary w-full shadow-sm"
                  value={state.userData.city}
                  onChange={(e) =>
                    handleChange(
                      e,
                      { strValue: e.target.value, type: "city" },
                      "UPDATE_USER_INFO_STR"
                    )
                  }
                />
              </div>
            </div>
            <div className="flex gap-2 w-full justify-center">
              <div className="w-full">
                <p className="text-3xs text-secondary">Floor surface area</p>
                <input
                  type="number"
                  placeholder="(sqm)"
                  className="input input-xs text-sm text-primary w-full shadow-sm"
                  value={
                    state.userData.houseSqm === 0 ? "" : state.userData.houseSqm
                  }
                  onChange={(e) =>
                    handleChange(
                      e,
                      { numValue: Number(e.target.value), type: "houseSqm" },
                      "UPDATE_USER_INFO_NUM"
                    )
                  }
                />
              </div>
              <div className="w-full">
                <p className="text-2xs text-secondary">Occupants</p>
                <input
                  type="number"
                  placeholder="Number of occupants"
                  className="input input-xs text-sm text-primary w-full shadow-sm"
                  value={
                    state.userData.occupants === 0
                      ? ""
                      : state.userData.occupants
                  }
                  onChange={(e) =>
                    handleChange(
                      e,
                      { numValue: Number(e.target.value), type: "occupants" },
                      "UPDATE_USER_INFO_NUM"
                    )
                  }
                />
              </div>
            </div>

            <div className="flex gap-2 w-full justify-center">
              <div className="w-full">
                <p className="text-2xs text-secondary">Budget</p>
                <input
                  type="number"
                  placeholder="Budget"
                  className="input input-xs text-sm text-primary w-full shadow-sm"
                  value={
                    state.userData.budget === 0 ? "" : state.userData.budget
                  }
                  onChange={(e) =>
                    handleChange(
                      e,
                      { numValue: Number(e.target.value), type: "budget" },
                      "UPDATE_USER_INFO_NUM"
                    )
                  }
                />
              </div>
              <div className="w-full">
                <p className="text-2xs text-secondary">Timeframe</p>
                <input
                  type="text"
                  placeholder="The timeframe for the project"
                  className="input input-xs text-sm text-primary w-full shadow-sm"
                  value={state.userData.urgency}
                  onChange={(e) =>
                    handleChange(
                      e,
                      { numValue: Number(e.target.value), type: "urgency" },
                      "UPDATE_USER_INFO_NUM"
                    )
                  }
                />
              </div>
            </div>

            <div className="block mx-auto w-full">
              <p className="text-2xs text-secondary">
                Current heating solution
              </p>
              <select
                className="select select-xs text-primary w-full shadow-sm"
                value={state.userData.currentHeating}
                onChange={(e) =>
                  handleChange(
                    e,
                    { strValue: e.target.value, type: "currentHeating" },
                    "UPDATE_USER_INFO_STR"
                  )
                }
              >
                <option value="direct electric heating">
                  Direct electric heating
                </option>
                <option value="oil">Oil</option>
                <option value="natural gas">Natural gas</option>
                <option value="district heating">District heating</option>
              </select>
            </div>

            <div className="block mx-auto w-full">
              <p className="text-2xs text-secondary">Description</p>
              <textarea
                placeholder="Describe your house and your needs"
                className="input input-xs text-sm text-primary w-full h-24 p-2 shadow-sm"
                value={state.userData.description}
                onChange={(e) =>
                  handleChange(
                    e,
                    { strValue: e.target.value, type: "description" },
                    "UPDATE_USER_INFO_STR"
                  )
                }
              />
            </div>
          </div>
          {showSubmitButton && (
            <div className="card-actions flex justify-center">
              <Link
                to="/newoffer/calculations"
                className="btn btn-wide shadow-sm"
                onClick={handleSubmission}
              >
                Save new offer
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
