import React from "react";
import { UserInputInfo } from "../types";
import { Link } from "react-router-dom";

interface UserDataProps {
  userInfo: UserInputInfo;
  showSubmitButton: boolean;
}

const UserProfile: React.FC<UserDataProps> = ({
  userInfo,
  showSubmitButton,
}) => {
  const handleSubmission = () => {
    console.log("Submitting");
  };
  return (
    <div className="pt-3">
      <div className="card bg-neutral w-full p-2">
        <h1 className="card-title text-accent text-xl p-3 flex justify-center">
          {userInfo.name}
        </h1>
        <div className="card-body">
          <div className="">
            <p className="text-xs text-secondary">Address</p>
            <input
              type="text"
              placeholder="Your address"
              className="input input-xs text-sm text-primary w-full"
              value={userInfo.address}
            />
          </div>
          <div className="flex gap-2 w-full">
            <div className="">
              <p className="text-xs text-secondary">Postal code</p>
              <input
                type="text"
                placeholder="Postal code"
                className="input input-xs text-sm text-primary w-full"
                value={userInfo.postalCode}
              />
            </div> 
            <div className="">
              <p className="text-xs text-secondary">City</p>
              <input
                type="text"
                placeholder="City"
                className="input input-xs text-sm text-primary w-full"
                value={userInfo.city}
              />
            </div> 
          </div>
          <div className="flex gap-2 w-full">
            <div className="">
              <p className="text-xs text-secondary">Floor surface area (sqm)</p>
              <input
                type="number"
                placeholder="Your floor surface area (sqm)"
                className="input input-xs text-sm text-primary w-full"
                value={userInfo.houseSqm}
              />
            </div> 
            <div className="">
              <p className="text-xs text-secondary">Occupants</p>
              <input
                type="number"
                placeholder="Number of occupants"
                className="input input-xs text-sm text-primary w-full"
                value={userInfo.occupants}
              />
            </div> 
          </div>

           
          <div className="flex gap-2 w-full">
            <div className="">
              <p className="text-xs text-secondary">Budget</p>
              <input
                type="number"
                placeholder="Budget for the project"
                className="input input-xs text-sm text-primary w-full"
                value={userInfo.budget}
              />
            </div>
            <div className="">
              <p className="text-xs text-secondary">Timeframe</p>
              <input
                type="text"
                placeholder="The timeframe for the project"
                className="input input-xs text-sm text-primary"
                value={userInfo.urgency}
              />
            </div>
          </div>

          <div className="block">
              <p className="text-xs text-secondary">Current heating solution</p>
              <select className="select select-xs text-primary w-full">
                <option value="direct electric heating">
                  Direct electric heating
                </option>
                <option value="oil">Oil</option>
                <option value="natural gas">Natural gas</option>
                <option value="district heating">District heating</option>
              </select>
            </div>

          <div className="block">
            <p className="text-xs text-secondary">Description</p>
            <textarea
              placeholder="Describe your house and your needs"
              className="input input-xs text-sm text-primary w-full h-24 p-2"
              value={userInfo.description}
            />
          </div>
        </div>
        {showSubmitButton && (
          <div className="card-actions flex justify-center">
            <Link
              to="/calculations"
              className="btn btn-primary btn-wide"
              onClick={handleSubmission}
            >
              Save new offer
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
