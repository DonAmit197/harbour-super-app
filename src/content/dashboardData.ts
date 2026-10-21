import type { IconName } from '../components/ui/iconNames'

// All figures are fake and display-only.
export const dashboardData = {
  greeting: 'Good morning, Margaret',
  memberLine: 'Member number HS1234567 · Super account',
  lastLogin: 'Last logged in 19 October 2026 at 7:42 pm',
  balance: {
    label: 'Total super balance',
    amount: '$380,214.56',
    change: '+$24,516 (6.9%) past 12 months',
    changeSpoken: 'Up $24,516, 6.9%, over the past 12 months',
    asAt: 'As at 20 October 2026',
    periodLabel: 'Balance period',
    periods: [
      { value: '1y', label: '1Y', accessibleLabel: '1 year' },
      { value: '3y', label: '3Y', accessibleLabel: '3 years' },
      { value: '5y', label: '5Y', accessibleLabel: '5 years' },
      { value: 'all', label: 'All', accessibleLabel: 'All time' },
    ],
    chartSummary: 'Line chart of your balance over the past 12 months, rising from $355,699 in November 2025 to $380,215 in October 2026.',
    tableCaption: 'Month-end balance, past 12 months',
    history: [
      { month: 'Nov', fullMonth: 'November 2025', value: 355699 },
      { month: 'Dec', fullMonth: 'December 2025', value: 357900 },
      { month: 'Jan', fullMonth: 'January 2026', value: 361200 },
      { month: 'Feb', fullMonth: 'February 2026', value: 359800 },
      { month: 'Mar', fullMonth: 'March 2026', value: 364900 },
      { month: 'Apr', fullMonth: 'April 2026', value: 366700 },
      { month: 'May', fullMonth: 'May 2026', value: 370100 },
      { month: 'Jun', fullMonth: 'June 2026', value: 369300 },
      { month: 'Jul', fullMonth: 'July 2026', value: 373600 },
      { month: 'Aug', fullMonth: 'August 2026', value: 376900 },
      { month: 'Sep', fullMonth: 'September 2026', value: 378400 },
      { month: 'Oct', fullMonth: 'October 2026', value: 380215 },
    ],
  },
  investmentMix: {
    title: 'Investment mix',
    chartSummary: 'Donut chart: Growth 45%, Balanced 30%, Defensive 15%, Cash 10%.',
    options: [
      { name: 'Growth', percent: 45 },
      { name: 'Balanced', percent: 30 },
      { name: 'Defensive', percent: 15 },
      { name: 'Cash', percent: 10 },
    ],
    action: 'Change investments',
  },
  contributions: {
    title: 'Contributions this year',
    total: '$4,540',
    since: 'since 1 July 2026',
    chartSummary: 'Bar chart of contributions by month: July $1,120, August $1,130, September $1,140, October $1,150.',
    tableCaption: 'Contributions by month',
    months: [
      { month: 'Jul', fullMonth: 'July', value: 1120 },
      { month: 'Aug', fullMonth: 'August', value: 1130 },
      { month: 'Sep', fullMonth: 'September', value: 1140 },
      { month: 'Oct', fullMonth: 'October', value: 1150 },
    ],
    note: 'Mostly employer contributions. Caps apply to what you can add each year.',
  },
}

export type QuickAction = { icon: IconName; title: string; text: string; to?: string; highlight?: boolean }

export const quickActions = {
  title: 'Quick actions',
  items: [
    { icon: 'sunrise', title: 'Start your retirement income', text: 'Apply in Retirement Manager', to: '/retirement-manager', highlight: true },
    { icon: 'merge', title: 'Combine your super', text: '1 other super account found' },
    { icon: 'plus', title: 'Make a contribution', text: 'Add to your super before or after tax' },
    { icon: 'user', title: 'Update your details', text: 'Contact details and preferences' },
    { icon: 'file', title: 'Forms and documents', text: 'Statements, letters and forms' },
  ] satisfies QuickAction[],
}
