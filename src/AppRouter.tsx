import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';


// Pages
import LandingPage from "./pages/landing-page/LandingPage";
import AboutPage from "./pages/about/AboutPage";

// components
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

export default function AppRouter() {

  // Navigation menu items
  const NAVIGATION_MENU_ITEMS = [
    { href: '/#section-how-it-works', label: 'How it Works', threshold: 0.15 },
    { href: '/#section-roadmap', label: 'Roadmap', threshold: 0.50 },
    { href: '/#section-features', label: 'Features', threshold: 0.50 },
    { href: '/#section-pricing', label: 'Pricing', threshold: 0.50 },
    { href: '/#section-faq', label: 'FAQ', threshold: 0.15 },
    { href: '/about', label: 'About', threshold: 0.15 },
  ];

  const Layout = () => {

    /* <CODE TO HANDLE ANCHOR LINKS >
       Source: https://dev.to/mindactuate/scroll-to-anchor-element-with-react-router-v6-38op
       Slightly modified to work with the navbar height
    */
    const location = useLocation();
    const lastHash = useRef('');
  
    // listen to location change using useEffect with location as dependency
    // https://jasonwatmore.com/react-router-v6-listen-to-location-route-change-without-history-listen
    useEffect(() => {
      lastHash.current = location.hash.slice(1);

      if (lastHash.current && document.getElementById(lastHash.current)) {
        setTimeout(() => {
          //  s
          const navbarHeight = document.querySelector('header')?.offsetHeight || 0;
          const element = document.getElementById(lastHash.current)
          if (element) {
            const elementPosition = element.getBoundingClientRect().top + window.scrollY
            window.scrollTo({
              top: elementPosition - navbarHeight,
              behavior: 'smooth'
            })
          }
          // s
        }, 100)
      } else {
        window.scrollTo(0, 0);
      }
    }, [location]);
    /* </CODE TO HANDLE ANCHOR LINKS > */

    return (
      <>
        <div className="relative flex flex-col bg-primary-dark">

        {/* Navigation Bar */}
        <NavBar navItems={NAVIGATION_MENU_ITEMS} />

        {/* Web Content */}
        <Outlet />
          
        </div>

        {/* Footer */}
        <Footer />
      </>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <LandingPage />,
        },
        {
          path: "about",
          element: <AboutPage />,
        },
        // {
        //   path: "/newpage",
        //   element: ((boolean expression) ? <Page1 /> : <Navigate to="/page2" replace />),
        // },

        // everything else redirects to landing page
        {
          path: "*",
          element: <LandingPage />,//((accountId && signedIn) ? <Navigate to="/" replace /> : <Navigate to="/signin" replace />),
        },
      ],
    },
  ], {basename: "/dev/"});

  return (
    <RouterProvider router={router} />
  )
}