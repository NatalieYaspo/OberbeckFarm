import React from 'react'
import ReactDOM from 'react-dom/client'
// Bringing in the required imports from 'react-router-dom' to set up application routing behavior
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//Bootstrap & Styling
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './bootstrap.css';
import './index.css';

// Bringing in the pages the router will use to conditionally show the appropriate views
import App from './App.jsx'  //Main page
//RENAME BELOW PAGES FOR WHAT WE NEED
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import DuesInfoPage from './pages/DuesInfoPage';
import EventsPage from './pages/EventsPage';
import BoardMembersPage from './pages/BoardMembersPage';
import NewResidentInfoPage from './pages/NewResidentInfoPage';

// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'home',
        element: <HomePage />,
      },
      {
        path: 'duesinfo',
        element: <DuesInfoPage />,
      },
      {
        path: 'events',
        element: <EventsPage />,
      },
      {
        path: 'boardmembers',
        element: <BoardMembersPage />,
      },
      {
        path: 'newresidentinfo',
        element: <NewResidentInfoPage />,
      },
    ],
  },
]);



// Render the RouterProvider component
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
