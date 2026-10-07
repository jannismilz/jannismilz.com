import { Layout } from '@/components/Layout'

/** Everything in the regular paper: masthead, letter column, footer. */
export default function SiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <Layout>{children}</Layout>
}
