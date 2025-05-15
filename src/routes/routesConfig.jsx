import { CreatePost } from '../pages/CreatePost'
import { PostDetails } from '../pages/PostDetails'
import { DashboardPage } from '../pages/DashboardPage'
import { NotFoundPage } from '../pages/NotFoundPage'

export const routes = [
  {
    path: '/',
    element: <DashboardPage />,
    children: [
      {
        path: 'create',
        element: <CreatePost />,
      },
      {
        path: 'post/:id',
        element: <PostDetails />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]