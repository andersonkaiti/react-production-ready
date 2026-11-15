import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@components/ui/card'

export default function Reports() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Reports</CardTitle>
        <CardDescription>
          Generate and download your detailed reports. Export data in multiple
          formats for analysis.
        </CardDescription>
      </CardHeader>
      <CardContent className="text-muted-foreground text-sm">
        You have 5 reports ready and available to export.
      </CardContent>
    </Card>
  )
}
