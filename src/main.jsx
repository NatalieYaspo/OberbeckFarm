import React from 'react'
import ReactDOM from 'react-dom/client'
// Bringing in the required imports from 'react-router-dom' to set up application routing behavior
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//Bootstrap & Styling
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css';

// Bringing in the pages the router will use to conditionally show the appropriate views
import App from './App.jsx'  //Main page
//RENAME BELOW PAGES FOR WHAT WE NEED
// import ErrorPage from './pages/ErrorPage';
// import AboutMePage from './pages/AboutMePage';
// import PortfolioPage from './pages/PortfolioPage';
// import ContactPage from './pages/ContactPage';
// import ResumePage from './pages/ResumePage';

// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <AboutMePage/>,//RENAME
      },
      {
        path: 'aboutme',
        element: <AboutMePage />,//RENAME
      },
      {
        path: 'portfolio',
        element: <PortfolioPage />,//RENAME
      },
      {
        path: 'contact',
        element: <ContactPage />,//RENAME
      },
      {
        path: 'resume',
        element: <ResumePage />, //RENAME
      },
    ],
  },
]);



// Render the RouterProvider component
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
