import { PageContainer } from '../../components/layout/PageContainer'
import { dashboardCopy } from '../../content/dashboardCopy'
import { usePageTitle } from '../../hooks/usePageTitle'
import { InsuranceCard, NominationAlert, TransactionsCard } from './AccountCards'
import { BalanceCard } from './BalanceCard'
import { DashboardGreeting } from './DashboardGreeting'
import { ContributionsCard, InvestmentMixCard } from './InvestmentCards'
import { QuickActions } from './QuickActions'
import { RetirementBanner } from './RetirementBanner'

// Source order follows the phone mockup; the desktop grid places the cards in rows.
export function DashboardPage() {
  usePageTitle(dashboardCopy.pageTitle)
  return (
    <PageContainer className="flex flex-col gap-6 py-6 lg:py-10">
      <DashboardGreeting />
      <RetirementBanner />
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-6">
        <BalanceCard />
        <QuickActions />
        <NominationAlert />
        <InvestmentMixCard />
        <ContributionsCard />
        <TransactionsCard />
        <InsuranceCard />
      </div>
    </PageContainer>
  )
}
