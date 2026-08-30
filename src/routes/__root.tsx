import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '../lib/queryClient'
import { LanguageProvider } from '../context/LanguageContext'
import { CustomCursor } from '../components/CustomCursor'

import appCss from '../styles.css?url'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'ASR DataPulse | Enterprise Data Engineering & Generative AI RAG',
      },
      {
        name: 'description',
        content: 'High-velocity Enterprise Data Engineering, Secure RAG & AI Architectures, Automated ETL Pipelines, and Cloud Database Optimization.',
      },
    ],
    links: [
      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossOrigin: 'anonymous',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Alexandria:wght@300;400;500;600;700;800;900&family=Almarai:wght@300;400;700;800&family=Cairo:wght@400;500;600;700;800;900&family=IBM+Plex+Mono:wght@400;500;600;700&family=IBM+Plex+Sans+Arabic:wght@300;400;500;600;700&family=Outfit:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Readex+Pro:wght@300;400;500;600;700&family=Sora:wght@400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap',
      },
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" className="scroll-smooth">
      <head>
        <HeadContent />
      </head>
      <body className="bg-white text-slate-900 min-h-screen selection:bg-[#FFE6D5] selection:text-[#D9480F] antialiased overflow-x-hidden">
        <QueryClientProvider client={queryClient}>
          <LanguageProvider>
            {/* Custom Theme Interactive Mouse Cursor */}
            <CustomCursor />
            {children}
          </LanguageProvider>
        </QueryClientProvider>
        <Scripts />
      </body>
    </html>
  )
}
