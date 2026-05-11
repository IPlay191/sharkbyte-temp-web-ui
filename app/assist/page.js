import { redirect } from 'next/navigation'

export default function AssistPage() {
  // server-side redirect
  redirect('https://airtable.com/appY1e4YbYhqNWdpE/shrOTn8TvmH292eCi')
}

export const metadata = {
  title: 'Redirecting to Assistance Form...',
  description: 'Redirecting to SharkByte assistance form',
}