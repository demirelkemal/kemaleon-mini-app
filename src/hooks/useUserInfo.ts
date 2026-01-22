import { retrieveLaunchParams } from '@telegram-apps/sdk-react';

export const useUserInfo = () => {
  let username = '';

  try {
    const { tgWebAppData } = retrieveLaunchParams();
    const user = tgWebAppData?.user;

    username = user?.username || user?.first_name || '';
  } catch {
    username = '';
  }

  return { username };
};
