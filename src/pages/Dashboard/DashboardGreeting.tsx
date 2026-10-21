import { dashboardData } from '../../content/dashboardData'

export function DashboardGreeting() {
  return (
    <div className="flex flex-col gap-1 md:flex-row md:items-end md:justify-between md:gap-6">
      <div className="flex flex-col gap-1">
        <h1 className="text-h2 lg:text-display-l">{dashboardData.greeting}</h1>
        <p className="text-body-m text-slate">{dashboardData.memberLine}</p>
      </div>
      <p className="text-body-s text-slate">{dashboardData.lastLogin}</p>
    </div>
  )
}
