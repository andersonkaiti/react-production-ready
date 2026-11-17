import { Card, CardContent } from '@components/ui/card'

export function CardError() {
  return (
    <Card>
      <CardContent>
        <p className="text-destructive">Erro!</p>
      </CardContent>
    </Card>
  )
}
