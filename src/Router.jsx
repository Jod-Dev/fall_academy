import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeOne from "./components/HomeOne/index.jsx";
import Academies from "./components/Academies/index.jsx";
import SingleNews from "./components/News/SingleNews.jsx";
import AboutUs from "./components/AboutUs/index.jsx";
import Contact from "./components/Contact/index.jsx";
import Error from "./components/Error/index.jsx";
import AboutUsTwo from "./components/AboutUs/AboutUsTwo.jsx";
import Layout from "./components/Helper/Layout.jsx";
import Registration from "./components/Registration/index.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomeOne />,
      },
      {
        path: "academy",
        element: <Academies />,
      },
      {
        path: "academy/:title",
        element: <SingleNews />,
      },
      {
        path: "mind-lecture",
        element: <AboutUs />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "registration",
        element: <Registration />,
      },
      {
        path: "error",
        element: <Error />,
      },
      {
        path: "about-us",
        element: <AboutUsTwo />,
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
]);

function AppRouter() {
  return <RouterProvider router={router} />;
}

export default AppRouter;
