import { AlertTriangle } from 'lucide-react'
import { useLocation } from 'react-router-dom'

export function ErrorMessage() {
  const { pathname } = useLocation()

  return (
    <div className="flex w-full grow flex-col items-center justify-center gap-2">
      <AlertTriangle className="text-destructive size-8" />
      <p className="text-destructive font-medium">Algo deu errado</p>
      <p className="text-muted-foreground text-sm">
        Não foi possível carregar a página {pathname}
      </p>
    </div>
  )
}
