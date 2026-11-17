import { Button } from '@components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@components/ui/card'
import { useTransition } from 'react'

export default function Analytics() {
  const [, startTransition] = useTransition()

  return (
    <Card>
      <CardHeader>
        <CardTitle>Analytics</CardTitle>
        <CardDescription>
          Track performance and user engagement metrics. Monitor trends and
          identify growth opportunities.
        </CardDescription>
      </CardHeader>
      <CardContent className="text-muted-foreground text-sm">
        Page views are up 25% compared to last month.
        <Button
          onClick={() => {
            startTransition(() => {
              throw new Error('error!')
            })
          }}
        >
          Throw an error
        </Button>
      </CardContent>
    </Card>
  )
}
