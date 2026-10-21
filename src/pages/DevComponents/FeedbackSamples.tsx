import { useState } from 'react'
import { Button } from '../../components/ui/Button'
import { Chip } from '../../components/ui/Chip'
import { Notice } from '../../components/ui/Notice'
import { SegmentedControl } from '../../components/ui/SegmentedControl'
import { DevSection } from './DevSection'

const periods = [
  { value: '1y', label: '1Y', accessibleLabel: '1 year' },
  { value: '3y', label: '3Y', accessibleLabel: '3 years' },
  { value: '5y', label: '5Y', accessibleLabel: '5 years' },
  { value: 'all', label: 'All', accessibleLabel: 'All time' },
] as const

export function FeedbackSamples() {
  const [period, setPeriod] = useState<(typeof periods)[number]['value']>('1y')
  return (
    <DevSection title="Notices, chips and segmented control">
      <Notice variant="info">Log in to continue to Retirement Manager.</Notice>
      <Notice variant="demo">Demo prototype: use the demo username and password shared with you.</Notice>
      <Notice variant="warning" title="Your nomination has expired">
        <p>Your binding beneficiary nomination lapsed on 2 March 2026.</p>
        <div>
          <Button variant="secondary" size="small" withArrow>
            Review beneficiaries
          </Button>
        </div>
      </Notice>
      <div className="flex flex-wrap items-center gap-3">
        <Chip tone="positive" icon="trending-up" accessibleText="Up $24,516, 6.9%, over the past 12 months">
          +$24,516 (6.9%) past 12 months
        </Chip>
        <Chip tone="info">Information</Chip>
        <Chip>Not held</Chip>
      </div>
      <SegmentedControl label="Balance period" options={periods} value={period} onChange={setPeriod} />
    </DevSection>
  )
}
