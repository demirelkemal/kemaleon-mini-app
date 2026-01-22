import type { FC } from 'react';
import './index.css';

import { Page } from '@/components/Page.tsx';
import { SubscriptionScreen } from '@/pages/SubscriptionScreen/SubscriptionScreen';

export const IndexPage: FC = () => {
  return (
    <Page back>
      <SubscriptionScreen />
    </Page>
  );
};
