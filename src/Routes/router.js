import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../Pages/HomePage';
import FoxeyPage from '../Pages/FoxeyPage';
import LHODPage from '../Pages/LHODPage';
import BantuPage from '../Pages/BantuPage';

const routerUser = createBrowserRouter([
    {path: '/', element: <HomePage />},
    {path: '/Foxey', element: <FoxeyPage />},
    {path: '/LHOD', element: <LHODPage />},
    {path: '/Bantu', element: <BantuPage />},
  ]);

const routerDefault = createBrowserRouter([
  {path: '*', element: <HomePage />}
]);
  
export {routerUser, routerDefault};