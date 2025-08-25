import type { FC } from 'react'
import './index.css'

import { Page } from '@/components/Page.tsx'
import { MainInfo } from '@/components/main-info/main-info.tsx'
import { Logo } from '@/components/logo.tsx'
import { bem } from '@/css/bem'

export const IndexPage: FC = () => {
  const [, e] = bem('main-page')

  return (
    <Page back>
        <MainInfo />
    </Page>
  )
}
