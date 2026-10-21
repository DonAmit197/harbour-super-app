import type { Feature } from '../components/sections/FeatureCard'
import type { Topic } from '../components/sections/TopicTile'

export const plannerContent = {
  pageTitle: 'Retirement planner',
  hero: {
    eyebrow: 'Retirement planner',
    title: 'Plan the retirement you want',
    intro: 'See where you stand, explore your income options and start your retirement income when you’re ready, all in one place.',
    retirementManager: 'Retirement Manager',
    becomeMember: 'Become a member',
    note: 'Already a member? Retirement Manager asks you to log in first.',
  },
  readiness: {
    title: 'Getting retirement ready',
    progress: '2 of 5 steps done',
    progressLabel: 'Retirement readiness',
    done: 'Done',
    notStarted: 'Not started',
    steps: [
      { label: 'Check when you can access your super', done: true },
      { label: 'Combine your super', done: true },
      { label: 'Choose how often you’re paid', done: false },
      { label: 'Nominate your beneficiaries', done: false },
      { label: 'Apply for your retirement income', done: false },
    ],
    note: 'Illustration only.',
  },
  topicsLabel: 'Retirement topics',
  topics: [
    { icon: 'help', title: 'Am I ready to retire?' },
    { icon: 'dollar', title: 'Ways to take your income' },
    { icon: 'merge', title: 'Combine your super' },
    { icon: 'calculator', title: 'Estimate your income' },
    { icon: 'users', title: 'Get advice' },
  ] satisfies Topic[],
  manager: {
    eyebrow: 'Retirement Manager',
    title: 'Start your retirement income online',
    intro: 'Retirement Manager is our secure online application for members. It guides you through each step and shows you what’s left to do.',
    features: [
      { icon: 'clipboard', title: 'Apply online, no paper forms', text: 'One guided application takes you from checking you’re eligible to your first payment.' },
      { icon: 'check-circle', title: 'See every step in one place', text: 'Track documents, transfers from other funds and your payments as they happen.' },
      { icon: 'chat', title: 'Help at every decision', text: 'Clear, factual explanations of each option, and an adviser when you want a recommendation.' },
    ] satisfies Feature[],
    cta: 'Go to Retirement Manager',
    secureNote: 'Secure member log in required',
  },
  beforeYouStart: {
    title: 'Before you start',
    intro: 'Having these ready makes the application quicker. You can save your progress and come back at any time.',
    items: [
      'Your Harbour Super member number',
      'Photo ID, such as a driver licence or passport',
      'Details of any other super funds you want to bring across',
      'The bank account you’d like your payments paid into',
      'Who you’d like to receive your super if you die',
    ],
  },
}
