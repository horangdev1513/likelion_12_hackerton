import { createBrowserRouter, Navigate } from 'react-router-dom';

import HomePage from '../../pages/home/Home';
import LoginPage from '../../pages/login/Login';
import SignUpPage from '../../pages/signup/SignUp';

import PostList from '../../pages/postlist/PostList';
import { PostWriting } from '../../pages/postwriting';
import MainPage from '../../pages/main/Main';

import { MyPage } from '../../pages/mypage';
import { MyPageMyPosts } from '../../pages/mypage_myposts';
import { MyPageMyComments } from '../../pages/mypage_mycomments';
import { Layout, MainLayout, CreatePostLayout, PostListLayout, MyPageLayout } from '../../components/Layout';
import { PostDetail } from '../../pages/postdetail';
import { MyPostsDetail } from '../../pages/mypage_myposts_detail';
import { MyCommentsDetail } from '../../pages/mypage_mycomments_detail';

export const router = createBrowserRouter([
  {
    path: '/app',
    children: [
      {
        path: 'createpost',
        element: <CreatePostLayout />,
        children: [
          {
            index: true,
            element: <PostWriting />,
          },
        ],
      },
      {
        path: 'posts',
        element: <PostListLayout />,
        children: [
          {
            index: true,
            element: <PostList />,
          },
          {
            path: ':id',
            element: <PostDetail />,
          },
        ],
      },
      {
        path: 'main',
        element: <MainLayout />,
        children: [
          {
            index: true,
            element: <MainPage />,
          },
        ],
      },
      {
        path: 'mypage',
        element: <MyPageLayout />,
        children: [
          {
            index: true,
            element: <MyPage />,
          },
          {
            path: 'myposts',
            children: [
              {
                index: true,
                element: <MyPageMyPosts />,
              },
              {
                path: ':id',
                element: <MyPostsDetail />,
              },
            ],
          },
          {
            path: 'mycomments',
            children: [
              {
                index: true,
                element: <MyPageMyComments />,
              },
              {
                path: ':id',
                element: <MyCommentsDetail />,
              },
            ],
          },
        ],
      },
    ],
  },
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
    ],
  },
]);
