import { AppSidebar } from '@components/app-sidebar'
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@components/ui/sidebar'
import { Router } from '@router/index'
import { setUser } from '@sentry/react'
import { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'

const account = {
  name: 'Test User',
  email: 'test@example.com',
  id: window.crypto.randomUUID(),
}

export function App() {
  useEffect(() => {
    if (import.meta.env.PROD) {
      setUser(account)
    }
  }, [])

  return (
    <BrowserRouter>
      <SidebarProvider>
        <AppSidebar />

        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
            <SidebarTrigger className="-ml-1" />
          </header>

          <Router />
        </SidebarInset>
      </SidebarProvider>
    </BrowserRouter>
  )
}
