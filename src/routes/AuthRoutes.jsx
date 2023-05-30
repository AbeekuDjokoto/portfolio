import { Experience } from "../features/auth/layouts/Auth/views/Experience";
import { HomeLayout } from "../features/auth/layouts/Auth/views/HomeView";

const AuthRoutes = [
  {
    path: "",
    element: <HomeLayout />,
  },
  {
    path: "experience",
    element: <Experience />,
  },
];

export { AuthRoutes };
