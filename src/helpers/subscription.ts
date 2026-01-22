export type MockSubscription = {
  isPaid: boolean;
  startDate: string;
  endDate: string;
};

export const getMockSubscription = (): MockSubscription => {
  const startDate = new Date();
  const endDate = new Date(startDate);
  endDate.setDate(startDate.getDate() + 30);

  return {
    isPaid: true,
    startDate: startDate.toISOString(),
    endDate: endDate.toISOString(),
  };
};

export const getRemainingDays = (endDate: string): number => {
  const end = new Date(endDate);
  const diffMs = end.getTime() - Date.now();
  const days = Math.ceil(diffMs / (1000 * 60 * 60 * 24));

  return Math.max(days, 0);
};
