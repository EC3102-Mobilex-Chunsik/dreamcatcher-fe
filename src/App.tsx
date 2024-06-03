import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import HomePage from "./pages/home/page";
import Paths from "./paths";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path={Paths.HOME} element={<HomePage />} />
      </>,
    ),
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
