import Quota from "./components/Quota";
import Home from "./components/Home";
import UserProfile from "./components/UserProfile";
import Navigation from "./components/Navigation";
import OfferTable from "./components/Offers";
import Offer from "./components/Offer";
import LoadingSpinner from "./components/LoadingSpinner";
import { DataProvider } from "./context/DataContext";
import {
  createBrowserRouter,
  RouterProvider,
  useLoaderData,
  Outlet,
} from "react-router-dom";
import { getHeatingOffers, getOffers, getOffer } from "./controllers/offers";
import { HeatingSolutionOffers, SolutionOffers, OfferResponse } from "./types";

const NavBarWrapper = () => {
  return (
    <div>
      <Navigation />
      <Outlet />
    </div>
  );
};

const NewOfferWrapper = () => {
  return (
    <div>
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
        path: "/",
        loader: async () => {
          const currentOffers: HeatingSolutionOffers[] = await getHeatingOffers();
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
        path: "/offers/:id/outstanding",
        loader: async ({ params }) => {
          const currentOffers: SolutionOffers = await getOffers(
            params.id || ""
          );
          return { currentOffers };
        },
        Component() {
          const data = useLoaderData() as {
            currentOffers: SolutionOffers;
          };
          return <OfferTable solution={data.currentOffers} />;
        },
      },
      {
        path: "/offers/:id",
        loader: async ({ params }) => {
          const offer = await getOffer(params.id || "");
          return { offer };
        },
        Component() {
          const data = useLoaderData() as {
            offer: OfferResponse;
          };
          console.log(data);
          return <Offer offer={data.offer} />;
        },
      },
      {
        path: "/newoffer",
        element: <NewOfferWrapper />,
        children: [
          {
            path: "/newoffer/calculations",
            Component() {
              return <Quota />;
            },
          },
          {
            path: "/newoffer",
            Component() {
              return <UserProfile showSubmitButton={true} />;
            },
          },
        ],
      },
    ],
  },
]);

const App = () => {
  return (
    <div
      data-theme="forest"
      className="bg-gradient-to-r from-green-200 to-green-400 min-h-screen"
    >
      <DataProvider>
        <RouterProvider router={router} fallbackElement={<LoadingSpinner />} />
      </DataProvider>
    </div>
  );
};

export default App;
