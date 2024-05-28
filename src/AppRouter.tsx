import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

// Contexts
import { ContactFormContext } from "./contexts/ContactFormContext/ContactFormContext";

// Pages
import LandingPage from "./pages/landing-page/LandingPage";
import AboutPage from "./pages/about/AboutPage";

// components
import ContactFormModal from "./components/ContactForm/ContactForm";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

export default function AppRouter() {

  // Navigation menu items
  const NAVIGATION_MENU_ITEMS = [
    { href: '/#section-technologies', label: 'Technologies', threshold: 0.15 },
    { href: '/#section-roadmap', label: 'Roadmap', threshold: 0.50 },
    { href: '/#section-features', label: 'Features', threshold: 0.50 },
    { href: '/#section-pricing', label: 'Pricing', threshold: 0.50 },
    { href: '/#section-faq', label: 'FAQ', threshold: 0.15 },
    { href: '/about', label: 'About', threshold: 0.15 },
  ];

  const Layout = () => {
    const [showContactForm, setShowContactForm] = useState(false);

    /* <CODE TO HANDLE ANCHOR LINKS >
       Source: https://dev.to/mindactuate/scroll-to-anchor-element-with-react-router-v6-38op
       Slightly modified to work with the navbar height
    */
    const location = useLocation();
  
    // listen to location change using useEffect with location as dependency
    // https://jasonwatmore.com/react-router-v6-listen-to-location-route-change-without-history-listen
    useEffect(() => {
      const lastHash = location.hash.slice(1);

      if (lastHash && document.getElementById(lastHash)) {
        setTimeout(() => {
          const navbarHeight = document.querySelector('header')?.offsetHeight || 0;
          const element = document.getElementById(lastHash)
          if (element) {
            const elementPosition = element.getBoundingClientRect().top + window.scrollY
            window.scrollTo({
              top: elementPosition - navbarHeight,
              behavior: 'smooth'
            })
          }
        }, 100)
      } else {
        window.scrollTo(0, 0);
      }
    }, [location]);
    /* </CODE TO HANDLE ANCHOR LINKS > */

    return (
      <ContactFormContext.Provider value={{ showContactForm, setShowContactForm }}>
        <div className="relative flex flex-col bg-primary-dark">

        {/* Navigation Bar */}
        <NavBar navItems={NAVIGATION_MENU_ITEMS} />

        {/* Web Content */}
        <Outlet />

        {/* Modal Contact Form */}
        <ContactFormModal />
          
        </div>

        {/* Footer */}
        <Footer />

      </ContactFormContext.Provider>
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

        // everything else redirects to landing page
        {
          path: "*",
          element: <LandingPage />,//((accountId && signedIn) ? <Navigate to="/" replace /> : <Navigate to="/signin" replace />),
        },
      ],
    },
  ], {basename: "/"});

  return (
      <RouterProvider router={router} />
  )
}