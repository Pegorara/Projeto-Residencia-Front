import { lazy } from 'react'

const Main = lazy(() => import('./views/main/Main'))

export const routes = [
  { path: '/', exact: true, name: 'home' },
  { path: '/main', name: 'Main', element: Main },
]