import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Routes } from './routes';

const router = createBrowserRouter(Routes);

export const Router = () => {
  return <RouterProvider router={router} />;
};
