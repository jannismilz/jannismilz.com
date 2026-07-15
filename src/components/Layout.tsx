import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Container className="flex min-h-full flex-col pt-4 sm:pt-6">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </Container>
  )
}
