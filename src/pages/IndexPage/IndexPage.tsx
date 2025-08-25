import type { FC } from 'react'
import './index.css'

import { Page } from '@/components/Page.tsx'
import { MainInfo } from '@/components/main-info/main-info.tsx'

export const IndexPage: FC = () => {
  return (
    <Page back>
      <MainInfo />
    </Page>
  )
}
