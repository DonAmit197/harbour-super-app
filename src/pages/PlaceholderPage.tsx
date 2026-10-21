import { PageContainer } from '../components/layout/PageContainer'
import { usePageTitle } from '../hooks/usePageTitle'

type PlaceholderPageProps = { title: string }

// Stands in for pages until their own task builds them.
export function PlaceholderPage({ title }: PlaceholderPageProps) {
  usePageTitle(title)
  return (
    <PageContainer className="flex min-h-96 flex-col gap-4 py-12">
      <h1 className="text-display-l">{title}</h1>
      <p className="text-body-l text-slate">This page is built in a later task.</p>
    </PageContainer>
  )
}
