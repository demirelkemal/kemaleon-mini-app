import type { FC } from 'react';

import { Button } from '@/components/button.tsx';
import { useUserInfo } from '@/hooks/useUserInfo';

export const SubscriptionScreen: FC = () => {
  const { username } = useUserInfo();
  const greetingName = username ? <b>{username}</b> : '';

  return (
    <div className="flex flex-col h-screen w-full bg-white">
      {/* Верхняя часть с логотипом */}
      <div className="flex-1 flex items-center justify-center bg-gray-100">
        LOGO
      </div>

      {/* Нижняя часть с пользователем и кнопками */}
      <div className="flex-1 flex flex-col items-center justify-center gap-6 p-4 bg-white">
        <h2 className="text-xl font-semibold">Привет, {greetingName}</h2>
        <div className="flex flex-col gap-3 w-full max-w-xs">
          <Button variant={'secondary'}>Купить подписку</Button>
          <Button>Установка и настройка</Button>
          <Button>Поддержка</Button>
          <Button>Профиль</Button>
        </div>
      </div>
    </div>
  );
};
