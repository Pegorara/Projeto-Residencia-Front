import { lazy } from 'react'

const Main = lazy(() => import('./views/main/Main'))
const Cadastro = lazy(()=> import('./views/Cadastro/Cadastro'))

export const routes = [
  { path: '/', exact: true, name: 'home' },
  { path: '/main', name: 'Main', element: Main },
  { path: '/cadastro', name: 'Cadastro', element: Cadastro},
]