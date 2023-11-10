import React from "react";
import { UserInputInfo } from "../types";

interface UserDataProps {
  userInfo: UserInputInfo;
}

const UserProfile: React.FC<UserDataProps> = ({ userInfo }) => {
  return (
    <div className="card bg-neutral w-full">
      <h1 className="card-title text-accent text-xl p-3 flex justify-center">
        {userInfo.name}
      </h1>
      <div className="card-body">
        <div className="">
          <p className="text-xs text-secondary">Address</p>
          <input
            type="text"
            placeholder="John Doe"
            className="input input-xs text-sm text-primary w-full"
            value={userInfo.address}
          />
        </div>
        <div className="flex gap-2 w-full">
          <div className="">
            <p className="text-xs text-secondary">Occupants</p>
            <input
              type="number"
              placeholder=""
              className="input input-xs text-sm text-primary w-full"
              value={userInfo.occupants}
            />
          </div>
          <div className="">
            <p className="text-xs text-secondary">Budget</p>
            <input
              type="number"
              placeholder="John Doe"
              className="input input-xs text-sm text-primary w-full"
              value={userInfo.budget}
            />
          </div>
        </div>

        <div className="flex gap-2 w-full">
            <div className="">
            <p className="text-xs text-secondary">Timeframe</p>
            <input
                type="text"
                placeholder="John Doe"
                className="input input-xs text-sm text-primary"
                value={userInfo.urgency}
            />
            </div>
            <div className="block">
            <p className="text-xs text-secondary">Current heating solution</p>
            <select>
                <option value="direct electric heating">Direct electric heating</option>
                <option value="oil">Oil</option>
                <option value = "natural gas">Natural gas</option>
                <option value = "district heating">District heating</option>
            </select>
            </div>
        </div>
        
        <div className="block">
          <p className="text-xs text-secondary">Desctiption</p>
          <textarea
            
            placeholder="John Doe"
            className="input input-xs text-sm text-primary w-full"
            value={userInfo.description}
          />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
