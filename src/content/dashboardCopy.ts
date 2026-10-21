export const dashboardCopy = {
  pageTitle: 'Dashboard',
  banner: {
    title: 'Ready to start your retirement income?',
    text: 'Retirement Manager checks you’re eligible, brings across your other super and sets up your payments, all in one online application.',
    cta: 'Open Retirement Manager',
  },
  nomination: {
    title: 'Your nomination has expired',
    text: 'Your binding beneficiary nomination lapsed on 2 March 2026. Without a valid nomination, the trustee decides who receives your super if you die.',
    cta: 'Review beneficiaries',
  },
  transactions: {
    title: 'Recent transactions',
    viewAll: 'View all',
    viewAllLabel: 'View all transactions',
    items: [
      { description: 'Employer contribution', date: '15 Oct 2026', amount: '+$1,140.00', credit: true },
      { description: 'Investment earnings', date: '30 Sep 2026', amount: '+$2,316.40', credit: true },
      { description: 'Insurance premium', date: '28 Sep 2026', amount: '−$62.50', credit: false },
      { description: 'Administration fee', date: '28 Sep 2026', amount: '−$6.50', credit: false },
    ],
    creditWord: 'Paid in',
    debitWord: 'Taken out',
  },
  insurance: {
    title: 'Your insurance',
    items: [
      { label: 'Death and TPD cover', value: '$120,000' },
      { label: 'Monthly premium', value: '$62.50' },
      { label: 'Income protection', value: 'Not held' },
    ],
    cta: 'Manage cover',
  },
}
