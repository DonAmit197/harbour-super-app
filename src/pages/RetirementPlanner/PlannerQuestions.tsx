import { Section } from '../../components/sections/Section'
import { Accordion } from '../../components/ui/Accordion'
import { plannerQuestions } from '../../content/plannerQuestions'

const items = plannerQuestions.items.map(({ id, question, answer }) => ({
  id,
  title: question,
  content: <p className="text-body-m text-slate">{answer}</p>,
}))

export function PlannerQuestions() {
  return (
    <Section labelledBy="planner-questions">
      <div className="mx-auto flex max-w-3xl flex-col gap-6">
        <h2 id="planner-questions" className="text-h2 lg:text-display-l">
          {plannerQuestions.title}
        </h2>
        <Accordion items={items} defaultOpenIds={[items[0].id]} />
        <p className="text-caption text-slate">{plannerQuestions.note}</p>
      </div>
    </Section>
  )
}
