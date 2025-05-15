import { BrowserRouter as Router } from 'react-router-dom'
import { useRoutes } from 'react-router-dom'
import { routes } from './routesConfig'

export const AppRoutes = () => {
  const element = useRoutes(routes)
  return <Router>{element}</Router>
}