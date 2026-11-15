import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@components/ui/card'

export default function Settings() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Settings</CardTitle>
        <CardDescription>
          Manage your account preferences and options. Customize your experience
          to fit your needs.
        </CardDescription>
      </CardHeader>
      <CardContent className="text-muted-foreground text-sm">
        Configure notifications, security, and themes.
      </CardContent>
    </Card>
  )
}
