import type { FC } from 'react'
import './index.css'

import { Page } from '@/components/Page.tsx'
import { SubscriptionScreen } from '@/components/SubscriptionScreen.tsx'

export const IndexPage: FC = () => {
  return (
    <Page back>
      <SubscriptionScreen />
    </Page>
  )
}
