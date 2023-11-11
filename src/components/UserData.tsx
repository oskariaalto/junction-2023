import React from "react";
import { UserInputInfo } from "../types";

interface UserDataProps {
  userInfo: UserInputInfo;
}

const UserData: React.FC<UserDataProps> = ({ userInfo }) => {
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
            value={userInfo.street}
            readOnly
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
              readOnly
            />
          </div>
          <div className="">
            <p className="text-xs text-secondary">Budget</p>
            <input
              type="number"
              placeholder="John Doe"
              className="input input-xs text-sm text-primary w-full"
              value={userInfo.budget}
              readOnly
            />
          </div>
        </div>

        <div className="">
          <p className="text-xs text-secondary">Timeframe</p>
          <input
            type="text"
            placeholder="John Doe"
            className="input input-xs text-sm text-primary w-full"
            value={userInfo.urgency}
            readOnly
          />
        </div>
        <div className="block">
          <p className="text-xs text-secondary">Current heating solution</p>
          <input
            type="text"
            placeholder="John Doe"
            className="input input-xs text-sm text-primary w-full"
            value={userInfo.currentHeating}
            readOnly
          />
        </div>
      </div>
    </div>
  );
};

export default UserData;
