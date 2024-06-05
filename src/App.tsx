import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import DetailPage from "./pages/detail/page";
import HomePage from "./pages/home/page";
import ResultPage from "./pages/result/page";
import WritePage from "./pages/write/page";
import Paths from "./paths";

const App = () => {
  const queryClient = new QueryClient();

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path={Paths.HOME} element={<HomePage />} />
        <Route path={Paths.WRITE} element={<WritePage />} />
        <Route path={Paths.RESULT} element={<ResultPage />} />
        <Route path={Paths.DETAIL_ID} element={<DetailPage />} />
      </>,
    ),
  );

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </>
  );
};

export default App;
