import { ErrorBoundary } from '@components/error-boundary'
import { ErrorMessage } from '@router/error-message'
import { Loading } from '@router/loading'
import { routes } from '@router/routes'
import { lazy, Suspense } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'

const HomePage = lazy(() => import('@pages/home'))
const LeadsPage = lazy(() => import('@pages/leads'))

export function Router() {
  const { pathname } = useLocation()

  return (
    <Suspense key={pathname} fallback={<Loading />}>
      <ErrorBoundary fallback={<ErrorMessage />}>
        <Routes>
          <Route path={routes.home} element={<HomePage />} />
          <Route path={routes.leads} element={<LeadsPage />} />
        </Routes>
      </ErrorBoundary>
    </Suspense>
  )
}
