import {createBrowserRouter} from 'react-router';
import Layout from './components/containers/Layout/Layout.tsx';
import MainPage from './pages/MainPage/MainPage.tsx';
import NewsPage from './pages/NewsPage/NewsPage.tsx';
import LayoutWithFooter from './components/containers/Layout/LayoutWithFooter.tsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
    ],
  },
  {
    path: '/news',
    element: <LayoutWithFooter />,
    children: [
      {
        path: ':id',
        element: <NewsPage />,
      },
    ],
  },
]);