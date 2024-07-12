import { type Metadata } from 'next'

import { SimpleLayout } from '@/components/SimpleLayout'

export const metadata: Metadata = {
  title: 'Please check your inbox',
  description: 'Confirm your subscription in your inbox',
}

export default function ConfirmSubscription() {
  return (
    <SimpleLayout
      title="Please check your inbox"
      intro="To get big news from me or interesting topics I want to share with you, please confirm your subscription by clicking the link in the email I’ve just sent you."
    />
  )
}
