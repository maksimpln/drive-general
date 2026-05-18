import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Routes } from './routes';

const router = createBrowserRouter(Routes, {
  basename: import.meta.env.BASE_URL.replace(/\/$/, ''),
});

export const Router = () => {
  return <RouterProvider router={router} />;
};
