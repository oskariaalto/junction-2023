import Quota from "./components/Quota";
import Home from "./components/Home";
import UserProfile from "./components/UserProfile";
import Navigation from "./components/Navigation";
import OfferTable from "./components/Offers";
import {
  createBrowserRouter,
  RouterProvider,
  useLoaderData,
  Outlet,
} from "react-router-dom";
import { getCalculatedValues } from "./controllers/quota";
import { getUser, getOffers } from "./controllers/user";
import { CalculatedInfo, UserInputInfo, HeatingSolutionOffers } from "./types";

const NavBarWrapper = () => {
  return (
    <div>
      <Navigation />
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBarWrapper />,
    children: [
      {
        path: "/calculations",
        loader: async () => {
          const calculatedValues: Array<CalculatedInfo> = await getCalculatedValues();
          return { calculatedValues };
        },
        Component() {
          const data = useLoaderData() as {
            calculatedValues: Array<CalculatedInfo>;
          };
          return <Quota calculatedValues={data.calculatedValues} />;
        },
      },
      {
        path: "/",
        loader: async () => {
          const currentOffers: HeatingSolutionOffers[] = await getOffers();
          return { currentOffers };
        },
        Component() {
          const data = useLoaderData() as {
            currentOffers: HeatingSolutionOffers[];
          };
          return <Home offers={data.currentOffers} />;
        },
      },
      {
        path: "/profile",
        loader: async () => {
          const user: UserInputInfo = await getUser();
          return { user };
        },
        Component() {
          const data = useLoaderData() as { user: UserInputInfo };
          return <UserProfile userInfo={data.user} showSubmitButton={false} />;
        },
      },
      {
        path: "/quotas",
        loader: async () => {
          const currentOffers: HeatingSolutionOffers = await getOffers();
          return { currentOffers };
        },
        Component() {
          const data = useLoaderData() as {
            currentOffers: HeatingSolutionOffers[];
          };
          return <OfferTable solution={data.currentOffers[0]} />;
        },
      },
    ],
  },
]);

const App = () => {
  return (
    <div data-theme="forest">
      <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
    </div>
  );
};

export default App;
