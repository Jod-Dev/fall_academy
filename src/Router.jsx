import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeOne from "./components/HomeOne/index.jsx";
import HomeTwo from "./components/HomeTwo/index.jsx";
import HomeThree from "./components/HomeThree/index.jsx";
import HomeFour from "./components/HomeFour/index.jsx";
import HomeFive from "./components/HomeFive/index.jsx";
import HomeSix from "./components/HomeSix/index.jsx";
import HomeSeven from "./components/HomeSeven/index.jsx";
import HomeEight from "./components/HomeEight/index.jsx";
import HomeDark from "./components/HomeDark/index.jsx";
import HomeRtl from "./components/HomeRtl/index.jsx";
import News from "./components/News/index.jsx";
import SingleNews from "./components/News/SingleNews.jsx";
import Academies from "./components/Academies/index.jsx";
import AboutUs from "./components/AboutUs/index.jsx";
import Contact from "./components/Contact/index.jsx";
import Error from "./components/Error/index.jsx";
import AboutUsTwo from "./components/AboutUs/AboutUsTwo.jsx";
import Shops from "./components/Shops/index.jsx";
import ShopDetails from "./components/Shops/Details";
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
      },
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
      {
        path: "/academies",
        element: <Academies />,
      },
      {
        path: "/about-us1",
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
        path: "/shops",
        element: <Shops />,
      },
      {
        path: "/shops/shop-details",
        element: <ShopDetails />,
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
