import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main/Main";
import Home from "../components/Home/Home/Home";
import Profile from "../components/Profile/Profile";
import Activities from "../components/Activities/Activities";
import Schedule from "../components/Schedule/Schedule";
import Settings from "../components/Settings/Settings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      { path: "profile", element: <Profile /> },
      { path: "activities", element: <Activities /> },
      { path: "schedule", element: <Schedule /> },
      { path: "settings", element: <Settings /> },
    ],
  },
]);

export default router;
