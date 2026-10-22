import { PageContainer } from '../../components/layout/PageContainer'
import { retirementManagerContent } from '../../content/retirementManagerContent'
import { ConstellationEmbed } from '../../features/pega/ConstellationEmbed'
import { usePageTitle } from '../../hooks/usePageTitle'
import { ManagerBreadcrumb } from './ManagerBreadcrumb'
import { ManagerSidePanel } from './ManagerSidePanel'

export function RetirementManagerPage() {
  usePageTitle(retirementManagerContent.pageTitle)
  return (
    <PageContainer className="flex flex-col gap-6 py-6 lg:py-10">
      <ManagerBreadcrumb />
      <div className="flex flex-col gap-2">
        <h1 className="text-display-l">{retirementManagerContent.title}</h1>
        <p className="text-body-l text-slate">{retirementManagerContent.intro}</p>
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <ConstellationEmbed />
        </div>
        <div className="lg:col-span-4">
          <ManagerSidePanel />
        </div>
      </div>
    </PageContainer>
  )
}
