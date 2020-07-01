export const convertStripeAmount = (s) => {
  return s === "0" ? "$0.00" : `$${s.slice(0, -2)}.${s.slice(-2)}`;
};
