import { PageContainer } from '../../components/layout/PageContainer'
import { TopicTile } from '../../components/sections/TopicTile'
import { VisuallyHidden } from '../../components/ui/VisuallyHidden'
import { plannerContent } from '../../content/plannerContent'

export function PlannerTopics() {
  return (
    <nav aria-labelledby="planner-topics" className="bg-white pt-8 lg:pt-10">
      <VisuallyHidden as="h2" id="planner-topics">
        {plannerContent.topicsLabel}
      </VisuallyHidden>
      <PageContainer>
        <ul className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5 lg:gap-6">
          {plannerContent.topics.map((topic) => (
            <li key={topic.title}>
              <TopicTile {...topic} />
            </li>
          ))}
        </ul>
      </PageContainer>
    </nav>
  )
}
