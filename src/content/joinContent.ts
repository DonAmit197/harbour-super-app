import type { Feature } from '../components/sections/FeatureCard'

export const joinContent = {
  pageTitle: 'Join',
  hero: {
    eyebrow: 'Join Harbour Super',
    title: 'Join a fund that’s run for members',
    intro: 'It takes about 5 minutes online. Have your tax file number and your employer’s details handy.',
    cta: 'Start joining',
    note: 'Joining isn’t available in this demonstration.',
  },
  reasons: {
    title: 'Why members choose Harbour',
    items: [
      { icon: 'heart', title: 'Run only for members', text: 'We don’t have shareholders, so returns stay with our members.' },
      { icon: 'bar-chart', title: 'Simple investment choices', text: 'Choose a ready-made option or build your own mix.' },
      { icon: 'sunrise', title: 'Support into retirement', text: 'Tools and people to help you plan the years ahead.' },
    ] satisfies Feature[],
  },
  needs: {
    title: 'What you’ll need',
    items: ['Your tax file number', 'Your email address and mobile number', 'Your employer’s name, if you’re working'],
  },
}
