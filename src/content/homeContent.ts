import type { Feature } from '../components/sections/FeatureCard'
import type { Topic } from '../components/sections/TopicTile'

export const homeContent = {
  pageTitle: 'Home',
  hero: {
    eyebrow: 'Your future, our focus',
    titleStart: 'A more confident tomorrow,',
    titleHighlight: 'together.',
    intro: 'Simple guidance, flexible options and support at every step of your super and retirement journey.',
    logIn: 'Log in to your account',
    planner: 'Your retirement planner',
    trust: 'Run only for members. No shareholders.',
    imageAlt: 'Two smiling older people walking a coastal path',
  },
  topicsLabel: 'Explore Harbour Super',
  topics: [
    { icon: 'leaf', title: 'Why Harbour', text: 'Run only for members, so profits go back to you.', tone: 'lagoon' },
    { icon: 'bar-chart', title: 'What we offer', text: 'Super, retirement income and insurance in one place.', tone: 'lagoon' },
    { icon: 'wallet', title: 'Your super', text: 'Grow it, track it and bring it all together.', tone: 'sand' },
    { icon: 'umbrella', title: 'Your retirement', text: 'Options, guidance and support for what comes next.', tone: 'sand' },
  ] satisfies Topic[],
  steps: {
    eyebrow: 'Retirement, made simpler',
    title: 'From “I want to retire” to your first payment',
    intro: 'Our retirement planner brings every step into one place, so you always know what’s done and what’s next.',
    items: [
      { title: 'Check you’re ready', text: 'See when you can access your super and what you’ll need to get started.' },
      { title: 'Explore your income', text: 'Compare how much you could receive each year and how often you’d like to be paid.' },
      { title: 'Apply in one place', text: 'Start your retirement income online in one guided application, with no paper forms.' },
    ],
    cta: 'Open your retirement planner',
  },
  stats: {
    title: 'Harbour Super in numbers',
    items: [
      { value: '1.2m', label: 'members across Australia' },
      { value: 'A$96b', label: 'in members’ savings' },
      { value: '4.7 / 5', label: 'member satisfaction rating', spoken: '4.7 out of 5' },
    ],
    note: 'Figures are illustrative for this demonstration.',
  },
  help: {
    title: 'Help when you need it',
    items: [
      { icon: 'phone', title: 'Talk to us', text: 'Call 1300 975 707, Monday to Friday, 8am–8pm AEST.', action: 'Call us' },
      { icon: 'calendar', title: 'Book an appointment', text: 'Get general advice from our team at no extra cost, by phone or video.', action: 'Book now' },
      { icon: 'play-circle', title: 'Join a free webinar', text: 'Short online sessions on getting ready for retirement.', action: 'See sessions' },
    ] satisfies Array<Feature & { action: string }>,
  },
}
