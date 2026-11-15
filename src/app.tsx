import { AppSidebar } from '@components/app-sidebar'
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@components/ui/sidebar'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './router'

export function App() {
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
