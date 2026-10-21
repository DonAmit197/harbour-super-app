import { PageContainer } from '../../components/layout/PageContainer'
import { TopicTile } from '../../components/sections/TopicTile'
import { VisuallyHidden } from '../../components/ui/VisuallyHidden'
import { homeContent } from '../../content/homeContent'

export function HomeTopics() {
  return (
    <nav aria-labelledby="home-topics" className="bg-white py-8 lg:py-0">
      <VisuallyHidden as="h2" id="home-topics">
        {homeContent.topicsLabel}
      </VisuallyHidden>
      <PageContainer>
        <ul className="grid gap-3 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {homeContent.topics.map((topic) => (
            <li key={topic.title}>
              <TopicTile {...topic} />
            </li>
          ))}
        </ul>
      </PageContainer>
    </nav>
  )
}
