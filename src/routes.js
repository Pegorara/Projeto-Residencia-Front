import { lazy } from 'react'

const Main = lazy(() => import('./views/main/Main'))
const Carrinho = lazy(() => import('./views/carrinho/Carrinho'))

export const routes = [
  { path: '/', exact: true, name: 'home' },
  { path: '/main', name: 'Main', element: Main },
  { path: '/carrinho', name: 'Carrinho', element: Carrinho },
]