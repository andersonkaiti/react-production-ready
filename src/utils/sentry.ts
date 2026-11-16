import {
  browserTracingIntegration,
  consoleLoggingIntegration,
  init,
} from '@sentry/react'

init({
  enabled: import.meta.env.PROD,
  dsn: import.meta.env.VITE_SENTRY_DSN,
  integrations: [
    browserTracingIntegration(),
    consoleLoggingIntegration({
      levels: ['log', 'warn', 'error'],
    }),
  ],
  tracesSampleRate: 1.0,
  tracePropagationTargets: ['localhost'],
  replaysSessionSampleRate: 0,
  replaysOnErrorSampleRate: 0,
})
