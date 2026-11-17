import { ErrorBoundary } from '@components/error-boundary'
import { CardError } from '@components/home/tabs/card-error'
import { Loading } from '@components/home/tabs/loading'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@components/ui/tabs'
import { lazy, Suspense } from 'react'

const Overview = lazy(() => import('@components/home/tabs/overview'))
const Analytics = lazy(() => import('@components/home/tabs/analytics'))
const Reports = lazy(() => import('@components/home/tabs/reports'))
const Settings = lazy(() => import('@components/home/tabs/settings'))

export default function HomePage() {
  return (
    <div className="flex w-full grow items-center justify-center">
      <Tabs defaultValue="overview" className="w-100">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <Suspense fallback={<Loading />}>
            <Overview />
          </Suspense>
        </TabsContent>
        <TabsContent value="analytics">
          <Suspense fallback={<Loading />}>
            <ErrorBoundary fallback={<CardError />}>
              <Analytics />
            </ErrorBoundary>
          </Suspense>
        </TabsContent>
        <TabsContent value="reports">
          <Suspense fallback={<Loading />}>
            <Reports />
          </Suspense>
        </TabsContent>
        <TabsContent value="settings">
          <Suspense fallback={<Loading />}>
            <Settings />
          </Suspense>
        </TabsContent>
      </Tabs>
    </div>
  )
}
