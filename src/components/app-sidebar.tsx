import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from '@components/ui/sidebar'
import { routes } from '@router/routes'
import { HomeIcon, LayoutDashboardIcon, UsersIcon } from 'lucide-react'
import type { ComponentProps } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const navItems = [
  { title: 'Home', url: routes.home, icon: HomeIcon },
  { title: 'Leads', url: routes.leads, icon: UsersIcon },
]

export function AppSidebar({ ...props }: ComponentProps<typeof Sidebar>) {
  const { pathname } = useLocation()

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <div className="flex h-12 items-center gap-2 px-2">
          <div className="flex size-8 items-center justify-center rounded-lg bg-zinc-900 text-zinc-50 dark:bg-zinc-100 dark:text-zinc-900">
            <LayoutDashboardIcon className="size-4" />
          </div>
          <span className="text-sm font-semibold">Painel</span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map(({ title, url, icon: Icon }) => (
                <SidebarMenuItem key={title}>
                  <SidebarMenuButton
                    isActive={pathname === url}
                    render={<NavLink to={url} />}
                  >
                    <Icon />
                    {title}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
