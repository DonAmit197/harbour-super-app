import { homeContent } from '../../content/homeContent'
import { usePageTitle } from '../../hooks/usePageTitle'
import { HomeHelp } from './HomeHelp'
import { HomeHero } from './HomeHero'
import { HomeStats } from './HomeStats'
import { HomeSteps } from './HomeSteps'
import { HomeTopics } from './HomeTopics'

export function HomePage() {
  usePageTitle(homeContent.pageTitle)
  return (
    <>
      <HomeHero />
      <HomeTopics />
      <HomeSteps />
      <HomeStats />
      <HomeHelp />
    </>
  )
}
