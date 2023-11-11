import Quota from "./components/Quota";
import Home from "./components/Home";
import UserProfile from "./components/UserProfile";
import Navigation from "./components/Navigation";
import OfferTable from "./components/Offers";
import Offer from "./components/Offer";
import { DataProvider } from "./context/DataContext";
import {
  createBrowserRouter,
  RouterProvider,
  useLoaderData,
  Outlet,
} from "react-router-dom";
import { getCalculatedValues } from "./controllers/quota";
import { getOffers } from "./controllers/user";
import { CalculatedInfo, HeatingSolutionOffers } from "./types";

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
        Component() {
          return <UserProfile showSubmitButton={false} />;
        },
      },
      {
        path: "/offers",
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
      {
        path: "/offers/:id",
        loader: async () => {
          const currentOffers: HeatingSolutionOffers = await getOffers();
          console.log(currentOffers);
          return { currentOffers };
        },
        Component() {
          const data = useLoaderData() as {
            currentOffers: HeatingSolutionOffers[];
          };
          return <Offer offer={data.currentOffers[0].offers[0]} />;
        },
      },
    ],
  },
]);

const App = () => {
  return (
    <div data-theme="forest">
      <DataProvider>
        <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
      </DataProvider>
    </div>
  );
};

export default App;
