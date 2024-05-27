// import Allvideo from "./routes/Allvideo";
// import Donor from "./routes/Donor";
// import Footer from "./components/Footer";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Contact from "./routes/Contact";
// import Root from "./routes/root";
// import Volreg from "./routes/Volreg";
// import News from "./routes/News";
// import About from "./routes/About";
// import Project from "./routes/Project";
// import Gallery from "./routes/Gallery";

// import Login from "./routes/donationpart/Login";
// import Donation from "./routes/donationpart/Donation";
// import DonationCardDetails from "./routes/donationpart/DonationCardDetails";
// import ZakatCal from "./routes/donationpart/ZakatCal";
// import TermConditions from "./routes/donationpart/TermConditions";
// import Privacy from "./routes/donationpart/Privacy";
// import Account from "./routes/donationpart/Account";


// function App() {
//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <Root />,
//     },
//     {
//       path: "/about",
//       element: <About />,
//     },
//     {
//       path: "/project",
//       element: <Project />,
//     },
//     {
//       path: "/donor",
//       element: <Donor />,
//     },
//     {
//       path: "/gallery",
//       element: <Gallery />,
//     },
//     {
//       path: "/video",
//       element: <Allvideo />,
//     },
//     {
//       path: "/volreg",
//       element: <Volreg />,
//     },
//     {
//       path: "/news",
//       element: <News />,
//     },
//     {
//       path: "/contact",
//       element: <Contact />,
//     },
//     {
//       path: "/login",////used for login(account)
//       element: <Login />,
//     },
//     {
//       path: "/account",////used for login(account)
//       element: <Account />,
//     },
//     {
//       path: "/donation",////used for donation
//       element: <Donation />,
//     },
//     {
//       path: "/donation_cart",////used for donation
//       element: <DonationCardDetails />,
//     },
//     {
//       path: "/cal_zakat",////used for donation
//       element: <ZakatCal />,
//     },
//     {
//       path: "/term",////used for donation
//       element: <TermConditions />,
//     },
//     {
//       path: "/privacy",////used for donation
//       element: <Privacy />,
//     },
//   ]);

//   return (
//     <>
//       <RouterProvider router={router} />
//       <Footer />
//     </>
//   );
// }

// export default App;
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Root from "./routes/root";
import About from "./routes/About";
import Project from "./routes/Project";
import Donor from "./routes/Donor";
import Gallery from "./routes/Gallery";
import Allvideo from "./routes/Allvideo";
import Volreg from "./routes/Volreg";
import News from "./routes/News";
import Contact from "./routes/Contact";
import Login from "./routes/donationpart/Login";
import Account from "./routes/donationpart/Account";
import Donation from "./routes/donationpart/Donation";
import DonationCardDetails from "./routes/donationpart/DonationCardDetails";
import ZakatCal from "./routes/donationpart/ZakatCal";
import TermConditions from "./routes/donationpart/TermConditions";
import Privacy from "./routes/donationpart/Privacy";
import NewsSinglepage from "./routes/NewsSinglepage";

function App () {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/donor" element={<Donor />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/video" element={<Allvideo />} />
        <Route path="/volreg" element={<Volreg />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/account" element={<Account />} />
        <Route path="/donation" element={<Donation />} />
        <Route path="/donation_cart" element={<DonationCardDetails />} />
        <Route path="/cal_zakat" element={<ZakatCal />} />
        <Route path="/term" element={<TermConditions />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/singlenews" element={<NewsSinglepage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
