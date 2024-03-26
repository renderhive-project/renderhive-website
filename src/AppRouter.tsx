import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// Pages
import LandingPage from "./pages/landing-page/LandingPage";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Navigation menu items
const NAVIGATION_MENU_ITEMS = [
  { href: '#section-how-it-works', label: 'How it Works', threshold: 0.15 },
  { href: '#section-roadmap', label: 'Roadmap', threshold: 0.50 },
  { href: '#section-features', label: 'Features', threshold: 0.50 },
  { href: '#section-pricing', label: 'Pricing', threshold: 0.50 },
  { href: '#section-faq', label: 'FAQ', threshold: 0.15 },
];

export default function AppRouter() {

  const Layout = () => {
    // const location = useLocation();

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
          path: "/",
          element: <LandingPage />,
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
  ]);

  return (
    <RouterProvider router={router} />
  )
}