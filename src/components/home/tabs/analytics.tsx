import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@components/ui/card'

export default function Analytics() {
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
      </CardContent>
    </Card>
  )
}
