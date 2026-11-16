import { captureException } from '@sentry/react'
import { Component, type ReactNode } from 'react'

interface IErrorBoundaryProps {
  children: ReactNode
  fallback?: ReactNode
}

interface IErrorBoundaryState {
  hasError: boolean
}

export class ErrorBoundary extends Component<
  IErrorBoundaryProps,
  IErrorBoundaryState
> {
  state: IErrorBoundaryState = {
    hasError: false,
  }

  static getDerivedStateFromError() {
    return {
      hasError: true,
    }
  }

  componentDidCatch(error: Error): void {
    captureException(error)
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback
    }

    return this.props.children
  }
}
