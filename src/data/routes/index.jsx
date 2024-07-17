import { createBrowserRouter } from 'react-router-dom';

import Layout from '../../components/Layout';
import HomePage from '../../pages/home/Home';
import LoginPage from '../../pages/login/Login';
import SignUpPage from '../../pages/signup/SignUp';
import MyPage from '../../pages/mypage/MyPage';
import PostList from '../../pages/postlist/PostList';
import PostWriting from '../../pages/postwriting/PostWriting';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'signup',
        element: <SignUpPage />,
      },
      {
        path: 'mypage',
        element: <MyPage />,
      },
      {
        path: 'postwriting',
        element: <PostWriting />,
      },
      {
        path: 'postlist',
        element: <PostList />,
      },
    ],
  },
]);
