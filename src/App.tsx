import './global.css'

import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'

import { ThemeProvider } from './components/themes/theme-provider'
import { router } from './routes'

export function App() {
  return (
    <HelmetProvider>
      <ThemeProvider storageKey="pizzashop-theme" defaultTheme="system">
        <Helmet titleTemplate="%s | pizza.shop" />
        <Toaster richColors duration={1000 * 10 * 3} />
        <RouterProvider router={router} />
      </ThemeProvider>
    </HelmetProvider>
  )
}
