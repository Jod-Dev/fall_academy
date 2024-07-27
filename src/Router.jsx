import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeOne from "./components/HomeOne/index.jsx";
import Academies from "./components/Academies/index.jsx";
import AboutUs from "./components/AboutUs/index.jsx";
import Contact from "./components/Contact/index.jsx";
import Error from "./components/Error/index.jsx";
import AboutUsTwo from "./components/AboutUs/AboutUsTwo.jsx";

import Layout from "./components/Helper/Layout.jsx";
import Registration from "./components/Registration/index.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        element: <HomeOne />,
      } /*
      {
        path: "/home-two",
        element: <HomeTwo />,
      },
      {
        path: "/home-three",
        element: <HomeThree />,
      },
      {
        path: "/home-four",
        element: <HomeFour />,
      },
      {
        path: "/home-five",
        element: <HomeFive />,
      },
      {
        path: "/home-six",
        element: <HomeSix />,
      },
      {
        path: "/home-seven",
        element: <HomeSeven />,
      },
      {
        path: "/home-eight",
        element: <HomeEight />,
      },
      {
        path: "/home-dark",
        element: <HomeDark />,
      },
      {
        path: "/home-rtl",
        element: <HomeRtl />,
      },
      {
        path: "/news",
        element: <News />,
      },
      {
        path: "/news/single-news",
        element: <SingleNews />,
      },
      */,
      {
        path: "/academies",
        element: <Academies />,
      },
      {
        path: "/mind-lecture",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      { path: "/registration", element: <Registration /> },
      {
        path: "/error",
        element: <Error />,
      },
      {
        path: "/about-us",
        element: <AboutUsTwo />,
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
]);

function Router() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default Router;
