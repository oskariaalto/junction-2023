import Quota from "./components/Quota";
import {
  createBrowserRouter,
  RouterProvider,
  useLoaderData,
} from "react-router-dom";
import { getCalculatedValues } from "./controllers/quota";
import { CalculatedInfo } from "./types";

const router = createBrowserRouter([
  {
    path: "/quota",
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
]);

const App = () => {
  return (
    <div data-theme="forest">
      <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
    </div>
  );
};

export default App;
