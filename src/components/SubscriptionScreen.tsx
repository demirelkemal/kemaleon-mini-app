import { Button } from '@/components/button.tsx';
import { getMockSubscription, getRemainingDays } from '@/helpers/subscription';

export function SubscriptionScreen() {
  const subscription = getMockSubscription();
  const remainingDays = subscription.isPaid
    ? getRemainingDays(subscription.endDate)
    : null;

  const formatDate = (value: string) =>
    new Date(value).toLocaleDateString('ru-RU');

  const onPayClick = () => {
    console.info('Payment flow placeholder');
  };

  return (
    <div className="flex flex-col min-h-screen w-full bg-white items-center justify-center p-6">
      <div className="w-full max-w-md rounded-3xl bg-gray-50 p-6 shadow-sm">
        <h1 className="text-2xl font-semibold mb-4">Подписка</h1>
        {subscription.isPaid ? (
          <div className="flex flex-col gap-3 text-gray-800">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">Дата начала</span>
              <span className="font-medium">
                {formatDate(subscription.startDate)}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">Дата окончания</span>
              <span className="font-medium">
                {formatDate(subscription.endDate)}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">Осталось дней</span>
              <span className="font-medium">{remainingDays}</span>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            <p className="text-gray-700">
              Подписка не оплачена. Продлите доступ, чтобы продолжить пользоваться
              сервисом.
            </p>
            <Button onClick={onPayClick}>Оплатить</Button>
          </div>
        )}
      </div>
    </div>
  );
}
