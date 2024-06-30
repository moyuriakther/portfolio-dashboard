import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import { routeGenerator } from "../utils/routeGenerator";
import { portfolioPaths } from "./portfolio.routes";
// import { routeGenerator } from "../utils/routeGenerator";
// import { userPaths } from "./user.routes";

const router = createBrowserRouter([
//   {
//     path: "/dashboard",
//     element: <App />,
//   },
  {
    path: "/",
    element: <App />,
    children: routeGenerator(portfolioPaths),
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
export default router;
