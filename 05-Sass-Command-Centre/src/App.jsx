import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootLayout from './pages/Root.jsx';
import HomePage, { loader as assignmentsLoader } from './pages/Home.jsx';
import PlanetCampaignsPage, { loader as planetCampaignsLoader } from './pages/PlanetCampaigns.jsx';
import GalaxyMap, { loader as galaxyMapLoader } from './pages/GalaxyMap.jsx';
import ReportsPage, { loader as reportsLoader } from './pages/Reports.jsx';
import StatisticsPage, { loader as statisticsLoader } from './pages/Statistics.jsx';
import StratagemsPage, { loader as stratagemsLoader } from './pages/Stratagems.jsx';
import ErrorPage from './pages/Error.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '/',
        element: <HomePage />,
        loader: assignmentsLoader
      },
      {
        path: '/campaigns',
        element: <PlanetCampaignsPage />,
        loader: planetCampaignsLoader
      }, {
        path: '/galaxy-map',
        element: <GalaxyMap />,
        loader: galaxyMapLoader
      },
      {
        path: '/reports',
        element: <ReportsPage />,
        loader: reportsLoader
      },
      {
        path: '/statistics',
        element: <StatisticsPage />,
        loader: statisticsLoader
      },
      {
        path: '/stratagems',
        element: <StratagemsPage />,
        loader: stratagemsLoader
      },
    ]
  },
]);

function App() {

  return (
    <RouterProvider router={router} />
  )
};
export default App