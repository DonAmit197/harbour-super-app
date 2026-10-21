import { plannerContent } from '../../content/plannerContent'
import { useAuth } from '../../features/auth/authContext'
import { retirementManagerEntryPath } from '../../features/auth/authPaths'
import { usePageTitle } from '../../hooks/usePageTitle'
import { PlannerBeforeYouStart } from './PlannerBeforeYouStart'
import { PlannerHero } from './PlannerHero'
import { PlannerManager } from './PlannerManager'
import { PlannerQuestions } from './PlannerQuestions'
import { PlannerTopics } from './PlannerTopics'

export function RetirementPlannerPage() {
  usePageTitle(plannerContent.pageTitle)
  const retirementManagerPath = retirementManagerEntryPath(useAuth().signedIn)

  return (
    <>
      <PlannerHero retirementManagerPath={retirementManagerPath} />
      <PlannerTopics />
      <PlannerManager retirementManagerPath={retirementManagerPath} />
      <PlannerBeforeYouStart />
      <PlannerQuestions />
    </>
  )
}
