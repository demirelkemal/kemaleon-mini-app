export type SubscriptionInfo = {
  isPaid: boolean;
  startsAt: string;
  endsAt: string;
};

export function getMockSubscription(): SubscriptionInfo {
  return {
    isPaid: true,
    startsAt: '2024-01-01T00:00:00.000Z',
    endsAt: '2024-12-31T23:59:59.000Z',
  };
}

export function getRemainingDays(endsAt: string): number {
  const endDate = new Date(endsAt);
  const now = new Date();
  const diffMs = endDate.getTime() - now.getTime();
  const msPerDay = 24 * 60 * 60 * 1000;

  return Math.ceil(diffMs / msPerDay);
}
