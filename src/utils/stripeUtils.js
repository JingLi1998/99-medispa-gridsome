export const convertStripeAmount = (s) => {
  return `$${s.slice(0, -2)}.${s.slice(-2)}`;
};
