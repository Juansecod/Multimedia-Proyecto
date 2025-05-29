import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../Pages/HomePage';
import HistoryPage from '../Pages/HistoryPage';
import FoxeyPage from '../Pages/FoxeyPage';
import LHODPage from '../Pages/LHODPage';
import BantuPage from '../Pages/BantuPage';
import ValhalaPage from '../Pages/ValhalaPage';

const routerUser = createBrowserRouter([
    {path: '/', element: <HomePage />},
    {path: '/History', element: <HistoryPage />},
    {path: '/Foxey', element: <FoxeyPage />},
    {path: '/LHOD', element: <LHODPage />},
    {path: '/Bantu', element: <BantuPage />},
    {path: '/Valhala', element: <ValhalaPage />}
  ]);

const routerDefault = createBrowserRouter([
  {path: '*', element: <HomePage />}
]);
  
export {routerUser, routerDefault};