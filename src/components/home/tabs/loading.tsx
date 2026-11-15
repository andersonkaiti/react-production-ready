import { Card } from '@components/ui/card'
import { Loader2 } from 'lucide-react'

export function Loading() {
  return (
    <Card className="grid place-items-center">
      <Loader2 className="animate-spin" />
    </Card>
  )
}
