import { HomePage } from '@pages/home'
import { LeadsPage } from '@pages/leads'
import { routes } from '@router/routes'
import { Route, Routes } from 'react-router-dom'

export function Router() {
  return (
    <Routes>
      <Route path={routes.home} element={<HomePage />} />
      <Route path={routes.leads} element={<LeadsPage />} />
    </Routes>
  )
}
