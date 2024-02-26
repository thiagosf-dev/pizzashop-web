import { Outlet } from 'react-router-dom'

import { Header } from '@/components/header'

export function AppLayout() {
  return (
    <div className="flex min-h-screen flex-col antialiased">
      <Header />

      <div className="pt6 flex flex-1 flex-col gap-4 p-8">
        <Outlet />
      </div>
    </div>
  )
}