import type { FC } from 'react'

import { Button } from '@/components/button.tsx'

export const SubscriptionScreen: FC = () => {
  const onPayClick = () => {
    console.info('Payment placeholder')
  }

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-4 bg-white">
      <h1 className="text-2xl font-semibold">Подписка</h1>
      <Button onClick={onPayClick}>Оплатить</Button>
    </div>
  )
}
